import { Injectable, Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public modalService: NgbModal) {
  }

  open(content: any) {
    this.modalService.open(content);
  }

  close() {
    this.modalService.dismissAll();
  }
}
