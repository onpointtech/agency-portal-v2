import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { STATECHOICES, GENDERCHOICES, RACECHOICES, ETHNICITYCHOICES, EDUCATIONLEVELCHOICES, LANGUAGEPREFERENCECHOICES } from '../../choices/choices'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material';
import { ClaimantSO } from 'projects/opt-library/src/service-objects/claimant-so';
import { Address } from 'projects/opt-library/src/service-objects/address';
import { ClaimantService } from 'projects/opt-library/src/portal-services/claimant.service';
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-claimant-registration',
  templateUrl: './claimant-registration.component.html',
  styleUrls: ['./claimant-registration.component.css']
})
export class ClaimantRegistrationComponent implements OnInit {
  userProfileModel = new ClaimantSO();
  addressInitial = new Address();
  claimantId: number;
  stateChoices = STATECHOICES;
  genderChoices = GENDERCHOICES;
  raceChoices = RACECHOICES;
  ethnicityChoices = ETHNICITYCHOICES;
  educationLevelChoices = EDUCATIONLEVELCHOICES;
  languagePreferenceChoices = LANGUAGEPREFERENCECHOICES;



  profileForm = this.fb.group({
    ssn: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern("[0-9]{9}")
      ])
    ],
    confirmSsn: [
      '',
      Validators.compose([Validators.required])
    ],
    firstName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])
    ],
    lastName: [
      '',
      Validators.required
    ],
    middleInitial: [
      '',
      Validators.compose([
        Validators.maxLength(1),
        Validators.pattern("[a-zA-z]*")
      ])
    ],
    dateOfBirth: [
      new Date(2019, 1, 1),
      Validators.required
    ],
    homePhone: [
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern("[0-9]*")
      ])
    ],
    mobilePhone: [
      '',
      Validators.compose([
        Validators.maxLength(10),
        Validators.pattern("[0-9]*")
      ])
    ],
    preferredOccupation: [
      '',
      Validators.required
    ],
    languagePreference: [
      '',
      Validators.required
    ],
    gender: [
      '',
      Validators.required
    ],
    educationLevel: [
      '',
      Validators.required
    ],
    race: [
      '',
      Validators.required
    ],
    ethnicity: [
      '',
      Validators.required
    ],
    addressLine1: [
      '',
      Validators.required
    ],
    addressLine2: [
      '',
      Validators.required
    ],
    city: [
      '',
      Validators.required
    ],
    state: [
      '',
      Validators.required
    ],
    zipCode: [
      '',
      Validators.required
    ],
    zipExt: [
      '',
      Validators.required
    ],
  });

  constructor(private fb: FormBuilder,
    private claimantService: ClaimantService,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.claimantId = 0;
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




  debug = true;
  submitted = false;

  convertDateType(){
    //date in form type is different from JSON's date
    let ngbDate = this.profileForm.controls['dateOfBirth'].value;
    let myDate = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day);
    this.userProfileModel.dateOfBirth = myDate;

  }


  verifyBeforeSubmit() {
 


    if (this.profileForm.valid) {

      //TODO onsubmit should return a long
      // use the value of onSubmit to update the claimantId
      // this.claimantId = this.onSubmit() // if this returns a long
    this.convertDateType();
    this.claimantService
      .registerClaimant(this.userProfileModel);
      console.log("Submitted form");
      this.toasterService.success("Success", "Form was submitted");
      //redirect on survey submission, only if you update your claimantId to what is returned by onSubmit
      // this.router.navigate([`/main/claimant-overview/${this.claimantId}`]);
    }
    else {
      this.profileForm.markAllAsTouched();
      console.log(this.profileForm.value);

      console.log("Error in submitting form");
      this.toasterService.danger("Error", "Some forms are not yet filled");

    }
  }


  //once register claimant service is modified, can use this to return a claimantId and reroute
  onSubmit() {
    this.claimantService
      .registerClaimant(this.userProfileModel);
  }


  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  //FILLER FUNCTIONS PLEASE MOVE THIS TO A SEPARATE SERVICE IN THE FUTURE

  FillForm() {
    console.log(this.vowel())

    this.addressInitial = {
      id: null,
      addressLine1: 'Old town',
      addressLine2: 'road',
      state: this.stateChoices[10],
      city: 'Owl',
      zipCode: Math
        .random()
        .toString(10)
        .substr(2, 7),
      zipExt: Math
        .random()
        .toString(10)
        .substr(2, 7),
      lastInsertUpdateTS: null,
      lastInsertUpdateBy: '',
    },

      this.userProfileModel = {
        claimantId: null,
        ssn: Math.random().toString(10).substr(2, 9),
        dateOfBirth: new Date(this.day(), this.month(), this.year()),
        firstName: 'J' + this.vowel() + 'y' + this.vowel() + 'm',
        middleInitial: this.vowel().toUpperCase(),
        lastName: this.vowel().toUpperCase() + 'b' + this.vowel() + 'rd' + this.vowel() + 'l' + this.vowel() + 'z' + this.vowel(),
        homePhone: Math.random().toString(10).substr(2, 10),
        mobilePhone: Math.random().toString(10).substr(2, 10),
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
      console.log("Submitted form");
      this.toasterService.success("Success", "Form was submitted");
  }

  vowel(): string {
    return Math.random().toString(5).replace('0.', '').substr(0, 1).replace('1', 'a').replace('0', 'e').replace('2', 'i').replace('3', 'o').replace('4', 'u')
  }

  day(): number {
    return Math.floor(Math.random() * 30)
  }

  month(): number {
    return Math.floor(Math.random() * 12)
  }

  year(): number {
    return 1990 + Math.floor(Math.random() * 29)
  }



}
