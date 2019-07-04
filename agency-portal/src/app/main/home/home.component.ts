
//import angular modules
import { Component, OnInit, ViewChild, APP_INITIALIZER } from '@angular/core';

//import external modules
import { ToastContainerDirective } from 'ngx-toastr';

//import user made modules
//import components

//import services
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { KeycloakService } from 'keycloak-angular';

//import models or constants

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private toasterService: ToasterService) { }


  ngOnInit() {
    this.toasterService.overlayContainer = this.toastContainer;
  }

  success(){
    this.toasterService.success("Success!", "Welcome to Home");
 
  }
}

