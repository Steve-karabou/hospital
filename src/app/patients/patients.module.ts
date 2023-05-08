import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PatientsRoutingModule } from './patients-routing.module';
import { DisplayPatientsComponent } from './display-patients/display-patients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePatientsComponent } from './create-patients/create-patients.component';


@NgModule({
  declarations: [
    DisplayPatientsComponent,
    CreatePatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PatientsModule { }
