import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { DisplayPatientsComponent } from './display-patients/display-patients.component';


@NgModule({
  declarations: [
    DisplayPatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
