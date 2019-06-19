import { Component, OnInit, Input,Output, EventEmitter, OnChanges } from '@angular/core';
import { OptimumComponentsModule } from 'optimum-components';
import { UserProfileModel } from './user-profile-model';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { Address } from '../../service-objects/address';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-optimum-form',
  templateUrl: './optimum-form.component.html',
  styleUrls: ['./optimum-form.component.css']
})
export class OptimumFormComponent implements OnInit {

  name = "sheldon";

  userProfileModel = new ClaimantSO();
  addressInitial = new Address();

  firstNameType = "firstName";
  firstNameLabel="[From Parent] First Name";
  lastNameLabel="[From Parent] First Name";
  middleInitialLabel="[From Parent] Middle Initial";

  textAreaInputLabel="[From Parent] text area";
  phoneInputLabel="[From Parent] phone";
  radioInputLabel="[From Parent] radio";
  dropdownInputLabel="[From Parent] dropdown";

  radioChoices=['from parent: yes', 'from parent: no', 'from parent: unsure',]
  dropdownChoices = ['from parent: male', 'from parent:female', 'from parent: pride'];

  profileForm = this.fb.group({
    firstName: ['', Validators.compose([Validators.required])],
    textInput: ['', Validators.compose([Validators.required])],
    textAreaInput: ['', Validators.compose([Validators.required])],
    phone: ['', Validators.compose([Validators.required])],
    select: ['', Validators.compose([Validators.required])],
    radio: ['', Validators.compose([Validators.required])],
    dropdown: ['', Validators.compose([Validators.required])],
  });

  onChange(value: string) { // without type info
    this.userProfileModel.firstName = value;
    console.log("parent component triggered");
  }

  update(firstName: string, lastName:string, middleInitial: string) { // without type info
    this.userProfileModel.firstName = firstName;
    this.userProfileModel.lastName = lastName;
    this.userProfileModel.middleInitial = middleInitial;

  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.addressInitial = {
      id: null,
      addressLine1: '',
      addressLine2: '',
      state: '',
      city: '',
      zipCode: '',
      zipExt: '',
      lastInsertUpdateTS: new Date(2013, 9, 22),
      lastInsertUpdateBy: '',
    },

    this.userProfileModel = { 
      claimantId: 0, 
      ssn: '', 
      dateOfBirth: new Date('2013-09-22'), 
      firstName: '', 
      middleInitial: '', 
      lastName: '',
      homePhone: '',
      mobilePhone: '',
      languagePreference: '',
      educationLevel: '', 
      gender: '',
      race: '', 
      ethnicity: '',
      lastInsertUpdateTS: new Date(2013, 9, 22), 
      lastInsertUpdateBy: '', 
      ivrPin: '', 
      documentDeliveryPreference: '', 
      address: [this.addressInitial],
      email: '',
      preferredOccupation: '',
      alternateClaimantId: '',

  }



}

submitted = false;
onSubmit() { this.submitted = true; }
}