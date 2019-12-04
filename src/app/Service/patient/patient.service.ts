
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Patient} from '../../model/patient';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Patient[]>("http://localhost:8080/patient").pipe()
  }
  deletePatient(idPatient : number){
    return this.http.delete("http://localhost:8080/patient/"+ idPatient).pipe()
  }
  addPatient(patient : Patient) {
    return this.http.post("http://localhost:8080/patient", patient).pipe()
  }
  getOne(idPatient : number) {
    return this.http.get<Patient>("http://localhost:8080/patient/"+ idPatient).pipe()
  }
  updatePatient(patient : Patient, idPatient : number) {
    return this.http.put("http://localhost:8080/patient/"+idPatient, patient).pipe()
  }
  affecterEtat(idPatient : number, idEtat : number ){
    return this.http.put("http://localhost:8080/patient/"+idPatient+"/" +idEtat,"").pipe()
  }
}
