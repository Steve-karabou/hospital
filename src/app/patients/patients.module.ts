import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PatientsRoutingModule } from './patients-routing.module';
import { DisplayPatientsComponent } from './display-patients/display-patients.component';


@NgModule({
  declarations: [
    DisplayPatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    HttpClientModule
  ]
})
export class PatientsModule { }
