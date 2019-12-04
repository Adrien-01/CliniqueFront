import { Component, OnInit } from '@angular/core';
import {Salle} from '../model/salle';
import {SalleService} from '../Service/salle/salle.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  listSalle : Salle []=[];

  constructor(private salleService : SalleService) { }

  ngOnInit() {
    this.salleService.getAll().subscribe(data => {
      this.listSalle = data;
      console.log("-----------------------" + this.listSalle);
    })
  }
 
  deleteSalle(idSalle: number, index) {
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer?',
      text: "Après confirmation, la salle sera définitivement supprimée",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Non surtout pas !",
      confirmButtonText: 'Oui, je veux supprimer!'
    }).then((result) => {
      if (result.value) {
        this.salleService.deleteSalle(idSalle).subscribe((res: Response) => {
          console.log(res)
          if (res)
            this.listSalle.splice(index, 1)
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