import { Component, OnInit } from '@angular/core';
import {Etat} from '../model/etats';
import {EtatService} from '../Service/etat/etat.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.css']
})
export class AddEtatComponent implements OnInit {

  nouveauEtat : Etat = new Etat;


  constructor(private etatService : EtatService, private router: Router) { }

  ngOnInit() {
  }

  ajoutEtat(){
    this.etatService.addEtat(this.nouveauEtat).subscribe();
  }

  notif(){
    this.ajoutEtat()
    Swal.fire({
      title: 'Félicitation!',
      text: "L'etat a bien été ajoutée",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Retourner sur la liste des etats'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/etats']);
      }
    })
  
  }
  
  }