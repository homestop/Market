import { Component, OnInit } from '@angular/core';

import { SendHelper } from './ helpers';
import { Order } from '../core/models/order.model';
import { Product } from '../core/models/product.model';
import { OrderService } from '../core/services/order.service';
import { ProductService } from '../core/services/product.service';
import { CheckoutService } from '../core/services/checkout.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(
    private checkoutService: CheckoutService,
    private orderService: OrderService,
    private prodService: ProductService
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
    // TODO : Remove it
    this.prodService.getById(17).subscribe((x: Product) => {
      this.checkoutService.productList.push(x);
    });

    this.cartItems = this.checkoutService.cartGet();
    console.log(this.cartItems);
  }
}
