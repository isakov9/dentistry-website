import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-imagetest',
  templateUrl: './imagetest.component.html',
  styleUrls: ['./imagetest.component.css']
})
export class ImagetestComponent {
  constructor(private httpClient: HttpClient) { }

  uploadedImage!: File;
  dbImage: any;
  postResponse: any;
  successResponse: string | undefined;
  image: any;
  imageUrl = "";

  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }


  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);


    this.httpClient.post('http://localhost:8080/api/image', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
  }

  viewImage() {
    this.httpClient.get('http://localhost:8080/api/image//' + this.image, { responseType: 'blob' })
      .subscribe(
        res => {
          this.imageUrl = URL.createObjectURL(res);
        }
      );

  }
}
