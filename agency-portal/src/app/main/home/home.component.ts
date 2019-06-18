import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { ToastContainerDirective } from 'ngx-toastr';
import { ToasterService } from '../../portal-services/toaster.service';
import { ModalService } from '../../portal-services/modal.service';
import { NgbActiveModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;

  constructor(private toasterService: ToasterService, public modalService: ModalService) { }

  ngOnInit() {
    this.toasterService.overlayContainer = this.toastContainer;
  }

  success(){
    this.toasterService.success("Success!", "Welcome to Home");
  }

  open(){
    this.modalService.open();
  }

}
