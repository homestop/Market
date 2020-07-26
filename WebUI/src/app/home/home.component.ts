import { Component, OnInit } from '@angular/core';

import { Product } from '../core/models/product.model';
import { ProductService } from '../core/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private productService: ProductService,
    ) { }

  products;

  onBuyClick(product: Product) {
    // TODO: create context window, which will be ask for continue or checkout
  }

  ngOnInit() {
    // Ensure how many card should be draw and pass it to service
    this.productService.get().subscribe((x: Array<Product>) => {
      this.productService.products = x;
      this.products = this.productService.products;
    });
  }
}
