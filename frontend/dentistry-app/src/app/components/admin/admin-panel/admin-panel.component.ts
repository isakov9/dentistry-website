import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  constructor(private appComponent: AppComponent) {

  }
  ngOnInit(): void {
    let token = sessionStorage.getItem('token')
    if (token) {
      this.appComponent.isAdmin = true;
    }
  }

}
