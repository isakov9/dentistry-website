import { Injectable } from '@angular/core';
import { Visit } from '../models/visit';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {


  constructor(private http: HttpClient) { }

  BASE_URL = "http://localhost:8080/api/visit"

  addVisit(visit: Visit): Observable<Object> {
    console.log(visit)
    return this.http.post(this.BASE_URL, visit)
  }

  freeHours(date: Date, id: number): Observable<number[]> {
    return this.http.get<number[]>(this.BASE_URL, {
      params: new HttpParams()
        .set(`id`, id)
        .set(`date`, date.toString())
    })
  }


}
