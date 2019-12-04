import { Component, OnInit } from '@angular/core';
import {Salle} from '../model/salle';
import {SalleService} from '../Service/salle/salle.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {

  nouvelleSalle : Salle = new Salle;

  constructor(private salleService : SalleService, private router: Router) { }

  ngOnInit() {
  }

  ajoutSalle(){
    this.salleService.addSalle(this.nouvelleSalle).subscribe();
  }

  notif(){
    this.ajoutSalle()
    Swal.fire({
      title: 'Félicitation!',
      text: "La salle a bien été ajoutée",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Retourner sur la liste des salles'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/salle']);
      }
    })
  
  }
  
  }