
//import angular modules
import { Component, OnInit, ViewChild } from '@angular/core';

//import external modules
import { ToastContainerDirective } from 'ngx-toastr';

//import user made modules
//import components

//import services
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { KeycloakService } from 'keycloak-angular';
import { UserRoleCheckingService } from '../user-role-checking.service';
import { Router } from '@angular/router';

//import models or constants

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private toasterService: ToasterService, protected keycloakService: KeycloakService) { }


  ngOnInit() {
    this.toasterService.overlayContainer = this.toastContainer;
    let userDetails = this.keycloakService.getKeycloakInstance();
    console.log(userDetails);
    console.log(userDetails.realmAccess["roles"]);
    console.log(userDetails.profile["email"]);
  }

  success(){
    this.toasterService.success("Success!", "Welcome to Home");
 
  }
}

