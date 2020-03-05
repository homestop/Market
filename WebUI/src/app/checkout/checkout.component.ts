import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../models/product.model';
import { CheckoutService } from '../services/checkout.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';


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

  //TODO: Dosen't work validators
  emailForm = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  cartItems: Array<Product>;

  onClickSend() {
    //TODO: if input is null
    let firstLastName = document.getElementById('firstLastNameId') as HTMLInputElement;
    let email = document.getElementById('emailInputId') as HTMLInputElement;
    let phone = document.getElementById('phoneId') as HTMLInputElement;
    let shippingAddress = document.getElementById('shippingAddressId') as HTMLInputElement;
    let productsId = this.cartItems.map(x => x.id);

    let order = new Order(
      productsId,
      firstLastName.value,
      email.value,
      phone.value,
      shippingAddress.value
    );

    this.orderService.post(order).subscribe();
    console.log(JSON.stringify(order));
  }

  ngOnInit() {
    this.cartItems = this.checkoutService.cartGet();
    console.log(this.cartItems);
  }
}
