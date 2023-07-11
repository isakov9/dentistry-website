import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.component.html',
  styleUrls: ['./admin-doctors.component.css']
})
export class AdminDoctorsComponent implements OnInit {

  constructor(private doctorService: DoctorService,
    private router: Router) { }

  doctors: Doctor[] = [];


  ngOnInit(): void {
    this.getDoctors()
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data
    })

  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id).subscribe(data => {

    })
  }

  toUpdateDoctor(id: number) {
    this.router.navigate(['admin-doctor-update', id])
  }
}
