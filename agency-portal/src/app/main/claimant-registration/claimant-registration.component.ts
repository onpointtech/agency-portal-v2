import { Component, OnInit, Input } from '@angular/core';
import { OptimumComponentsModule } from 'optimum-components';
import { UserProfileModel } from '../optimum-form/user-profile-model';
import {ClaimantSO} from '../../service-objects/claimant-so'
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

  radioChoices=['male', 'female', 'prefer not to say',];
  dropdownChoices = ['yes', 'no', 'maybe'];

  profileForm = this.fb.group({
    claimantId: [0, Validators.required],
    ssn: ['', Validators.required],
    dateofBirth: [new Date(2019,1,1), Validators.required],
    firstName: ['', Validators.required],
   middleInitial: ['', Validators.required],
    lastName: ['', Validators.required],
  });


  constructor(private fb: FormBuilder, private claimantService: ClaimantService) { 
    
  }

  ngOnInit() {
    this.userProfileModel = {claimantId:0, ssn: '123456789', dateOfBirth: new Date('2013-09-22'),firstName: 'Bob',middleInitial: 'D',lastName: 'Ong',homePhone: '', mobilePhone: '', languagePreference: '', educationalLevel: '', gender: '', race: '', ethnicity: '', lastInsertUpdateTS: new Date(2013, 9, 22), lastInsertUpdateBy:'', ivrPin: '', documentDeliveryPreference: '', address: []};
  }

  private http: HttpClient;
  private toasterService: ToasterService

  

  debug = false;
  submitted = false;

  onSubmit() { 
    console.log(true);
    // this.submitted = true;
    this.claimantService.registerClaimant(this.userProfileModel);  }

}
