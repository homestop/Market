import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {
  }


  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  get() {
    return this.http.get(`${environment.api}order/`);
  }

  post(order: Order): Observable<any>{
    return this.http.post(`${environment.api}order/`, JSON.stringify(order), {headers: this.headers});
  }
}
