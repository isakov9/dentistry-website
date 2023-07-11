import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  constructor(private doctorService: DoctorService) { }

  doctors: Doctor[] = [];

  ngOnInit(): void {
    this.getDoctors()
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data
    })
  }


}
