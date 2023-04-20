import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPatientsComponent } from './patients/display-patients/display-patients.component';

const routes: Routes = [{path:'', component: DisplayPatientsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
