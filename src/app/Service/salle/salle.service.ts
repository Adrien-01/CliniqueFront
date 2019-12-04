import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Salle} from '../../model/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Salle[]>("http://localhost:8080/salle").pipe()
  }
  addSalle(salle : Salle) {
    return this.http.post("http://localhost:8080/salle", salle).pipe()
  }
  deleteSalle(idSalle: number){
    return this.http.delete("http://localhost:8080/salle/"+ idSalle).pipe()
  }
  getOne(idSalle : number) {
    return this.http.get<Salle>("http://localhost:8080/salle/"+ idSalle).pipe()
  }
  updateSalle(salle : Salle, idSalle:number) {
    return this.http.put("http://localhost:8080/salle/"+idSalle, salle).pipe()
  }
}