import {NgModule} from "@angular/core";
import {BusinessProfileComponent} from "./business-profile.component";
import {CommonModule} from "@angular/common";
import {BusinessProfileRoutingModule} from "./business-profile-routing.module";
import {SharedPipesModule} from "../../shared/modules/shared-pipes.module";
import {SharedComponentModule} from "../../shared/modules/shared-component.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BusinessProfileComponent
  ],
    imports: [
        CommonModule,
        BusinessProfileRoutingModule,
        SharedPipesModule,
        SharedComponentModule,
        ReactiveFormsModule
    ],
})
export class BusinessProfileModule { }
