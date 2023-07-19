import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  BASE_URL = "http://localhost:8080/api/image";

  imageUploadAction(imageFormData: FormData, id: any) {
    return this.http.post(this.BASE_URL, imageFormData, {
      observe: 'response', responseType: 'text',
      params: new HttpParams()
        .set(`id`, id)
    });
  }
  viewImage(id: number) {
    return this.http.get(this.BASE_URL + '/' + id, { responseType: 'blob' })
  }
}
