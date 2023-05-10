import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-patients',
  templateUrl: './edit-patients.component.html',
  styleUrls: ['./edit-patients.component.css']
})
export class EditPatientsComponent implements OnInit{

  routeSubscription!: Subscription;
  patientId!: String;

  constructor(private patientServ: PatientService, private route: ActivatedRoute){
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.patientId = params['id'];
  });

  }
  ngOnInit(): void{
  }

}
