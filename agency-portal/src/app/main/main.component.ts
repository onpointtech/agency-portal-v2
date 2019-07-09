import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastContainerDirective } from 'ngx-toastr';
import { Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { ModalService } from 'projects/opt-library/src/portal-services/modal.service';
import { KeycloakService } from 'keycloak-angular';
import { AlertService } from 'projects/opt-library/src/portal-services/alert.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  subscriptionStart: Subscription
  subscriptionEnd: Subscription
  previousUrl: any
  accessPermission = false;

  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private toasterService: ToasterService,
    private modalService: ModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private keycloakService: KeycloakService,
    private alert: AlertService
  ) {
    router.events.forEach(event => {
      if(event instanceof NavigationEnd) {
        modalService.close();

        // const requiredRoles = activatedRoute.snapshot.routeConfig.children[0].data.roles1;
        // const requiredRoles = activatedRoute.snapshot.data.roles1;
        // const userRoles = keycloakService.getKeycloakInstance().realmAccess['roles'];
        // console.log(requiredRoles);
        // for(var i = 0; i < userRoles.length; i++){
        //   if(requiredRoles.some(x => x === userRoles[i])) {
        //     this.accessPermission = true;
        //     break;
        //   }
        // }

        // if(!this.accessPermission){
        //   this.router.navigate(['/claimant-overview/56']);
        //   this.alert.error("Error","You are not allowed to visit this page");
        // }
      }
    });
  }

  async ngOnInit() {
    this.toasterService.overlayContainer = this.toastContainer;
  }
}

