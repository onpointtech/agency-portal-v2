import { Component } from '@angular/core';
import { NgbActiveModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-sample',
  templateUrl: './home-sample.component.html',
})
export class HomeSampleComponent {

  constructor(public activeModal: NgbActiveModal) { }
}
