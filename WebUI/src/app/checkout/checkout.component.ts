import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../models/product.model';
import { CheckoutService } from '../services/checkout.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { SendHelper } from './ helpers';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(
    private checkoutService: CheckoutService,
    private orderService: OrderService
  ) {
  }

  cartItems: Array<Product>;

  onSendClick() {
    const order = new Order();

    SendHelper.processOrder(order, this.cartItems);
    this.orderService.post(order).subscribe();
    console.log(JSON.stringify(order));
  }

  onRemoveByIndex(product: Product) {
    this.checkoutService.cartRemoveByIndex(product);
  }

  onRemoveAllClick() {
    this.checkoutService.cartRemoveAll();
  }

  ngOnInit() {
    this.cartItems = this.checkoutService.cartGet();
    console.log(this.cartItems);
  }
}
