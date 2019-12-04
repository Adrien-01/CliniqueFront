import { Component, OnInit } from '@angular/core';
import {Specialite} from '../model/specialite';
import {SpecialiteService} from '../Service/specialite/specialite.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-specialite',
  templateUrl: './add-specialite.component.html',
  styleUrls: ['./add-specialite.component.css']
})
export class AddSpecialiteComponent implements OnInit {
  nouvelleSpecialite : Specialite = new Specialite;

  constructor(private router: Router, private specialiteService : SpecialiteService) { }

  ngOnInit() {
  }

  ajoutSpecialite(){
    this.specialiteService.addSpecialite(this.nouvelleSpecialite).subscribe();
  }
  notif(){
    this.ajoutSpecialite()
    Swal.fire({
      title: 'Félicitation!',
      text: "La spécialité a bien été ajoutée",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Retourner sur la liste des spécialités'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/specialite']);
      }
    })
  
  }
  
  }