import { Component, OnInit } from '@angular/core';
import { Operation } from '../model/operation';
import { Medecin } from '../model/medecin';
import { Patient } from '../model/patient';
import { Salle } from '../model/salle';
import { OperationService } from '../Service/operation/operation.service';
import { MedecinService } from '../Service/medecin/medecin.service';
import { PatientService } from '../Service/patient/patient.service';
import { SalleService } from '../Service/salle/salle.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-operation',
  templateUrl: './modif-operation.component.html',
  styleUrls: ['./modif-operation.component.css']
})
export class ModifOperationComponent implements OnInit {

  operation1 = new Operation;
  idAdresse : number;
  listMedecin: Medecin[] = [];
  listPatient: Patient[] = [];
  listSalle: Salle[] = [];
  medecin: number;
  patient: number;
  salle: number;

  constructor(private route: ActivatedRoute, private router: Router, private operationService: OperationService, private medecinService: MedecinService, private patientService: PatientService, private salleService: SalleService) { }


  ngOnInit() {
    
    this.idAdresse= parseInt(this.route.snapshot.paramMap.get('idOperation'))
    this.operationService.getOne(this.idAdresse).subscribe(data=>{
      this.operation1 = data;
  }

  );
    this.medecinService.getAll().subscribe(data => {
      this.listMedecin = data;
    });
    this.patientService.getAll().subscribe(data => {
      this.listPatient = data;
    });
    this.salleService.getAll().subscribe(data => {
      this.listSalle = data;
    });
    
    
  }

  modifierOperation() {
    this.operationService.updateOperation(this.operation1 , this.idAdresse).subscribe(res => {
      if (res['idOpeartion'] !== null) {
        this.operationService.affecterOperationMedecinPatientSalle(res['idOpeartion'], this.medecin, this.patient, this.salle).subscribe()
      }
    })
  }

  notif() {
    this.modifierOperation()
    Swal.fire({
      title: 'Félicitation!',
      text: "L'operation a bien été modifiée",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Retourner sur la liste des operations'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/operation']);

      }
    })

  }


}
