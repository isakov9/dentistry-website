import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminService } from 'src/app/services/admin.service';
import { AppComponent } from 'src/app/app.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = "";


  constructor(private auth: AuthGuard,
    private router: Router,
    private adminService: AdminService,
    private appComponent: AppComponent
  ) { }

  onClick() {
    this.adminService.login(this.password).subscribe(data => {
      if (data) {
        this.appComponent.isAdmin = true;
        this.auth.isAdmin = true;
        this.goToAdmin();
      }
      else alert("incorrect password")
    })

  }

  goToAdmin() {
    this.router.navigate(['admin-panel'])
  }
}
