import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PatientService } from '../services/patient.service';
import Docs from '../interface/docs';

@Injectable({
  providedIn: 'root'
})
export class GetPatientResolver implements Resolve<Docs> {
  constructor(private patientServ: PatientService ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Docs> {
    return this.patientServ.getOnePatient(route.params["id"]);
  }
}
