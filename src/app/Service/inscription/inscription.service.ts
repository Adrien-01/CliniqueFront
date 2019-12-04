import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }

  addUser(user : User) {
    return this.http.post("http://localhost:8080/user/register", user).pipe()
  }
 
  
 
  
}
