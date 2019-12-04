import { Component, OnInit } from '@angular/core';
import {Operation} from '../model/operation';
import {OperationService} from '../Service/operation/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  listOperation : Operation[]=[];

  constructor(private operationService : OperationService) { }

  ngOnInit() {
    this.operationService.getAll().subscribe(data => {
      this.listOperation = data;
      console.log("-----------------------" + this.listOperation);
    })
  }
  deleteOperation(idOperation: number, index) {
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer?',
      text: "Après confirmation, l'operation sera définitivement supprimée",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Non surtout pas !",
      confirmButtonText: 'Oui, je veux supprimer!'
    }).then((result) => {
      if (result.value) {
        this.operationService.deleteOperation(idOperation).subscribe((res: Response) => {
          console.log(res)
          if (res)
            this.listOperation.splice(index, 1)
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