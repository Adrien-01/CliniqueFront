import { Component, OnInit } from '@angular/core';
import { Etat } from '../model/etats';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient/patient.service';
import { EtatService } from '../service/etat/etat.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  nouveauPatient = new Patient ();
  listEtat : Etat []=[];
  etat :number;

  constructor(private patientService : PatientService, private etatService : EtatService, private router: Router) { }

  ngOnInit() {
    this.etatService.getAll().subscribe(data => {
      this.listEtat = data;
    });
  }

  ajoutPatient() {
    this.patientService.addPatient(this.nouveauPatient).subscribe(res =>{

    if(res['idPatient']!==null){
      console.log(this.etat)
      this.patientService.affecterEtat(res['idPatient'], this.etat).subscribe()
      
      }
    });
  }





  notif() {
    this.ajoutPatient()
    Swal.fire({
      title: 'Félicitation!',
      text: "Le patient a bien été ajouté",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Retourner sur la liste des patients'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/patients']);

      }
    })

  }








}
