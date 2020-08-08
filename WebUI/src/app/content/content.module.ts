import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContentRoutingModule } from './content-routing.module';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    CheckoutComponent,
    OrderSummaryComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    ContentRoutingModule,

    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
  ]
})
export class ContentModule { }
