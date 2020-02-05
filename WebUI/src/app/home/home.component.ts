import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.get().subscribe((x: Product) => {
      console.log(x);
    });
  }
}
