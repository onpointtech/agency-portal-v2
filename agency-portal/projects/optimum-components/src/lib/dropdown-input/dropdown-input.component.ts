import { Component, OnInit, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'optimum-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
})
export class DropdownInputComponent implements OnInit {
  @Input() labelName: string;
  @Input() dropdownChoices: string[];
  @Input() userProfileModel: UserProfileModel;
  @Input() profileForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  debug = false;
  submitted = false;

  onSubmit() { this.submitted = true; }
}
