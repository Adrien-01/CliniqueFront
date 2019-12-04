import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../Service/patient/patient.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  listPatients: Patient[] = [];
  searchText;
  

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getAll().subscribe(data => {
      this.listPatients = data;
      console.log("-----------------------" + this.listPatients);
    })
  }

  deletePatient(idPatient: number, index) {
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer?',
      text: "Après confirmation, le patient sera définitivement supprimé",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Non surtout pas !",
      confirmButtonText: 'Oui, je veux supprimer!'
    }).then((result) => {
      if (result.value) {
        this.patientService.deletePatient(idPatient).subscribe((res: Response) => {
          console.log(res)
          if (res){
            this.listPatients.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'Votre patient est spprimé, soyez maudit !',
              'success'
            )
          }else{
            console.log(res)
            Swal.fire({
              icon: 'warning',
              text: "Impossible d'effacer le patient",
  
            })
          }
        })
        

      }
    }
    );
  }
}