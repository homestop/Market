import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  get(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${environment.api}api/product/?format=json`);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.api}api/product/${id}/?format=json`);
  }
}
