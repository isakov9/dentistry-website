import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  constructor(private router: Router,
    private auth: AuthGuard,
    private appComponent: AppComponent) { }

  logout() {
    this.appComponent.isAdmin = false;
    this.auth.isAdmin = false;
    this.router.navigate(['']);
  }
}
