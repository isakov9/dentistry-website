import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
@Component({
  selector: 'app-admin-doctor-add',
  templateUrl: './admin-doctor-add.component.html',
  styleUrls: ['./admin-doctor-add.component.css']
})
export class AdminDoctorAddComponent {
  constructor(private doctorService: DoctorService,
    private router: Router) { }

  doctor = <Doctor>{};

  addDoctor() {
    this.doctorService.addDoctor(this.doctor).subscribe(data => {
      this.goToListDoctor();
    })

  }

  goToListDoctor() {
    this.router.navigate(['admin-doctors']);
  }
}
