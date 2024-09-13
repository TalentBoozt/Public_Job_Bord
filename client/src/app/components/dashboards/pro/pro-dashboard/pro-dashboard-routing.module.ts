import {RouterModule, Routes} from "@angular/router";
import {ProDashboardComponent} from "./pro-dashboard.component";
import {ProMainDbComponent} from "../pro-main-db/pro-main-db.component";
import {PersonalProfileMyComponent} from "../../free/personal-profile-my/personal-profile-my.component";
import {
  PersonalProfileSettingsComponent
} from "../../free/personal-profile-settings/personal-profile-settings.component";
import {BusinessProfileMyComponent} from "../../free/business-profile-my/business-profile-my.component";
import {
  BusinessProfileSettingsComponent
} from "../../free/business-profile-settings/business-profile-settings.component";
import {CompanyJobsMyComponent} from "../../free/company-jobs-my/company-jobs-my.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: ProDashboardComponent,
    children: [
      { path: '', redirectTo: '/pro/overview', pathMatch: 'full' },
      { path: 'overview', component: ProMainDbComponent },
      { path: 'personal-profile', component: PersonalProfileMyComponent },
      { path: 'personal-profile-settings', component: PersonalProfileSettingsComponent },
      { path: 'business-profile-my', component: BusinessProfileMyComponent },
      { path: 'business-profile-settings', component: BusinessProfileSettingsComponent },
      { path: 'company-jobs', component: CompanyJobsMyComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProDashboardRoutingModule {}