import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor() {}

  productList = new Array<Product>();

  cartAdd(product: Product) {
    this.productList.push(product);
  }

  cartRemove(product: Product) {
  }

  cartGet() {
    console.log(this.productList);
  }
}
