import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { ImageService } from 'src/app/services/image.service';
@Component({
  selector: 'app-admin-doctor-add',
  templateUrl: './admin-doctor-add.component.html',
  styleUrls: ['./admin-doctor-add.component.css']
})
export class AdminDoctorAddComponent {
  constructor(private doctorService: DoctorService,
    private imageService: ImageService,
    private router: Router) { }

  doctor = <Doctor>{};
  uploadedImage!: File;
  postResponse: any;
  successResponse: string | undefined;
  imageUrl = "";



  addDoctor() {
    this.doctorService.addDoctor(this.doctor).subscribe(data => {
      this.imageUploadAction(data.id);
      this.goToListDoctor();
    })

  }

  goToListDoctor() {
    this.router.navigate(['admin-doctors']);
  }
  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }
  imageUploadAction(id: number) {
    console.log(id)
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
    this.imageService.imageUploadAction(imageFormData, id).subscribe((response) => {
      if (response.status === 200) {
        this.postResponse = response;
        this.successResponse = this.postResponse.body.message;
      } else {
        this.successResponse = 'Image not uploaded due to some error!';
      }
    }
    );
  }
}
