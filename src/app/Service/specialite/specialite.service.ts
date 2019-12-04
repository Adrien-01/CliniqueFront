import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import {Specialite} from '../../model/specialite'

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Specialite[]>("http://localhost:8080/service").pipe()
  }
  addSpecialite(specialite : Specialite) {
    return this.http.post("http://localhost:8080/service", specialite).pipe()
  }
  deleteSpecialite(idService : number){
    return this.http.delete("http://localhost:8080/service/"+ idService).pipe()
  }
  getOne(idService : number) {
    return this.http.get<Specialite>("http://localhost:8080/service/"+ idService).pipe()
  }
  updateEtat(specialite : Specialite, idService : number) {
    return this.http.put("http://localhost:8080/service/"+ idService, specialite).pipe()
  }
}