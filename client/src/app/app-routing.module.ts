import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
  { path: 'job', loadChildren: () => import('./components/job/job.module').then(m => m.JobModule) },
  { path: 'job-details/:id', loadChildren: () => import('./components/shared/job-details/job-details.module').then(m => m.JobDetailsModule) },
  { path: 'job-apply', loadChildren: () => import('./components/shared/job-apply/job-apply.module').then(m => m.JobApplyModule) },
  { path: 'job-post', loadChildren: () => import('./components/shared/job-post/job-post.module').then(m => m.JobPostModule) },
  { path: 'learn-more-jobs', loadChildren: () => import('./components/shared/jobs-learn-more/jobs-learn-more.module').then(m => m.JobsLearnMoreModule) },
  { path: 'companies', loadChildren: () => import('./components/companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: 'pricing', loadChildren: () => import('./components/prising/prising.module').then(m => m.PrisingModule) },
  { path: 'candidate-profile', loadChildren: () => import('./components/shared/emp-profile/emp-profile.module').then(m => m.EmpProfileModule) },
  { path: 'candidate-profile-setting', loadChildren: () => import('./components/shared/emp-profile-settings/emp-profile-settings.module').then(m => m.EmpProfileSettingsModule) },
  { path: 'my-jobs', loadChildren: () => import('./components/shared/emp-saved-jobs/emp-saved-jobs.module').then(m => m.EmpSavedJobsModule) },
  { path: 'business-profile/:id', loadChildren: () => import('./components/business-profile/business-profile.module').then(m => m.BusinessProfileModule) },
  { path: 'company-jobs/:id', loadChildren: () => import('./components/company-jobs/company-jobs.module').then(m => m.CompanyJobsModule) },
  { path: 'locked', loadChildren: () => import('./components/lock-screen/lock-screen.module').then(m => m.LockScreenModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'reset', loadChildren: () => import('./components/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  { path: 'reset-password', loadChildren: () => import('./components/reset-password-form/reset-password-form.module').then(m => m.ResetPasswordFormModule) },
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'privacy-policy', loadChildren: () => import('./components/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'terms-and-conditions', loadChildren: () => import('./components/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule) },
  { path: 'faq', loadChildren: () => import('./components/faq/faq.module').then(m => m.FaqModule) },
  { path: 'dashboard', loadChildren: () => import('./components/dashboards/free/free-dashboard/free-dashboard.module').then(m => m.FreeDashboardModule) },
  { path: 'pro', loadChildren: () => import('./components/dashboards/pro/pro-dashboard/pro-dashboard.module').then(m => m.ProDashboardModule) },
  { path: 'candidate-profile-setting-test', loadChildren: () => import('./components/shared/emp-profile-settings-test/emp-profile-settings-test.module').then(m => m.EmpProfileSettingsTestModule) },
  { path: '403', loadChildren: () => import('./components/shared/forbidden/forbidden.module').then(m => m.ForbiddenModule) },
  { path: 'for-companies', loadChildren: () => import('./components/for-companies/for-companies.module').then(m => m.ForCompaniesModule) },
  { path: 'oauth-callback', loadChildren: () => import('./components/shared/o-auth-callback/o-auth-callback.module').then(m => m.OAuthCallbackModule) },
  { path: 'oauth-callback/github', loadChildren: () => import('./components/shared/o-auth-callback-github/o-auth-callback-github.module').then(m => m.OAuthCallbackGithubModule) },
  { path: '404', loadChildren: () => import('./components/shared/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'job-analysis/:id', loadChildren: () => import('./components/dashboards/single-job-post-analysis/single-job-post-analysis.module').then(m => m.SingleJobPostAnalysisModule) },
  { path: 'interview-prep', loadChildren: () => import('./components/interview-prep/interview-prep/interview-prep.module').then(m => m.InterviewPrepModule) },
  { path: 'interview-prep-answer/:qid/:aid', loadChildren: () => import('./components/interview-prep/interview-prep-full-answer/interview-prep-full-answer.module').then(m => m.InterviewPrepFullAnswerModule) },
  { path: 'we-built-with', loadChildren: () => import('./components/built-with/built-with.module').then(m => m.BuiltWithModule) },
  { path: 'employees', loadChildren: () => import('./components/employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'footer', loadChildren: () => import('./components/shared/footer/footer.module').then(m => m.FooterModule) },
  { path: 'private/interview-questions', loadChildren: () => import('./private/interview-questions/interview-questions.module').then(m => m.InterviewQuestionsModule) },
  { path: 'private/system-notifications', loadChildren: () => import('./private/system-notifications/system-notifications.module').then(m => m.SystemNotificationsModule) },
  { path: 'support', loadChildren: () => import('./components/shared/content/support/support.module').then(m => m.SupportModule) },
  { path: 'tech-and-startup-jobs', loadChildren: () => import('./components/shared/content/tech-and-startup/tech-and-startup.module').then(m => m.TechAndStartupModule) },
  { path: 'quick-and-easy', loadChildren: () => import('./components/shared/content/quick-and-easy/quick-and-easy.module').then(m => m.QuickAndEasyModule) },
  { path: 'save-time', loadChildren: () => import('./components/shared/content/save-time/save-time.module').then(m => m.SaveTimeModule) },
  { path: 'header', loadChildren: () => import('./components/shared/header/header.module').then(m => m.HeaderModule) },
  { path: 'monitor', loadChildren: () => import('./components/dashboards/monitoring-dashboard/monitoring-dashboard.module').then(m => m.MonitoringDashboardModule) },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
