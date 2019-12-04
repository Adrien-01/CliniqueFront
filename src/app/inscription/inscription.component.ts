import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { InscriptionService } from '../service/inscription/inscription.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  nouveauUser = new User();
  user1: User;

  constructor(private inscriptionService: InscriptionService, private router: Router) { }

  ngOnInit() {


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
            this.router.navigate(['/insciption']);
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