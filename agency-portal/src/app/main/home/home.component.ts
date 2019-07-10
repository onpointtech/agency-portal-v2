
//import angular modules
import { Component, OnInit, ViewChild, APP_INITIALIZER,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//import external modules
import { ToastContainerDirective } from 'ngx-toastr';

//import services
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { KeycloakService } from 'keycloak-angular';
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
    console.log(userDetails.tokenParsed["exp"]);
    // console.log(userDetails.realmAccess["roles"]);
    // console.log(userDetails.profile["email"]);
  }

  success(){
    this.toasterService.success("Success!", "Welcome to Home");
  }
}

