import { Component, OnInit } from '@angular/core';
import { Patient } from '../interface/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-display-patients',
  templateUrl: './display-patients.component.html',
  styleUrls: ['./display-patients.component.css']
})

export class DisplayPatientsComponent implements OnInit{

  patients!: Patient;
  currentPage: number = 1;
  pageSize: number = 7;
  totalPages!: Number 

  constructor(private patientServ: PatientService){ }

  ngOnInit(): void{
    this.patientServ.getPaginationPatients(this.currentPage, this.pageSize).subscribe({
      next: (patient: Patient)=>{
        console.log(patient,"patient")
        this.patients = patient;
        this.currentPage = patient.page;
        this.totalPages = patient.pages;
      }
    })
    
  }
 
  gotoPage(i: number){
   console.log(i, "i")
  }

}
