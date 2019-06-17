import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'optimum-optimum-submit',
  templateUrl: './optimum-submit.component.html',
  styles: []
})
export class OptimumSubmitComponent implements OnInit {
  @Input() profileForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  debug = true;
  submitted = false;

  onSubmit() { this.submitted = true; }
}