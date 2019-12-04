import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Medecin} from '../../model/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Medecin[]>("http://localhost:8080/medecin").pipe()
  }
  addMedecin(medecin : Medecin) {
    return this.http.post("http://localhost:8080/medecin", medecin).pipe()
  }
  deleteMedecin(idMedecin: number){
    return this.http.delete("http://localhost:8080/medecin/"+ idMedecin).pipe()
  }
  getOne(idMedecin: number) {
    return this.http.get<Medecin>("http://localhost:8080/medecin/"+ idMedecin).pipe()
  }
  updateMedecin(medecin : Medecin, idMedecin : number) {
    return this.http.put("http://localhost:8080/medecin/"+idMedecin, medecin).pipe()
  }
  affecterService(idMedecin : number, idService : number ){
    return this.http.put("http://localhost:8080/medecin/"+idMedecin+"/" +idService,"").pipe()
  }
}
