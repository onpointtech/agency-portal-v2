import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastContainerDirective } from 'ngx-toastr';
import { Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { ModalService } from 'projects/opt-library/src/portal-services/modal.service';
import { KeycloakService } from 'keycloak-angular';
import { AlertService } from 'projects/opt-library/src/portal-services/alert.service';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  subscriptionStart: Subscription
  subscriptionEnd: Subscription
  previousUrl: any
  accessPermission = false;

  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private toasterService: ToasterService,
    private modalService: ModalService,
    private router: Router,
    private keycloakService: KeycloakService,
    private idle: Idle,
    private keepalive: Keepalive
  ) {
    router.events.forEach(event => {
      if(event instanceof NavigationEnd) {
        modalService.close();
      }
    });

    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5000);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(1000);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    
    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.doLogout();
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');
    
    // sets the ping interval to 15 seconds
    keepalive.interval(15);
    
    keepalive.onPing.subscribe(() => this.lastPing = new Date());
    
    this.reset();
  }

  async ngOnInit() {
    this.toasterService.overlayContainer = this.toastContainer;
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
}

