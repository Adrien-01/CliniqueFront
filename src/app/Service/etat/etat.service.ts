import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Etat} from '../../model/etats'

@Injectable({
  providedIn: 'root'
})
export class EtatService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Etat[]>("http://localhost:8080/etat").pipe()
  }
  addEtat(etat : Etat) {
    return this.http.post("http://localhost:8080/etat", etat).pipe()
  }
  deleteEtat(idEtat : number){
    return this.http.delete("http://localhost:8080/etat/"+ idEtat).pipe()
  }
  getOne(idEtat : number) {
    return this.http.get<Etat>("http://localhost:8080/etat/"+ idEtat).pipe()
  }
  updateEtat(etat : Etat, idEtat : number) {
    return this.http.put("http://localhost:8080/etat/"+idEtat, etat).pipe()
  }
}
