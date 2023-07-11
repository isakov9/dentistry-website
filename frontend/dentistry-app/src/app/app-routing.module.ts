import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/components/main/main.component';
import { PricesComponent } from './components/prices/prices.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AboutComponent } from './components/about/about.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AdminDoctorsComponent } from './components/admin/admin-doctors/admin-doctors.component';
import { AdminDoctorAddComponent } from './components/admin/admin-doctor-add/admin-doctor-add.component';
import { AdminDoctorUpdateComponent } from './components/admin/admin-doctor-update/admin-doctor-update.component';
import { AdminPricesAddComponent } from './components/admin/admin-prices-add/admin-prices-add.component';
import { AdminPricesUpdateComponent } from './components/admin/admin-prices-update/admin-prices-update.component';
import { AdminPricesComponent } from './components/admin/admin-prices/admin-prices.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { VisitDateComponent } from './components/visit-date/visit-date.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'visitdate', component: VisitDateComponent },

  {
    path: 'admin',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-doctors',
    component: AdminDoctorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-doctor-add',
    component: AdminDoctorAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-doctor-update/:id',
    component: AdminDoctorUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-prices',
    component: AdminPricesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-price-add',
    component: AdminPricesAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-price-update/:id',
    component: AdminPricesUpdateComponent,
    canActivate: [AuthGuard]
  },




  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
