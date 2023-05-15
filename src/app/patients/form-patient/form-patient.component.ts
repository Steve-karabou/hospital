import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import Docs from '../interface/docs';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.css']
})
export class FormPatientComponent implements OnInit {

  patientFormGroup!: FormGroup;
  @Output() patientFormSubmit : EventEmitter<Docs> = new EventEmitter();
  @Input() patient!: Docs;
  
  constructor(private fb: FormBuilder, public patientServ: PatientService){}

  ngOnInit():void {
   this.patientFormGroup = this.fb.group({
        lastName: [null, Validators.required],
        firstName: [null, Validators.required],
        sex: [null, Validators.required],
        age: [null, [Validators.required, Validators.pattern(/[0-9]+/)]],
        email: [null, [Validators.required, Validators.email]],
        mobile: [null, [Validators.required]]
   });
  }

 public  onSubmit(){
   const data = {
      ...this.patientFormGroup.value
    }
   this.patientFormSubmit.emit(data);
  }

}
