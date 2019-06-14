import { Component, OnInit, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup} from '@angular/forms';


@Component({
  selector: 'optimum-radio-input',
  templateUrl: './radio-input.component.html',
  styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
})

export class RadioInputComponent implements OnInit {
  @Input() labelName: string;
  @Input() radioChoices: string[];
  @Input() userProfileModel: UserProfileModel;
  @Input() profileForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  debug = false;
  submitted = false;

  onSubmit() { this.submitted = true; }
}
