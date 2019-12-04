import { Component, OnInit } from '@angular/core';
import {Etat} from '../model/etats';
import {EtatService} from '../Service/etat/etat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-etat',
  templateUrl: './modif-etat.component.html',
  styleUrls: ['./modif-etat.component.css']
})
export class ModifEtatComponent implements OnInit {

  etat1 = new Etat;
  idAdresse: number;


  constructor(private etatService : EtatService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idAdresse= parseInt(this.route.snapshot.paramMap.get('idEtat'))
    this.etatService.getOne(this.idAdresse).subscribe(data=>{
      this.etat1 = data;
    }
      );
  }
  modifier(){
    this.etatService.updateEtat(this.etat1, this.idAdresse).subscribe();

}
}
