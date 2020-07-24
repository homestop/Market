import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';

import { Product } from '../core/models/product.model';
import { ImageService } from '../core/services/image.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private imageService: ImageService) {
  }

  products;

  imageIsNull(image) {
    return !isNull(image);
  }

  onBuyClick(product: Product) {
    // TODO: create context window, which will be ask for continue or checkout
  }

  ngOnInit() {
    this.productService.get().subscribe((x: Array<Product>) => {
      this.productService.products = x;
      this.productService.products.forEach((i: Product) => {
        if (this.imageIsNull(i.images)) {
          this.imageService.getImage(i.images.header).subscribe();
        }
      });

      this.products = this.productService.products;
      console.log(this.productService.products);
    });
  }
}
