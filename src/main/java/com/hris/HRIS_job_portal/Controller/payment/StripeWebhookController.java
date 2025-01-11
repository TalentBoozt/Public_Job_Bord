package com.hris.HRIS_job_portal.Controller.payment;

import com.hris.HRIS_job_portal.Model.payment.BillingHistoryModel;
import com.hris.HRIS_job_portal.Model.payment.InvoicesModel;
import com.hris.HRIS_job_portal.Model.payment.PaymentMethodsModel;
import com.hris.HRIS_job_portal.Model.payment.SubscriptionsModel;
import com.hris.HRIS_job_portal.Repository.payment.BillingHistoryRepository;
import com.hris.HRIS_job_portal.Repository.payment.InvoiceRepository;
import com.hris.HRIS_job_portal.Repository.payment.PaymentMethodRepository;
import com.hris.HRIS_job_portal.Service.CmpPostedJobsService;
import com.hris.HRIS_job_portal.Service.CompanyService;
import com.hris.HRIS_job_portal.Service.CredentialsService;
import com.hris.HRIS_job_portal.Service.payment.*;
import com.hris.HRIS_job_portal.Utils.ConfigUtility;
import com.stripe.exception.StripeException;
import com.stripe.model.*;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

@RestController
@RequestMapping("/stripe")
public class StripeWebhookController {

    @Autowired
    ConfigUtility configUtility;

    @Autowired
    PaymentMethodRepository paymentMethodRepository;

    @Autowired
    BillingHistoryRepository billingHistoryRepository;

    @Autowired
    InvoiceRepository invoiceRepository;

    @Autowired
    StripeService stripeService;

    @Autowired
    private SubscriptionService subscriptionService;

    @Autowired
    private BillingHistoryService billingHistoryService;

    @Autowired
    private PaymentMethodService paymentMethodService;

    @Autowired
    private CredentialsService credentialsService;

    @Autowired
    private CompanyService companyService;

    @Autowired
    private CmpPostedJobsService cmpPostedJobsService;

    @Autowired
    private PrePaymentService prePaymentService;

    private static final Logger logger = LoggerFactory.getLogger(StripeWebhookController.class);

    @PostMapping("/stripe-events")
    public ResponseEntity<String> handleStripeEvent(@RequestBody String payload) {
        Event event = Event.GSON.fromJson(payload, Event.class);
        handleEvent(event);
        return ResponseEntity.ok("Event processed");
    }

    @PostMapping("/create-checkout-session")
    public ResponseEntity<Map<String, String>> createCheckoutSession(@RequestBody Map<String, Object> data) throws StripeException {
        String companyId = (String) data.get("companyId");
        String planName = (String) data.get("planName");

        if (companyId == null || companyId.isEmpty()) {
            throw new IllegalArgumentException("Company ID is required");
        }
        if (planName == null || planName.isEmpty()) {
            throw new IllegalArgumentException("Plan name is required");
        }

        Session session = stripeService.createCheckoutSession(companyId, planName);

        Map<String, String> response = new HashMap<>();
        response.put("id", session.getId());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/webhook")
    public ResponseEntity<String> handleStripeWebhook(
            @RequestBody String payload,
            @RequestHeader("Stripe-Signature") String sigHeader) {

        try {
            Event event = Webhook.constructEvent(payload, sigHeader, configUtility.getProperty("STRIPE_WEBHOOK_SECRET"));
            handleEvent(event);
            return ResponseEntity.ok("Webhook processed successfully");
        } catch (Exception e) {
            logger.error("Error processing webhook: {}", e.getMessage(), e);
            return ResponseEntity.badRequest().body("Webhook error: " + e.getMessage());
        }
    }

    private void handleEvent(Event event) {
        Map<String, Consumer<Event>> eventHandlers = Map.of(
                "checkout.session.completed", this::handleCheckoutSessionCompleted,
                "invoice.payment_succeeded", this::handleInvoicePaymentSucceeded,
                "invoice.payment_failed", this::handleInvoicePaymentFailed,
                "invoice.created", this::handleInvoiceCreated,
                "invoice.updated", this::handleInvoiceUpdated,
                "customer.subscription.updated", this::handleSubscriptionUpdated,
                "customer.subscription.deleted", this::handleSubscriptionDeleted
        );

        Consumer<Event> handler = eventHandlers.getOrDefault(event.getType(), this::handleUnhandledEvent);
        handler.accept(event);
    }

    private void handleCheckoutSessionCompleted(Event event) {
        try {
            Session session = (Session) event.getDataObjectDeserializer().getObject().orElse(null);
            if (session == null || session.getMetadata() == null) {
                logger.warn("Session or metadata is null");
                return;
            }

            String companyId = session.getMetadata().get("company_id");
            String planName = session.getMetadata().get("plan_name");

            if (companyId == null || planName == null) {
                logger.warn("Missing required metadata: company_id or plan_name");
                return;
            }
            try {
                createSubscription(companyId, planName, session);
                createBillingHistory(companyId, session.getId(), session);
                createPaymentMethod(companyId, session);
                updateCompanyStatus(companyId, session);
                logger.info("Subscription created successfully for company: {}", companyId);
            } catch (StripeException e) {
                logger.error("Error creating subscription for company: {}", companyId, e);
            }

        } catch (Exception e) {
            logger.error("Error handling checkout.session.completed: {}", e.getMessage(), e);
        }
    }

    private void handleInvoiceCreated(Event event) {
        Invoice invoice = (Invoice) event.getDataObjectDeserializer().getObject().orElse(null);
        if (invoice == null) {
            logger.warn("Invoice object is null");
            return;
        }
        try {
            createInvoice(invoice);
        } catch (StripeException e) {
            logger.error("Error creating invoice: {}", e.getMessage(), e);
        }
    }

    private void handleInvoiceUpdated(Event event) {
        Invoice invoice = (Invoice) event.getDataObjectDeserializer().getObject().orElse(null);
        if (invoice == null) {
            logger.warn("Invoice object is null");
            return;
        }
        try {
            updateInvoice(invoice);
        } catch (StripeException e) {
            logger.error("Error updating invoice: {}", e.getMessage(), e);
        }
    }

    private void handleInvoicePaymentSucceeded(Event event) {
        Invoice invoice = (Invoice) event.getDataObjectDeserializer().getObject().orElse(null);
        if (invoice == null) {
            logger.warn("Invoice object is null");
            return;
        }
        String subscriptionId = invoice.getSubscription();
        String amountPaid = String.valueOf(invoice.getAmountPaid());

        // Update subscription billing history
        subscriptionService.updateBillingHistory(subscriptionId, amountPaid, "Paid");
    }

    private void handleInvoicePaymentFailed(Event event) {
        Invoice invoice = (Invoice) event.getDataObjectDeserializer().getObject().orElse(null);
        if (invoice == null) {
            logger.warn("Invoice object is null");
            return;
        }
        String subscriptionId = invoice.getSubscription();

        // Update subscription as inactive
        subscriptionService.markAsInactive(subscriptionId);
    }

    private void handleUnhandledEvent(Event event) {
        logger.info("Unhandled event type: {}", event.getType());
    }

    private void createInvoice(Invoice invoice) throws StripeException {
        String companyId;

        // Retrieve the associated customer
        Customer customer = Customer.retrieve(invoice.getCustomer());
        if (customer.getMetadata() != null && customer.getMetadata().containsKey("company_id")) {
            companyId = customer.getMetadata().get("company_id");
        } else {
            logger.warn("Customer metadata does not contain company_id");
            return;
        }

        InvoicesModel invoiceModel = new InvoicesModel();
        invoiceModel.setInvoiceId(invoice.getId());
        invoiceModel.setCompanyId(companyId);
        invoiceModel.setSubscriptionId(invoice.getSubscription());
        invoiceModel.setAmountDue(String.valueOf(invoice.getAmountDue()));
        invoiceModel.setStatus(invoice.getStatus());
        invoiceModel.setBillingDate(new Date(invoice.getCreated() * 1000L));
        invoiceModel.setDueDate(new Date(invoice.getDueDate() * 1000L));
        invoiceModel.setPeriodStart(new Date(invoice.getPeriodStart() * 1000L));
        invoiceModel.setPeriodEnd(new Date(invoice.getPeriodEnd() * 1000L));

        invoiceRepository.save(invoiceModel);
        prePaymentService.updateInvoiceId(invoice.getId(), companyId);
    }

    private void updateInvoice(Invoice invoice) throws StripeException {
        String companyId;

        Customer customer = Customer.retrieve(invoice.getCustomer());
        if (customer.getMetadata() != null && customer.getMetadata().containsKey("company_id")) {
            companyId = customer.getMetadata().get("company_id");
        } else {
            logger.warn("Missing required metadata: company_id");
            return;
        }

        InvoicesModel existingInvoice = invoiceRepository.findByInvoiceId(invoice.getId());
        if (existingInvoice != null) {
            existingInvoice.setAmountDue(String.valueOf(invoice.getAmountDue()));
            existingInvoice.setStatus(invoice.getStatus());
            existingInvoice.setBillingDate(new Date(invoice.getCreated() * 1000L));
            existingInvoice.setDueDate(new Date(invoice.getDueDate() * 1000L));
            existingInvoice.setPeriodStart(new Date(invoice.getPeriodStart() * 1000L));
            existingInvoice.setPeriodEnd(new Date(invoice.getPeriodEnd() * 1000L));
            invoiceRepository.save(existingInvoice);

            prePaymentService.updateInvoiceId(invoice.getId(), companyId);
        }
    }

    private void createSubscription(String companyId, String planName, Session subscriptionSession) throws StripeException {
        Subscription subscription = Subscription.retrieve(subscriptionSession.getSubscription());

        SubscriptionsModel subscriptionsModel = new SubscriptionsModel();
        subscriptionsModel.setCompanyId(companyId);
        subscriptionsModel.setPlan_name(planName);
        subscriptionsModel.setCost(String.valueOf(subscription.getItems().getData().get(0).getPlan().getAmount() / 100.0));
        subscriptionsModel.setBilling_cycle(subscription.getBillingCycleAnchor().toString());
        subscriptionsModel.setStart_date(subscription.getCurrentPeriodStart().toString());
        subscriptionsModel.setEnd_date(subscription.getCurrentPeriodEnd().toString());
        subscriptionsModel.set_active(true);
        subscriptionService.updateSubscription(companyId, subscriptionsModel);
    }

    private void createBillingHistory(String companyId, String invoiceId, Session session) throws StripeException {
        PaymentIntent paymentIntent = PaymentIntent.retrieve(session.getPaymentIntent());

        BillingHistoryModel billingHistory = new BillingHistoryModel();
        billingHistory.setCompanyId(companyId);
        billingHistory.setAmount(String.valueOf(paymentIntent.getAmountReceived()));
        billingHistory.setDate(new Date().toString());
        billingHistory.setInvoice_id(invoiceId);
        billingHistory.setStatus("Completed");
        billingHistoryService.save(billingHistory);
    }

    private void createPaymentMethod(String companyId, Session session) throws StripeException {
        PaymentIntent paymentIntent = PaymentIntent.retrieve(session.getPaymentIntent());
        PaymentMethod paymentMethod = PaymentMethod.retrieve(paymentIntent.getPaymentMethod());

        PaymentMethodsModel paymentMethodModel = new PaymentMethodsModel();
        paymentMethodModel.setCompanyId(companyId);
        paymentMethodModel.setType(paymentMethod.getType());
        paymentMethodModel.setLast_four(paymentMethod.getCard().getLast4());
        paymentMethodModel.setExpiry_date(paymentMethod.getCard().getExpMonth() + "/" + paymentMethod.getCard().getExpYear());
        paymentMethodService.save(paymentMethodModel);
    }

    private void updateCompanyStatus(String companyId, Session session) throws StripeException {
        PaymentIntent paymentIntent = PaymentIntent.retrieve(session.getPaymentIntent());
        PaymentMethod paymentMethod = PaymentMethod.retrieve(paymentIntent.getPaymentMethod());
        Subscription subscription = Subscription.retrieve(session.getSubscription());

        companyService.findAndUpdateCompanyLevel(companyId, "3");
        cmpPostedJobsService.findAndUpdateCompanyLevel(companyId, "3");
        credentialsService.findAndUpdateCompanyLevel(companyId, "3");

        prePaymentService.updateSubscriptionId(subscription.getId(), companyId);
        prePaymentService.updatePaymentMethodId(paymentMethod.getId(), companyId);
        prePaymentService.updateStatus(companyId, "Completed");
    }

    private void handleSubscriptionUpdated(Event event) {
        Subscription subscription = (Subscription) event.getDataObjectDeserializer().getObject().orElse(null);
        if (subscription == null) {
            logger.warn("Subscription object is null");
            return;
        }
        SubscriptionsModel subscriptionsModel = new SubscriptionsModel();
        subscriptionsModel.setPlan_name(subscription.getItems().getData().get(0).getPlan().getNickname());
        subscriptionsModel.setCost(String.valueOf(subscription.getItems().getData().get(0).getPlan().getAmount() / 100.0));
        subscriptionsModel.setBilling_cycle(subscription.getBillingCycleAnchor().toString());
        subscriptionsModel.setStart_date(subscription.getCurrentPeriodStart().toString());
        subscriptionsModel.setEnd_date(subscription.getCurrentPeriodEnd().toString());
        subscriptionsModel.set_active(subscription.getStatus().equals("active"));
        subscriptionService.updateSubscription(subscription.getCustomer(), subscriptionsModel);
    }

    private void handleSubscriptionDeleted(Event event) {
        Subscription subscription = (Subscription) event.getDataObjectDeserializer().getObject().orElse(null);
        if (subscription == null) {
            logger.warn("Subscription object is null");
            return;
        }
        subscriptionService.markAsInactive(subscription.getId());
    }
}

