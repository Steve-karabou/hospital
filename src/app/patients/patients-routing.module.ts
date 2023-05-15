import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPatientsComponent } from './display-patients/display-patients.component';
import { CreatePatientsComponent } from './create-patients/create-patients.component';
import { EditPatientsComponent } from './edit-patients/edit-patients.component';
import { GetPatientResolver } from './resolvers/get-patient.resolver';


const routes: Routes = [
  {path:'', component: DisplayPatientsComponent},
  {path:'newPatient', component: CreatePatientsComponent},
  {path: 'editPatient/:id', component: EditPatientsComponent, resolve:{patient: GetPatientResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
