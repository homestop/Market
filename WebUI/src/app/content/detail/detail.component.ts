import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../core/models/product.model';
import { ImageService } from '../../core/services/image.service';
import { ProductService } from '../../core/services/product.service';
import { CheckoutService } from '../../core/services/checkout.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private productService: ProductService,
    private checkoutService: CheckoutService) {
  }

  id: number;
  product = new Product();

  addToCart() {
    console.log('add to cart func');
    this.checkoutService.cartAdd(this.product);
  }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x.id;
    });
    if (this.productService.products.length === 0) {
      this.productService.getById(this.id).subscribe((x: Product) => {
        // FIX: product ID in imageUrl, cannot reqest image
        this.imageService.getImage(x.images.header).subscribe();
        this.product = x;
        console.log(this.product);
      });
    } else {
      this.productService.products.forEach((x: Product) => {
        // tslint:disable-next-line: triple-equals
        if (x.id == this.id) {
          this.product = x;
          return true;
        }
        console.log(this.product);
        return false;
      });
    }
  }
}
