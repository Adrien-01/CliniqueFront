import { Component, OnInit } from '@angular/core';
import {Medecin} from '../model/medecin';
import {MedecinService} from '../Service/medecin/medecin.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  listMedecin : Medecin []=[];
  searchText;

  constructor(private medecinService : MedecinService) { }

  ngOnInit() {
    this.medecinService.getAll().subscribe(data => {
      this.listMedecin = data;
      console.log("-----------------------" + this.listMedecin);
    })
  }

  deleteMedecin(idMedecin: number, index) {
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer?',
      text: "Après confirmation, le medecin sera définitivement supprimée",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Non surtout pas !",
      confirmButtonText: 'Oui, je veux supprimer!'
    }).then((result) => {
      if (result.value) {
        this.medecinService.deleteMedecin(idMedecin).subscribe((res: Response) => {
          console.log(res)
          if (res)
            this.listMedecin.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'Votre salle est spprimée, soyez maudit !',
              'success'
            )

          
         

        })

      }
    }
    );
  }
}