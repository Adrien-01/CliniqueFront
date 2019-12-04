import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from "./patient/patient.component";
import {EtatComponent} from "./etat/etat.component";
import {AddPatientComponent} from "./add-patient/add-patient.component";
import {AddEtatComponent} from "./add-etat/add-etat.component";
import {ModifEtatComponent} from "./modif-etat/modif-etat.component";
import {SpecialiteComponent} from "./specialite/specialite.component";
import {AddSpecialiteComponent} from './add-specialite/add-specialite.component';
import {ModifSpecialiteComponent} from './modif-specialite/modif-specialite.component';
import {SalleComponent} from './salle/salle.component';
import {AddSalleComponent} from './add-salle/add-salle.component';
import {MedecinComponent} from './medecin/medecin.component';
import {OperationComponent} from './operation/operation.component';
import {AddMedecinComponent} from './add-medecin/add-medecin.component';
import {AddOperationComponent} from './add-operation/add-operation.component';
import {ModifSalleComponent} from './modif-salle/modif-salle.component';
import {ModifPatientComponent} from './modif-patient/modif-patient.component';
import {ModifMedecinComponent} from './modif-medecin/modif-medecin.component';
import {ModifOperationComponent} from './modif-operation/modif-operation.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {AuthGuardService} from'./Service/auth/auth-guard.service';
import {BienvenueComponent} from './bienvenue/bienvenue.component';
import {AdresseComponent} from './adresse/adresse.component';





const routes: Routes = [

  {
    path: "patients",
    component: PatientComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "etats",
    component: EtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addPatients",
    component: AddPatientComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addEtat",
    component : AddEtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifEtat/:idEtat",
    component : ModifEtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "specialite",
    component : SpecialiteComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addSpecialite",
    component : AddSpecialiteComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifSpecialite/:idService",
    component : ModifSpecialiteComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "salle",
    component : SalleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addSalle",
    component : AddSalleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "medecin",
    component : MedecinComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "operation",
    component : OperationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addMedecin",
    component : AddMedecinComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addOperation",
    component : AddOperationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifSalle/:idSalle",
    component : ModifSalleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifPatient/:idPatient",
    component : ModifPatientComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifMedecin/:idMedecin",
    component : ModifMedecinComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifOperation/:idOperation",
    component : ModifOperationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "connexion",
    component : ConnexionComponent,
   
    
  },
  {
    path: "inscription",
    component : InscriptionComponent,
  
  },
  {
    path: "",
    component : BienvenueComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "adresse",
    component : AdresseComponent,
    canActivate: [AuthGuardService]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
