import { Component } from '@angular/core';
import { Visit } from 'src/app/models/visit';
import { EmailMessage } from 'src/app/models/emailMessage';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitService } from 'src/app/services/visit.service';
import { SendEmailService } from 'src/app/services/send-email.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-visit-date',
  templateUrl: './visit-date.component.html',
  styleUrls: ['./visit-date.component.css']
})
export class VisitDateComponent {
  visit = <Visit>{};
  emailMessage = <EmailMessage>{};
  date = new Date;
  hours: number[] = [];
  private querySubscription: Subscription;

  doctor_id = 0;
  patient_id = 0;

  choosenTime = 0;



  constructor(private router: Router,
    private visitService: VisitService,
    private sendEmailService: SendEmailService,
    private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.doctor_id = queryParam['doctor_id'];
        this.patient_id = queryParam['patient_id'];
      }
    );
  }


  addVisit() {
    this.visit.time = this.choosenTime;
    this.visit.doctor_id = this.doctor_id;
    this.visit.patient_id = this.patient_id;

    this.visitService.addVisit(this.visit).subscribe(data => {
      alert("Вы успешно записаны на прием")
      this.router.navigate(['']);
    })

  }

  sendMessage() {
    this.emailMessage.doctorId = this.doctor_id;
    this.emailMessage.subject = this.visit.dateOfVisit + " " + this.visit.time + "часов";
    this.emailMessage.patientId = this.patient_id;
    this.sendEmailService.sendEmail(this.emailMessage).subscribe(data => {
      console.log(this.emailMessage);
    })
  }

  freeHours() {
    this.visitService.freeHours(this.date, this.doctor_id).subscribe(data => {
      console.log(data);
      this.hours = [10, 11, 12];
      for (var n of data) {
        if (this.hours.includes(n)) {
          this.hours.splice(this.hours.indexOf(n), 1)
        }
      }
    });

  }
}
