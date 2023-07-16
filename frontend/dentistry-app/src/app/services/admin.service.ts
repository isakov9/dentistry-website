import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }
  BASE_URL = "http://localhost:8080/api"


  login(admin: Admin) {
    return this.http.post<any>(this.BASE_URL + "/login", admin)
  }

}
