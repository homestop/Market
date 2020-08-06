import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ImageService } from './services/image.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { CheckoutService } from './services/checkout.service';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ImageService,
    OrderService,
    ProductService,
    CheckoutService,
  ]
})
export class CoreModule { }
