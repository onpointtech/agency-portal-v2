import { Injectable, Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { HomeComponent } from '../main/home/home.component';
import { HomeSampleComponent } from '../home-sample/home-sample.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(HomeSampleComponent);
  }
}
