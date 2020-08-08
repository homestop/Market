import { Component, OnInit } from '@angular/core';

import { Product } from '../../core/models/product.model';
import { CheckoutService } from '../../core/services/checkout.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(
    private checkoutService: CheckoutService,
  ) {
  }

  cartItems: Array<Product>;

  ngOnInit() {
    this.cartItems = this.checkoutService.cartGet();
    console.log(this.cartItems);
  }
}
