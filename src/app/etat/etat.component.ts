import { Component, OnInit } from '@angular/core';
import {Etat} from '../model/etats';
import {EtatService} from '../Service/etat/etat.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {

  listEtats : Etat[] =[];

  constructor(private etatService : EtatService) { }

  ngOnInit() {
    this.etatService.getAll().subscribe(data => {
      this.listEtats = data;
      console.log("-----------------------" + this.listEtats);
    })
  }

  deleteEtat(idEtat: number, index) {
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer?',
      text: "Après confirmation, l'état sera définitivement supprimé",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Non surtout pas !",
      confirmButtonText: 'Oui, je veux supprimer!'
    }).then((result) => {
      if (result.value) {
        this.etatService.deleteEtat(idEtat).subscribe((res: Response) => {
          console.log(res)
          if (res)
            this.listEtats.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'Votre patient est spprimé, soyez maudit !',
              'success'
            )

          
         

        })

      }
    }
    );
  }
}