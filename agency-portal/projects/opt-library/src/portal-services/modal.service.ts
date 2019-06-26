import { Injectable, Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(public modalService: NgbModal) {
  }

  open(classToRender: any, content: any) {
    const modalReference = this.modalService.open(classToRender);
    if (modalReference.componentInstance) {
      modalReference.componentInstance.input = content;
    }
  }

  close() {
    this.modalService.dismissAll();
  }
}
