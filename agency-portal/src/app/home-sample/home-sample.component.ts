import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-sample',
  templateUrl: './home-sample.component.html',
  styleUrls: ['./home-sample.component.css']
})
export class HomeSampleComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
