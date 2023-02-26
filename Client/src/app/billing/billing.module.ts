import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';

@NgModule({
  declarations: [
    BillingComponent,
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
  ],
})
export class BillingModule {
}
