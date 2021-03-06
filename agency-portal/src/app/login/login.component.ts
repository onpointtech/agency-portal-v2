import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private keycloakService: KeycloakService, private router: Router) { }

  async ngOnInit() {
    console.log(this.keycloakService);
    if(await this.keycloakService.isLoggedIn()){
      this.router.navigate([`/main`]);
    }
  }

}
