import { Component, OnInit } from '@angular/core';
import {Salle} from '../model/salle';
import {SalleService} from '../Service/salle/salle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-salle',
  templateUrl: './modif-salle.component.html',
  styleUrls: ['./modif-salle.component.css']
})
export class ModifSalleComponent implements OnInit {

  salle1 = new Salle;
  idAdresse: number;

  constructor(private route: ActivatedRoute, private salleService : SalleService) { }

  ngOnInit() {
    this.idAdresse= parseInt(this.route.snapshot.paramMap.get('idSalle'))
    this.salleService.getOne(this.idAdresse).subscribe(data=>{
      this.salle1 = data;
    }
      );
  }
  modifier(){
    this.salleService.updateSalle(this.salle1, this.idAdresse).subscribe();

}

}
