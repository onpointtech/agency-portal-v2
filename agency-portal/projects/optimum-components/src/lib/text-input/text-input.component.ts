import { Component, OnInit, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'optimum-text-input',
  templateUrl: './text-input.component.html',
  styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
})
export class TextInputComponent implements OnInit {

  @Input() labelName: string;
  @Input() userProfileModel: UserProfileModel;
  @Input() profileForm: FormGroup;
  //userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
  // profileForm = this.fb.group({
  //   textInput: ['', Validators.compose([Validators.required])],
  //   //textAreaInput: ['', Validators.compose([Validators.required])],
  //   //phone: ['', Validators.compose([Validators.required])],
  //   //select: ['', Validators.compose([Validators.required])],
  //   //radio: ['', Validators.compose([Validators.required])],
  //   //dropdown: ['', Validators.compose([Validators.required])],
  // });

  constructor(private fb: FormBuilder) { }

  

  ngOnInit() {
  }
  debug = true;
  submitted = false;

  onSubmit() { this.submitted = true; }

}
