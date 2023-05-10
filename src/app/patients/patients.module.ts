import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PatientsRoutingModule } from './patients-routing.module';
import { DisplayPatientsComponent } from './display-patients/display-patients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePatientsComponent } from './create-patients/create-patients.component';
import { FormPatientComponent } from './form-patient/form-patient.component';
import { EditPatientsComponent } from './edit-patients/edit-patients.component';


@NgModule({
  declarations: [
    DisplayPatientsComponent,
    CreatePatientsComponent,
    FormPatientComponent,
    EditPatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PatientsModule { }
