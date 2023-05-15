import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Docs from '../interface/docs';

@Component({
  selector: 'app-edit-patients',
  templateUrl: './edit-patients.component.html',
  styleUrls: ['./edit-patients.component.css']
})
export class EditPatientsComponent implements OnInit{

  routeSubscription!: Subscription;
  patientId!: String;
  patient!: Docs;

  constructor(private patientServ: PatientService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.patient = this.route.snapshot.data["patient"];
  }

  public onSubmit(data: Docs){
    this.patientServ.savePatient(data).subscribe({
      next:()=>{
       this.router.navigateByUrl("/");
      }
    })
  }

}
