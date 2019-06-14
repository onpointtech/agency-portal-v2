import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastContainerDirective } from 'ngx-toastr';
import { ToasterService } from '../../portal-services/toaster.service';

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
