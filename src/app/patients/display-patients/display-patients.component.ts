import { Component, OnInit } from '@angular/core';
import { Patient } from '../interface/patient';
import { PatientService } from '../services/patient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Docs from '../interface/docs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-patients',
  templateUrl: './display-patients.component.html',
  styleUrls: ['./display-patients.component.css']
})

export class DisplayPatientsComponent implements OnInit{

  patients!: Docs[];
  currentPage: number = 1;
  pageSize: number = 7;
  totalPages!: Number;
  currentAction: string = "all";

  searchFormGroup!: FormGroup;

  constructor(private patientServ: PatientService, private fb: FormBuilder, private router: Router){  }

  ngOnInit(): void{
    this.searchFormGroup = this.fb.group({
      name: ["", Validators.required]
    });

    this.getPagePatients();
    
  }

  public getPagePatients(): void{
    this.patientServ.getPaginationPatients(this.currentPage, this.pageSize).subscribe({
      next: (patient: Patient)=>{
        this.patients = patient.docs;
        this.currentPage = patient.page;
        this.totalPages = patient.pages;
      }
    })
  }

  public handleSearchProducts(): void{
      console.log("kara")
      this.currentPage = 1;
      this.currentAction = "search";
      this.searchProducts();
  }

  public searchProducts(){
    let name = this.searchFormGroup.value.name;
     this.patientServ.searchPatient(name, this.currentPage, this.pageSize).subscribe({
      next: (patient: Patient) => {
       this.patients = patient.docs;
       this.currentPage = patient.page;
       this.totalPages = patient.pages;
       console.log(patient,"patient")
      }
     })
  }
 
  public gotoPage(i: number): void{
   this.currentPage = i;
   if(this.currentAction === "all"){
     this.getPagePatients();
   } else{
    this.searchProducts();
   }
  }

  public newPatient(): void{
   this.router.navigateByUrl("/newPatient");
  }

  public editPatient(id: String): void{
   this.router.navigateByUrl("/editPatient/"+id);
  }

  public deletePatient(id: String): void{
    console.log(id,"id")
    let conf = confirm("Voulez-vous supprimer le patient");
    if(conf){
      this.patientServ.deletePatient(id).subscribe({
        next: ()=>{
          this.getPagePatients();
          alert("Patient supprimer");
        },
        error: ()=>{
          alert("Echec de la suppression")
        }
      })
    }
  }

}
