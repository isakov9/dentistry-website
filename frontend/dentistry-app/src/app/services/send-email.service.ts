import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailMessage } from '../models/emailMessage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http: HttpClient) { }

  BASE_URL = "http://localhost:8080/api/send-email"

  sendEmail(emailMessage: EmailMessage): Observable<Object> {
    return this.http.post(this.BASE_URL, emailMessage)
  }

}
