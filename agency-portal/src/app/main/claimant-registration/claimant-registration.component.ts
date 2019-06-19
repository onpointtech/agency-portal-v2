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


  constructor(private fb: FormBuilder, private claimantService: ClaimantService, private toasterService:ToasterService) {

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

  verifyBeforeSubmit(){
    if(this.profileForm.valid){
      console.log("Legit siya");
      this.toasterService.success("Success", "Form was submitted");
      this.onSubmit();
    }
    else{
      console.log("HINDI Legit siya");
      this.toasterService.danger("Error", "Some forms are not yet filled");
      
    }
  }

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
