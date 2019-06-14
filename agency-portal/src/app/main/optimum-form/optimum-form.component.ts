import { Component, OnInit, Input } from '@angular/core';
import { OptimumComponentsModule } from 'optimum-components';
import { UserProfileModel } from '../optimum-form/user-profile-model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-optimum-form',
  templateUrl: './optimum-form.component.html',
  styleUrls: ['./optimum-form.component.css']
})
export class OptimumFormComponent implements OnInit {

  userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default');
  userProfileModel2 = new UserProfileModel('default2', 'default2', 'default2', 'default2', 'default2', 'default2');

  textInputLabel="[From Parent] text input";
  textAreaInputLabel="[From Parent] text area";
  phoneInputLabel="[From Parent] phone";
  radioInputLabel="[From Parent] radio";
  dropdownInputLabel="[From Parent] dropdown";

  radioChoices=['from parent: yes', 'from parent: no', 'from parent: unsure',]
  dropdownChoices = ['from parent: male', 'from parent:female', 'from parent: pride'];

  profileForm = this.fb.group({
    textInput: ['', Validators.compose([Validators.required])],
    textAreaInput: ['', Validators.compose([Validators.required])],
    phone: ['', Validators.compose([Validators.required])],
    select: ['', Validators.compose([Validators.required])],
    radio: ['', Validators.compose([Validators.required])],
    dropdown: ['', Validators.compose([Validators.required])],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
