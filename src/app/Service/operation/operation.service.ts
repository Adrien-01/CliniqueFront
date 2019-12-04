import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Operation} from '../../model/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Operation[]>("http://localhost:8080/operation").pipe()
  }
  addOperation(operation : Operation) {
    return this.http.post("http://localhost:8080/operation", operation).pipe()
  }
  deleteOperation(idOperation: number){
    return this.http.delete("http://localhost:8080/operation/"+ idOperation).pipe()
  }
  getOne(idOperation: number) {
    return this.http.get<Operation>("http://localhost:8080/operation/"+ idOperation).pipe()
  }
  updateOperation(operation : Operation, idOperation : number) {
    return this.http.put("http://localhost:8080/operation/"+idOperation, operation).pipe()
  }
  affecterOperationMedecinPatientSalle(idOpeartion : number, idMedecin : number, idPatient : number, idSalle : number ){
    return this.http.put("http://localhost:8080/operation/"+idOpeartion+"/" +idMedecin+"/"+idPatient+"/"+idSalle,"").pipe()
  }

}