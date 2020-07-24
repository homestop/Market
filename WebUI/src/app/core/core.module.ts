import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ImageService } from './services/image.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { CheckoutService } from './services/checkout.service';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
