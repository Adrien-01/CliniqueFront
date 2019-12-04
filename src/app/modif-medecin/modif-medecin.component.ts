import { Component, OnInit } from '@angular/core';
import {Medecin}from '../model/medecin';
import {MedecinService}from '../Service/medecin/medecin.service';
import { Specialite } from '../model/specialite';
import { SpecialiteService } from '../service/specialite/specialite.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modif-medecin',
  templateUrl: './modif-medecin.component.html',
  styleUrls: ['./modif-medecin.component.css']
})
export class ModifMedecinComponent implements OnInit {

  medecin1 = new Medecin;
  idAdresse: number;
  listSpecialite : Specialite []=[];
  specialite : number;


  constructor(private router: Router, private route: ActivatedRoute, private medecinService : MedecinService, private specialiteService : SpecialiteService) { }

  ngOnInit() {
    this.idAdresse= parseInt(this.route.snapshot.paramMap.get('idMedecin'))

    this.specialiteService.getAll().subscribe(data => {
      this.listSpecialite = data;
     
    });
    
    this.medecinService.getOne(this.idAdresse).subscribe(data=>{
      this.medecin1 = data;
  }
  );
  }
  modifierMedecin(){
    this.medecinService.updateMedecin(this.medecin1, this.idAdresse).subscribe(res =>{

      if(res['idMedecin']!==null){
        console.log(this.specialite)
        this.medecinService.affecterService(res['idMedecin'], this.specialite).subscribe()
        }
      });
    }
    notif() {
      this.modifierMedecin()
      Swal.fire({
        title: 'Félicitation!',
        text: "Le medecin a bien été modifié",
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