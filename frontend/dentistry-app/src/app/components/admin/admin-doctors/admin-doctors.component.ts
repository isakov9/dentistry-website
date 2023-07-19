import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.component.html',
  styleUrls: ['./admin-doctors.component.css']
})
export class AdminDoctorsComponent implements OnInit {

  constructor(private doctorService: DoctorService,
    private imageService: ImageService,
    private router: Router) { }

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


  toUpdateDoctor(id: number) {
    this.router.navigate(['admin-doctor-update', id])
  }
}
