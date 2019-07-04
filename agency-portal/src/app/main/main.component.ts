import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastContainerDirective } from 'ngx-toastr';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { ModalService } from 'projects/opt-library/src/portal-services/modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  subscriptionStart: Subscription
  subscriptionEnd: Subscription
  previousUrl: any
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private toasterService: ToasterService, private modalService: ModalService, private router: Router) {
    router.events.forEach(event => {
      if(event instanceof NavigationEnd) {
        modalService.close();
      }
    });
  }

  async ngOnInit() {
    this.toasterService.overlayContainer = this.toastContainer;
  }
}

