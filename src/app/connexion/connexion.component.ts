import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {ConnexionService} from '../Service/connexion/connexion.service';
import {AuthentificationService} from '../Service/authentification/authentification.service'
import {AuthGuardService} from '../Service/auth/auth-guard.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {InscriptionService} from '../Service/inscription/inscription.service'


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user1: User = new User();
  nouveauUser = new User ();

  constructor(private router: Router, private connexionService : ConnexionService, private authentificationService : AuthentificationService, private auth : AuthGuardService, private inscriptionService : InscriptionService) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')){
      this.router.navigate(['']);
  
    }
  
  }

 /* login(){
    
    this.authentificationService.login(this.user1.login, this.user1.motDePasse)
    
  }*/

 conUser(){
      this.authentificationService.login(this.user1.login, this.user1.motDePasse)
      //this.notif()
  }

  addUser() {
    this.inscriptionService.addUser(this.nouveauUser).subscribe((res: Response) => {
      
      if (res['idUser']==0 ) {
        Swal.fire({
          title: 'Dommage !',
          text: "Le login existe déja ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/connexion']);
          }
        })
      } else {
        Swal.fire({
          title: 'Félicitation!',
          text: "Votre compte est crée ",
          icon: "success",
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
    });
  }

}