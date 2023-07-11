import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  BASE_URL = "http://localhost:8080/api/patient"

  addPatient(patient: Patient): Observable<number> {
    return this.http.post<number>(this.BASE_URL, patient)
  }

}
