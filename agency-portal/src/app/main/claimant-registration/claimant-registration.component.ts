import { Component, OnInit } from '@angular/core';
import { ClaimantSO } from '../../service-objects/claimant-so'
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClaimantService } from '../../portal-services/claimant.service';
import { Address } from '../../service-objects/address';
import { STATECHOICES, GENDERCHOICES, RACECHOICES, ETHNICITYCHOICES, EDUCATIONLEVELCHOICES, LANGUAGEPREFERENCECHOICES } from '../../choices/choices'
import { ToasterService } from 'src/app/portal-services/toaster.service';

@Component({
  selector: 'app-claimant-registration',
  templateUrl: './claimant-registration.component.html',
  styleUrls: ['./claimant-registration.component.css']
})
export class ClaimantRegistrationComponent implements OnInit {
  userProfileModel = new ClaimantSO();
  addressInitial = new Address();
  stateChoices = STATECHOICES;
  genderChoices = GENDERCHOICES;
  raceChoices = RACECHOICES;
  ethnicityChoices = ETHNICITYCHOICES;
  educationLevelChoices = EDUCATIONLEVELCHOICES;
  languagePreferenceChoices = LANGUAGEPREFERENCECHOICES;



  profileForm = this.fb.group({
    claimantId: [0, Validators.required],
    ssn: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("[0-9]{9}")])],
    confirmSsn: ['', Validators.compose([Validators.required])],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    middleInitial: ['', Validators.compose([Validators.required, Validators.maxLength(1), Validators.pattern("[a-zA-z]")])],
    dateOfBirth: [new Date(2019, 1, 1), Validators.required],
    homePhone: ['', Validators.required],
    mobilePhone: [''],
    preferredOccupation: ['', Validators.required],
    languagePreference: ['', Validators.required],
    gender: ['', Validators.required],
    educationLevel: ['', Validators.required],
    race: ['', Validators.required],
    ethnicity: ['', Validators.required],
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    zipExt: ['', Validators.required],
  });


  constructor(private fb: FormBuilder, private claimantService: ClaimantService, private toasterService: ToasterService) {

  }

  ngOnInit() {
    this.addressInitial = {
      id: null,
      addressLine1: '',
      addressLine2: '',
      state: '',
      city: '',
      zipCode: '',
      zipExt: '',
      lastInsertUpdateTS: null,
      lastInsertUpdateBy: '',
    },

      this.userProfileModel = {
        claimantId: null,
        ssn: '',
        dateOfBirth: null,
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
        lastInsertUpdateTS: null,
        lastInsertUpdateBy: '',
        ivrPin: '',
        documentDeliveryPreference: '',
        address: [this.addressInitial],
        email: '',
        preferredOccupation: '',
        alternateClaimantId: '',
      };
  }




  debug = false;
  submitted = false;

  verifyBeforeSubmit() {
    if (this.profileForm.valid) {
      console.log("Submitted form");
      this.toasterService.success("Success", "Form was submitted");
      this.onSubmit();
    }
    else {
      this.profileForm.markAllAsTouched();
      console.log(this.profileForm.value);
      //remove mark all as touched
      //make the profileform have a submit boolean

      console.log("Error in submitting form");
      this.toasterService.danger("Error", "Some forms are not yet filled");

    }
  }

  onSubmit() {
    this.claimantService
      .registerClaimant(this.userProfileModel);
  }

  fill() {
    console.log(this.vowel())

    this.addressInitial = {
      id: null,
      addressLine1: 'Old town',
      addressLine2: 'road',
      state: this.stateChoices[10],
      city: 'Owl',
      zipCode: Math.random().toString(10).substr(2,7),
      zipExt: Math.random().toString(10).substr(2,7),
      lastInsertUpdateTS: null,
      lastInsertUpdateBy: '',
    },

      this.userProfileModel = {
        claimantId: null,
        ssn: Math.random().toString(10).substr(2,10),
        dateOfBirth: null,
        firstName: 'J'+ this.vowel()+'y'+this.vowel()+'m',
        middleInitial: this.vowel().toUpperCase(),
        lastName: this.vowel().toUpperCase()+'b'+this.vowel()+'rd'+this.vowel()+'l'+this.vowel()+'z'+this.vowel(),
        homePhone: Math.random().toString(10).substr(2,11),
        mobilePhone: Math.random().toString(10).substr(2,11),
        languagePreference: this.languagePreferenceChoices[1],
        educationLevel: this.educationLevelChoices[5],
        gender: this.genderChoices[0],
        race: this.raceChoices[2],
        ethnicity: this.ethnicityChoices[1],
        lastInsertUpdateTS: null,
        lastInsertUpdateBy: '',
        ivrPin: '',
        documentDeliveryPreference: '',
        address: [this.addressInitial],
        email: '',
        preferredOccupation: 'Student',
        alternateClaimantId: '',
      };
    this.claimantService
     .registerClaimant(this.userProfileModel);
  }

  vowel(): string {
    return Math.random().toString(5).replace('0.', '').substr(0,1).replace('1','a').replace('0','e').replace('2','i').replace('3','o').replace('4','u')
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
