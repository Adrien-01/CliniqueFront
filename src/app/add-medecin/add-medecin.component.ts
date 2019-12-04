import { Component, OnInit } from '@angular/core';
import { Specialite } from '../model/specialite';
import { Medecin } from '../model/medecin';
import { MedecinService } from '../service/medecin/medecin.service';
import { SpecialiteService } from '../service/specialite/specialite.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  nouveauMedecin = new Medecin;
  listSpecialite : Specialite []=[];
  specialite : number;

  constructor(private medecinService : MedecinService, private specialiteService : SpecialiteService, private router: Router) { }

  ngOnInit() {
    this.specialiteService.getAll().subscribe(data => {
      this.listSpecialite = data;
    });
  }
  
  ajoutMedecin() {
    this.medecinService.addMedecin(this.nouveauMedecin).subscribe(res =>{

    if(res['idMedecin']!==null){
      console.log(this.specialite)
      this.medecinService.affecterService(res['idMedecin'], this.specialite).subscribe()
      }
    });
  }
  notif() {
    this.ajoutMedecin()
    Swal.fire({
      title: 'Félicitation!',
      text: "Le medecin a bien été ajouté",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Retourner sur la liste des medecins'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/medecin']);

      }
    })

  }


}
