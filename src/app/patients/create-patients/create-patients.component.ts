import { Component } from '@angular/core';
import Docs from '../interface/docs';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.css']
})
export class CreatePatientsComponent {

  constructor(private productServ: PatientService, private router: Router){}

  ngOnInit(){}

  public onSubmit(data: Docs){
    this.productServ.savePatient(data).subscribe({
      next:()=>{
       this.router.navigateByUrl("/");
      }
    })
  }

}
