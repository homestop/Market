import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { ImageService } from './image.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private image: ImageService,
    ) {
  }

  products = new Array<Product>();

  get(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${environment.api}api/product/?format=json`);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.api}api/product/${id}/?format=json`);
  }

  getByUrl(url: string): Observable<Product> {
    return this.http.get<Product>(`${environment.api}` + url);
  }

  getProductWithImageAndSubscribe(product: Product) {
    const p = this.getById(product.id).subscribe((x: Product) => {
      const i = this.image.getImage(product.images.header).subscribe();
    });
    return p;
  }
}
