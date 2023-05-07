import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../interface/patient';
import Docs from '../interface/docs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

   public getAllPatients(): Observable<Docs[]>{
    console.log(`${this.apiUrl}/patient`)
    return this.http.get<Docs[]>(`${this.apiUrl}/patient`);
   }

   public getPaginationPatients(page: number, size: number): Observable<Patient>{
     return this.http.get<Patient>(`${this.apiUrl}/patient/paginate?page=${page}&size=${size}`) 
   }
}
