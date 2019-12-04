import { Component, OnInit } from '@angular/core';
import {Patient}from '../model/patient';
import {PatientService}from '../Service/patient/patient.service';
import { Etat } from '../model/etats';
import { EtatService } from '../service/etat/etat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-patient',
  templateUrl: './modif-patient.component.html',
  styleUrls: ['./modif-patient.component.css']
})
export class ModifPatientComponent implements OnInit {

  patient1 : Patient = new Patient();
  idAdresse: number;
  listEtat : Etat[]=[];
  etat : number;
  
  constructor(private route: ActivatedRoute, private patientService : PatientService, private etatService : EtatService) { }

  ngOnInit() {
    
    this.idAdresse= parseInt(this.route.snapshot.paramMap.get('idPatient'))

    this.etatService.getAll().subscribe(data => {
      this.listEtat = data;
     
    });
    
    this.patientService.getOne(this.idAdresse).subscribe(data=>{
      this.patient1 = data;
  }
  );
}
modifier(){
  this.patientService.updatePatient(this.patient1, this.idAdresse).subscribe(res =>{
    if(res['idPatient']!==null){
      console.log(this.etat)
      this.patientService.affecterEtat(res['idPatient'], this.etat).subscribe()
      
      }
    });
  }
}
