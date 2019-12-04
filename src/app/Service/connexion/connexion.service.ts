import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) { }

  conUser(user : User) {
    return this.http.post("http://localhost:8080/user/login", user).pipe()
  }

  
}
