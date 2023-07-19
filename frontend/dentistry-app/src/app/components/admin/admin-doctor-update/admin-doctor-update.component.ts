import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-admin-doctor-update',
  templateUrl: './admin-doctor-update.component.html',
  styleUrls: ['./admin-doctor-update.component.css']
})
export class AdminDoctorUpdateComponent {
  constructor(private doctorService: DoctorService,
    private imageService: ImageService,
    private router: Router,
    private route: ActivatedRoute) { }

  doctor = <Doctor>{};
  uploadedImage!: File;
  postResponse: any;
  successResponse: string | undefined;
  id: number = 0;
  imageUrl = "";
  file!: File;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.doctorService.getDoctorById(this.id).subscribe(data => {
      this.doctor = data;
    })

    this.imageService.viewImage(this.id).subscribe(data => {
      this.imageUrl = URL.createObjectURL(data);
      this.file = this.blobToFile(data, "qw")
      console.log(data)
      console.log(this.file)
    })


  }

  updateDoctor() {
    this.doctorService.updateDoctor(this.doctor, this.id).subscribe(data => {
      this.goToListDoctor();
    })
  }

  deleteDoctor() {
    this.doctorService.deleteDoctor(this.id).subscribe(data => {
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
  public blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = fileName;

    return theBlob as File;
  }
}
