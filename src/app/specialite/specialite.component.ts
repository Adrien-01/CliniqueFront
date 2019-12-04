import { Component, OnInit } from '@angular/core';
import {Specialite} from '../model/specialite';
import {SpecialiteService} from '../Service/specialite/specialite.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  listSpecialite : Specialite []=[];

  constructor(private specialiteService :SpecialiteService) { }

  ngOnInit() {
    this.specialiteService.getAll().subscribe(data => {
      this.listSpecialite = data;
      console.log("-----------------------" + this.listSpecialite);
    })
  }
 
  deleteSpecialite(idService: number, index) {
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer?',
      text: "Après confirmation, la specialité sera définitivement supprimée",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Non surtout pas !",
      confirmButtonText: 'Oui, je veux supprimer!'
    }).then((result) => {
      if (result.value) {
        this.specialiteService.deleteSpecialite(idService).subscribe((res: Response) => {
          console.log(res)
          if (res)
            this.listSpecialite.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'Votre spécilité est spprimée, soyez maudit !',
              'success'
            )

          
         

        })

      }
    }
    );
  }
}