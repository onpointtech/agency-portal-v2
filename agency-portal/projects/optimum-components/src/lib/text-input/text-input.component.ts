import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'optimum-text-input',
  templateUrl: './text-input.component.html',
  styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
})
export class TextInputComponent implements OnInit {


  @Input() labelName: string;
  @Input() userProfileModel: any;
  @Input() profileForm: FormGroup;
  @Input() formInput: string;
  @Output() userProfileModelChange = new EventEmitter<any>();
  emitCity() {
    this.userProfileModelChange.emit(this.userProfileModel);
      }

  constructor(private renderer : Renderer2) { }

  

  ngOnInit() {
  }
  debug = true;
  submitted = false;

  onSubmit() { this.submitted = true; }

}
