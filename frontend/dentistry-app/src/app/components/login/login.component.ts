import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminService } from 'src/app/services/admin.service';
import { AppComponent } from 'src/app/app.component';
import { Admin } from 'src/app/models/admin';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin = <Admin>{};
  sessionId: any = "";


  constructor(private auth: AuthGuard,
    private router: Router,
    private adminService: AdminService,
    private appComponent: AppComponent
  ) { }
  ngOnInit(): void {
    let token = sessionStorage.getItem('token')
    if (token) {
      this.appComponent.isAdmin = true;
      this.goToAdmin()
    }
  }

  onClick() {
    this.adminService.login(this.admin).subscribe(data => {
      if (data) {
        this.sessionId = data.sessionId;
        this.appComponent.isAdmin = true;
        sessionStorage.setItem(
          'token', this.sessionId
        );
        this.goToAdmin()
      }
      else alert("Auth failed")
    })

  }

  goToAdmin() {
    this.router.navigate(['admin-panel'])
  }
}
