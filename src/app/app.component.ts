import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstSpring';
  islogin : boolean;

  constructor(private router : Router){
    router.events.forEach(event => {
      if(event instanceof NavigationStart ){
        console.log(event['url'])
        if (event['url'] == '/connexion' || event['url'] == '/register'){
          this.islogin = true;
        } else {
          this.islogin = false;
        }
      }
    })
  }
}
