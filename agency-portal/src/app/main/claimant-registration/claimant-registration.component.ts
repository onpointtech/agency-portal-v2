import { Component, OnInit, Input } from '@angular/core';
import { OptimumComponentsModule } from 'optimum-components';
import { UserProfileModel } from '../optimum-form/user-profile-model';
import { ClaimantSO } from '../../service-objects/claimant-so'
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClaimantRegistrationModel } from '../claimant-registration/claimant-registration-model';
import { ClaimantService } from '../../portal-services/claimant.service';
import { Address } from '../../service-objects/address';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { ToasterService } from '../../portal-services/toaster.service';



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
  educationalLevelChoices = [
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
    ssn: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    middleInitial: ['', Validators.required],
    dateOfBirth: [new Date(2019, 1, 1), Validators.required],
    homePhone: ['', Validators.required],
    mobilePhone: ['', Validators.required],
    preferredOccupation: ['', Validators.required],
    languagePreference: ['Please select at least one', Validators.required],
    gender: ['Please select at least one', Validators.required],
    educationalLevel: ['Please select at least one', Validators.required],
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
      addressLine1: 'Line 1',
      addressLine2: 'Line 2',
      state: 'Less',
      city: 'Owl',
      zipCode: '8001',
      zipExt: '1008',
      lastInsertUpdateTS: new Date(2013, 9, 22),
      lastInsertUpdateBy: '',
    },

    this.userProfileModel = { 
      claimantId: 0, 
      ssn: '123456789', 
      dateOfBirth: new Date('2013-09-22'), 
      firstName: 'Jay', 
      middleInitial: 'E', 
      lastName: 'Ibardaloza', 
      homePhone: '9999999999', 
      mobilePhone: '99999999998', 
      languagePreference: 'English', 
      educationalLevel: 'Doctoral Degree', 
      gender: 'Male', 
      race: 'Asian', 
      ethnicity: 'I prefer not to answer', 
      lastInsertUpdateTS: new Date(2013, 9, 22), 
      lastInsertUpdateBy: '', 
      ivrPin: '', 
      documentDeliveryPreference: '', 
      address: [this.addressInitial],
      email: 'string',
      preferredOccupation: 'string',
      alternateClaimantId: 'string',
 };
  }

  private http: HttpClient;
  private toasterService: ToasterService



  debug = false;
  submitted = false;

  onSubmit() {
    this.claimantService
    .registerClaimant(this.userProfileModel)
    // .then(
    //   res => {
    //     this.toasterService.success("Success", "Claimant registered successfully");
    //   }
    // )
    // .catch(
    //   err => {
    //     this.toasterService.danger("Error", err);
    //   }
    // )
    
  }

  thenFn(): any{
   console.log(true);
  } 

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
