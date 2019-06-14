import { Component, OnInit, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup} from '@angular/forms';




@Component({
  selector: 'optimum-phone-input',
  templateUrl: './phone-input.component.html',
  styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
})
export class PhoneInputComponent implements OnInit {
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
