import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastContainerDirective } from 'ngx-toastr';
import { ToasterService } from '../portal-services/toaster.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from '../portal-services/modal.service';

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

  ngOnInit() {
    this.toasterService.overlayContainer = this.toastContainer;
  }

  ngOnDestroy(): void {

  }
}
