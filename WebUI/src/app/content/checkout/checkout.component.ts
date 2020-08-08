import { Component, OnInit } from '@angular/core';

import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CheckoutService } from '../../core/services/checkout.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(
    private checkoutService: CheckoutService,
    private prodService: ProductService
  ) {
  }

  cartItems: Array<Product>;

  ngOnInit() {
    // TODO : Remove it
    this.prodService.getById(17).subscribe((x: Product) => {
      this.checkoutService.productList.push(x);
    });

    this.cartItems = this.checkoutService.cartGet();
    console.log(this.cartItems);
  }
}
