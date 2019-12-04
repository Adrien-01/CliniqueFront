import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../Service/authentification/authentification.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authentificationService : AuthentificationService, private router : Router) { }

  ngOnInit() {
  }

  decon(){
    this.authentificationService.logout()
  }



}
