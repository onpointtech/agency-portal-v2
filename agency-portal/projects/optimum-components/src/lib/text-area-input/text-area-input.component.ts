import { Component, OnInit, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'optimum-text-area-input',
  templateUrl: './text-area-input.component.html',
  styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
})
export class TextAreaInputComponent implements OnInit {
  @Input() labelName: string;
  @Input() userProfileModel: UserProfileModel;
  @Input() profileForm: FormGroup;


  constructor() { }

  ngOnInit() {
  }

  debug = false;
  submitted = false;

  onSubmit() { this.submitted = true; }
}
