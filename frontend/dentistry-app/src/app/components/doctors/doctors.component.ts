import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  constructor(private doctorService: DoctorService,
    private imageService: ImageService) { }

  doctors: Doctor[] = [];
  imageUrls: String[] = [];

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data
      for (var doctor of data) {
        this.viewImage(doctor.id)
      }
      console.log(this.imageUrls)
    })
  }

  viewImage(id: number) {
    this.imageService.viewImage(id).subscribe(
      data => {
        this.imageUrls[id] = URL.createObjectURL(data);
      }
    );
  }
}
