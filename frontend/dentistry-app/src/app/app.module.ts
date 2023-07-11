import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PricesComponent } from './components/prices/prices.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AboutComponent } from './components/about/about.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AdminPricesComponent } from './components/admin/admin-prices/admin-prices.component';
import { AdminDoctorsComponent } from './components/admin/admin-doctors/admin-doctors.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminDoctorAddComponent } from './components/admin/admin-doctor-add/admin-doctor-add.component';
import { AdminDoctorUpdateComponent } from './components/admin/admin-doctor-update/admin-doctor-update.component';
import { AdminPricesAddComponent } from './components/admin/admin-prices-add/admin-prices-add.component';
import { AdminPricesUpdateComponent } from './components/admin/admin-prices-update/admin-prices-update.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { VisitDateComponent } from './components/visit-date/visit-date.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PricesComponent,
    DoctorsComponent,
    AboutComponent,
    AdminPanelComponent,
    AdminPricesComponent,
    AdminDoctorsComponent,
    AdminHeaderComponent,
    LoginComponent,
    NotfoundComponent,
    AdminDoctorAddComponent,
    AdminDoctorUpdateComponent,
    AdminPricesAddComponent,
    AdminPricesUpdateComponent,
    AppointmentComponent,
    VisitDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
