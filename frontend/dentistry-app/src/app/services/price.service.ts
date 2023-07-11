import { Injectable } from '@angular/core';
import { Price } from '../models/price';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }
  BASE_URL = "http://localhost:8080/api/"


  getPrices(): Observable<Price[]> {
    return this.http.get<Price[]>(this.BASE_URL + "price")
  }
  getPriceById(id: number): Observable<Price> {
    return this.http.get<Price>(this.BASE_URL + `price/${id}`)
  }
  addPrice(price: Price): Observable<Object> {
    return this.http.post(this.BASE_URL + "price", price)
  }

  updatePrice(price: Price, id: number): Observable<Object> {
    return this.http.put(this.BASE_URL + "price/" + id, price)
  }

  deletePrice(id: number): Observable<Object> {
    return this.http.delete(this.BASE_URL + "price/" + id)
  }
}
