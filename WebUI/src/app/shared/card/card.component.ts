import { isNull } from 'util';
import { Component, OnInit, Input } from '@angular/core';

import { Image } from 'src/app/core/models/image.model';
import { Product } from 'src/app/core/models/product.model';
import { ImageService } from 'src/app/core/services/image.service';
import { ProductService } from 'src/app/core/services/product.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private productService: ProductService,
    ) { }

  imageIsNull(image: Image) {
    return !isNull(image);
  }

  ngOnInit() {
    this.productService
      .getProductWithImageAndSubscribe(this.product);
  }
}
