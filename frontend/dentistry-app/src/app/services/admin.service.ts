import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/price';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }
  BASE_URL = "http://localhost:8080"


  login(password: string) {
    return this.http.post(this.BASE_URL + "/login", password)
  }

}
