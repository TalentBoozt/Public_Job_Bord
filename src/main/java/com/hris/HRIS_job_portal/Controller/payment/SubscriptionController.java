package com.hris.HRIS_job_portal.Controller.payment;

import com.hris.HRIS_job_portal.Model.payment.SubscriptionsModel;
import com.hris.HRIS_job_portal.Service.payment.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping("/{companyId}")
    public ResponseEntity<SubscriptionsModel> getSubscription(@PathVariable String companyId) {
        SubscriptionsModel subscription = subscriptionService.getSubscription(companyId);
        if (subscription != null) {
            return ResponseEntity.ok(subscription);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{companyId}")
    public ResponseEntity<SubscriptionsModel> updateSubscription(
            @PathVariable String companyId,
            @RequestBody SubscriptionsModel subscription) {
        SubscriptionsModel updatedSubscription = subscriptionService.updateSubscription(companyId, subscription);
        if (updatedSubscription != null) {
            return ResponseEntity.ok(updatedSubscription);
        }
        return ResponseEntity.notFound().build();
    }
}
