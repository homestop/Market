import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CheckoutService } from '../services/checkout.service';
import { Product } from '../models/product.model';
import { CheckoutComponent } from '../checkout/checkout.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  products = new Array<Product>();

  onBuyClick(product: Product) {
    //TODO: create context window, which will be ask for continue or checkout
  }

  ngOnInit() {
    this.productService.get().subscribe((x: Array<Product>) => {
      this.products = x;
      console.log(this.products);
    });
  }
}
