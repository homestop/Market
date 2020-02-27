import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private checkoutService: CheckoutService) {
  }

  checkout(product: Product) {
    this.checkoutService.cartAdd(product);

    console.log(this.checkoutService.cartGet());
  }

  ngOnInit() {
  }

}
