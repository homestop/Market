import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { isNull } from 'util';
import { ImageService } from '../services/image.service';

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

  // TODO: Move it to service
  products = new Array<Product>();

  imageIsNull(image) {
    return !isNull(image);
  }

  getImage(url: string) {
    this.imageService.getImage(url).subscribe();
  }

  onBuyClick(product: Product) {
    // TODO: create context window, which will be ask for continue or checkout
  }

  ngOnInit() {
    this.productService.get().subscribe((x: Array<Product>) => {
      this.products = x;
      this.products.forEach((i: Product) => {
        if (this.imageIsNull(i.images)) {
          this.imageService.getImage(i.images.header).subscribe();
        }
      });
      console.log(this.products);
    });
  }
}
