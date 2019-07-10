
//import angular modules
import { Component, OnInit, ViewChild, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//import external modules
import { ToastContainerDirective } from 'ngx-toastr';

//import user made modules
//import components
import { JsqueryTestComponent } from './../../jsquery-test/jsquery-test.component'

//import services
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { KeycloakService } from 'keycloak-angular';
// import { KeycloakService } from '../../keycloak.service';

import { UserRoleCheckingService } from '../user-role-checking.service';
import { Router } from '@angular/router';
import { AgencyServiceService } from 'src/app/agency-service.service';

//import models or constants

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []

})

export class HomeComponent implements OnInit {

  userid: any;
  @ViewChild(ToastContainerDirective, { static: false }) toastContainer: ToastContainerDirective;

  constructor(private toasterService: ToasterService, protected keycloakService: KeycloakService, private agencyService: AgencyServiceService) { }



  ngOnInit() {
    this.toasterService.overlayContainer = this.toastContainer;
    let userDetails = this.keycloakService.getKeycloakInstance();
    // console.log(userDetails);
    // console.log(userDetails.realmAccess["roles"]);
    // console.log(userDetails.profile["email"]);
  }

  success() {
    this.toasterService.success("Success!", "Welcome to Home");
  }

  getToken() {
    this.keycloakService.getToken().then(
      data => {
        console.log("we are inside the get token function");
        console.log("this is the tokenParsed", this.keycloakService.getKeycloakInstance().tokenParsed);
        console.log("this is the idTokenParsed", this.keycloakService.getKeycloakInstance().idTokenParsed);
        console.log("this might be the token ", this.keycloakService.getKeycloakInstance().tokenParsed.sub);
      }
    );
  }

  getAgencyButton() {
    this.keycloakService.getToken().then(
      data => {
        console.log("getting the token");
        this.userid = this.keycloakService.getKeycloakInstance().tokenParsed.sub;
        console.log("inside the getToken()");
        this.agencyService.getAgencyStaff(this.userid).subscribe(
          dataNew => {
            console.log("inside the getAgencyService", dataNew);
          }

        )
      }

    );
  }

}

