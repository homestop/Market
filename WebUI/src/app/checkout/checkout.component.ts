import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../models/product.model';
import { CheckoutService } from '../services/checkout.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private checkoutService: CheckoutService) {
  }

  //TODO: Dosen't work validators
  emailForm = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  cartItems: Array<Product>;

  onClickSend() {
    let firstLastName = document.getElementById('firstLastNameId') as HTMLInputElement;
    let email = document.getElementById('emailInputId') as HTMLInputElement;
    let phone = document.getElementById('phoneId') as HTMLInputElement;
    let shippingAddress = document.getElementById('shippingAddressId') as HTMLInputElement;
    console.log(email.value, firstLastName.value);
  }

  ngOnInit() {
    this.cartItems = this.checkoutService.cartGet();

    console.log(this.cartItems);
  }
}
