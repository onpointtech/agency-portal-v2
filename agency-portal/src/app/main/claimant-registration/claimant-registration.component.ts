import { Component, OnInit } from '@angular/core';
import { ClaimantSO } from '../../service-objects/claimant-so'
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClaimantService } from '../../portal-services/claimant.service';
import { Address } from '../../service-objects/address';

@Component({
  selector: 'app-claimant-registration',
  templateUrl: './claimant-registration.component.html',
  styleUrls: ['./claimant-registration.component.css']
})
export class ClaimantRegistrationComponent implements OnInit {
  userProfileModel = new ClaimantSO();
  addressInitial = new Address();

  genderChoices = ['Male', 'Female', 'I prefer not to answer',];
  raceChoices = [
  'White',
  'Black or African American', 
  'American Indian or Alaska Native', 
  'Native Hawaiian or other Pacific Islander', 
  'Asian', 
  'I prefer not to answer'
];
  languagePreferenceChoices = ['English', 'Spanish'];
  ethnicityChoices = ['Hispanic or Latino', 'Not Hispanic or Latino', 'I prefer not to answer'];
  educationLevelChoices = [
  'Completed 1st Grade', 
  'Completed 2nd Grade', 
  'Completed 3rd Grade', 
  'Completed 4th Grade', 
  'Completed 5th Grade', 
  'Completed 6th Grade', 
  'Completed 7th Grade', 
  'Completed 8th Grade', 
  'Completed 9th Grade', 
  'Completed 10th Grade', 
  'Completed 11th Grade', 
  'High School Degree', 
  'GED or High School Equivalency Diploma',
  'Some Vocational or Technical School (No Certificate)',
  'Some College (No Degree)',
  'Associate\'s Degree',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'Doctoral Degree',
  'Post-Doctorate Studies'
  ];



  profileForm = this.fb.group({
    claimantId: [0, Validators.required],
    ssn: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9),Validators.pattern("[0-9]{9}")])],
    confirmSsn: ['', Validators.compose([Validators.required])],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    middleInitial: ['', Validators.compose([Validators.required, Validators.maxLength(1),Validators.pattern("[a-zA-z]")])],
    dateOfBirth: [new Date(2019, 1, 1), Validators.required],
    homePhone: ['', Validators.required],
    mobilePhone: [''],
    preferredOccupation: ['', Validators.required],
    languagePreference: ['Please select at least one', Validators.required],
    gender: ['Please select at least one', Validators.required],
    educationLevel: ['Please select at least one', Validators.required],
    race: ['Please select at least one', Validators.required],
    ethnicity: ['Please select at least one', Validators.required],
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    zipExt: ['', Validators.required],

  });


  constructor(private fb: FormBuilder, private claimantService: ClaimantService) {

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
 };
  }




  debug = false;
  submitted = false;

  onSubmit() {
    this.claimantService
    .registerClaimant(this.userProfileModel);
    
  }

  thenFn(): any{
   console.log(true);
  } 

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
