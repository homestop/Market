import { Component, OnInit, Input } from '@angular/core';

import { SendHelper } from '../ helpers';
import { Order } from 'src/app/core/models/order.model';
import { Product } from 'src/app/core/models/product.model';
import { OrderService } from 'src/app/core/services/order.service';
import { CheckoutService } from 'src/app/core/services/checkout.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private checkoutService: CheckoutService
  ) { }

  @Input() productList: Array<Product>;

  onSendClick() {
    const order = new Order();

    SendHelper.processOrder(order, this.productList);
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
  }
}
