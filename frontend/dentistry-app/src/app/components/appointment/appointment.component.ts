import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  patient = <Patient>{};
  doctors: Doctor[] = [];

  patient_id = 0;
  constructor(private router: Router,
    private patientService: PatientService,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors()
  }


  addPatient() {
    this.patientService.addPatient(this.patient).subscribe(data => {
      this.patient_id = data;
      this.goToVistDate();
      console.log(this.patient_id);
      console.log(this.patient.doctor_id);


    })

  }

  goToVistDate() {

    this.router.navigate(['visitdate'], { queryParams: { doctor_id: this.patient.doctor_id, patient_id: this.patient_id } });
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data
    })
  }
}
