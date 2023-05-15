import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../interface/patient';
import Docs from '../interface/docs';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public savePatient(data: Docs){
    return this.http.post(`${this.apiUrl}/patient`, data);
  }

  public updatePatient(id: string, data: Docs){
    return this.http.put(`${this.apiUrl}/patient/${id}`, data);
  }

  public deletePatient(id: String){
    return this.http.delete(`${this.apiUrl}/patient/${id}`)
  }

  public getOnePatient(id: String): Observable<Docs>{
    return this.http.get<Docs>(`${this.apiUrl}/patient/${id}`);
  }

   public getAllPatients(): Observable<Docs[]>{
    return this.http.get<Docs[]>(`${this.apiUrl}/patient`);
   }

   public getPaginationPatients(page: number, size: number): Observable<Patient>{
     return this.http.get<Patient>(`${this.apiUrl}/patient/paginate?page=${page}&size=${size}`) 
   }

   public searchPatient(name: string, page: number, size: number): Observable<Patient>{
    return this.http.get<Patient>(`${this.apiUrl}/patient/search?name=${name}&page=${page}&size=${size}`)
   }

   public getErrorMessage(fieldName: string, error: ValidationErrors){
     
    if(error['required']){

      return fieldName +" est requis";
    }else if(error['pattern']){

     return fieldName +" doit être sous";
    } else if(error['email']){

      return fieldName +" doit être un" +error['email']['email'];
     }  else return ""
   }
}
