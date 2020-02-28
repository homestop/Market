import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private checkoutService: CheckoutService
  ) { }

  id: number;
  product = new Product();

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x['id'];
    });

    this.productService.getById(this.id).subscribe((x: Product) => {
      this.product = x;

      this.checkoutService.cartAdd(this.product);
    });
  }

}
