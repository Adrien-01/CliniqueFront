import { Component, OnInit } from '@angular/core';
import {Specialite} from '../model/specialite';
import {SpecialiteService} from '../Service/specialite/specialite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-specialite',
  templateUrl: './modif-specialite.component.html',
  styleUrls: ['./modif-specialite.component.css']
})
export class ModifSpecialiteComponent implements OnInit {

  specialite1 = new Specialite;
  idAdresse: number;

  constructor(private route: ActivatedRoute, private specialiteService : SpecialiteService) { }

  ngOnInit() {
    this.idAdresse= parseInt(this.route.snapshot.paramMap.get('idService'))
    this.specialiteService.getOne(this.idAdresse).subscribe(data=>{
      this.specialite1 = data;
    }
      );
  }
  modifier(){
    this.specialiteService.updateEtat(this.specialite1, this.idAdresse).subscribe();

}
}
