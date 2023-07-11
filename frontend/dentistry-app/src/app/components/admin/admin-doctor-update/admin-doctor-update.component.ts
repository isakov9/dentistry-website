import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-doctor-update',
  templateUrl: './admin-doctor-update.component.html',
  styleUrls: ['./admin-doctor-update.component.css']
})
export class AdminDoctorUpdateComponent {
  constructor(private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute) { }

  doctor = <Doctor>{};
  id: number = 0;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.doctorService.getDoctorById(this.id).subscribe(data => {
      this.doctor = data;
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
}
