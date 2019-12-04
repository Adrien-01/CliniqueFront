import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import Swal from 'sweetalert2';
import {ConnexionComponent} from'../../connexion/connexion.component'
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  user: User = new User()
  helper = new JwtHelperService();
  user1 : String;

  constructor(private http: HttpClient, private router : Router) { }

  login(login, motDePasse){
    this.loginWebService(login, motDePasse).subscribe(res =>{
      if (res!=null){
        localStorage.setItem('currentUser', res['token']);
        if(localStorage.getItem('currentUser')!=null){
          this.user1 = this.helper.decodeToken(localStorage.getItem('currentUser'))['sub'];
          Swal.fire({
            title: 'Connexion réussie',
            text:  this.user1 +'vous êtes connecté',
            icon: "success",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Accéder à votre compte '
          }).then((result) => {
            if (result.value) {
              this.router.navigate(['']);
            }
          })
        }
      }else{
        Swal.fire({
          title: 'Echec',
          text: "Votre login ou mot de passe n'existe pas ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Retourner sur la page de '
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/connexion']);
          }
        })
      }
    })

  }

  logout (){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/connexion']);
  }


  loginWebService(login, motDePasse) {
    this.user.login = login
    this.user.motDePasse = motDePasse
    return this.http.post("http://localhost:8080/user/login",this.user).pipe()
  }



}
