import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor() {
  }

  productList = new Array<Product>();

  cartAdd(product: Product) {
    this.productList.push(product);
  }

  cartRemoveByIndex(product: Product) {
    // TODO: review it again, it's work
    for (let i = this.productList.length - 1; i >= 0; i--) {
      if (this.productList[i].id == product.id) {
        this.productList.splice(i, 1);
      }
    }
  }

  cartRemoveAll() {
    let index = 0;
    this.productList.forEach(() => this.productList.splice(index++));
  }

  cartGet() {
    return this.productList;
  }
}
