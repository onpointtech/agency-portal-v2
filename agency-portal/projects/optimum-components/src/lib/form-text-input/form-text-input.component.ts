import { Component, EventEmitter, OnInit, Input, Output, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'optimum-form-text-input',
  templateUrl: './form-text-input.component.html',
  styles: []
})
export class FormTextInputComponent implements OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
      if(changes.model.currentValue == changes.model.previousValue) {
        console.log("No change is detected");
      }else{
        console.log("Change is detected");
      }
  }

  @Input() label: string;
  @Input() model: any;
  @Output() modelChange = new EventEmitter();
  modelChanged() {
    console.log("trigger child component");
    this.modelChange.emit(this.model);
  }

  form: any;
  
  constructor() { }

  ngOnInit() {
    this.form = new FormControl('');
  }

}
