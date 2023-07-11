import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  BASE_URL = "http://localhost:8080/api/doctor"

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.BASE_URL)
  }
  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(this.BASE_URL + `/${id}`)
  }
  addDoctor(doctor: Doctor): Observable<Object> {
    return this.http.post(this.BASE_URL, doctor)
  }

  updateDoctor(doctor: Doctor, id: number): Observable<Object> {
    return this.http.put(this.BASE_URL + "/" + id, doctor)
  }

  deleteDoctor(id: number): Observable<Object> {
    return this.http.delete(this.BASE_URL + "/" + id)
  }

}
