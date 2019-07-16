import { Component, OnInit, Input } from '@angular/core';
import { ClaimantSO } from '../service-objects/claimant-so';
import { Address } from '../service-objects/address';

import { FormBuilder } from '@angular/forms';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { EditClaimantDetailsComponent } from '../edit-claimant-details/edit-claimant-details.component';
import { EditClaimantAddressComponent } from '../edit-claimant-address/edit-claimant-address.component';

@Component({
  templateUrl: './simple-claimant-profile.component.html',
  styles: []
})
export class SimpleClaimantProfileComponent implements OnInit {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() phone: string;
  @Input() address: string;
  claimantSO = new ClaimantSO();
  claimantAddress = new Address();
  profileForm: any;


  constructor(private formBuilder: FormBuilder,
    private modalService: ModalService) { }

  ngOnInit() {

    // this.claimantSO.firstName = this.firstname;
    // this.claimantSO.lastName = this.lastname;
    // this.claimantSO.homePhone = this.phone;
    // this.claimantSO.address = [this.claimantAddress];



    this.claimantAddress = {
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

      this.claimantSO = {
        claimantId: 4,
        ssn: '',
        dateOfBirth: null,
        firstName: this.firstname,
        middleInitial: '',
        lastName: this.lastname,
        homePhone: this.phone,
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
        address: [this.claimantAddress],
        email: '',
        preferredOccupation: '',
        alternateClaimantId: '',
      };

          console.log(this.claimantSO);
    console.log(this.firstname);

    this.profileForm = this.formBuilder.group({
      ssn: [''],
      alternateClaimantId: [''],
      firstName: [this.firstname],
      lastName: [this.lastname],
      middleInitial: [''],
      dateOfBirth: [new Date(2019, 1, 1)],
      homePhone: [this.phone],
      mobilePhone: [''],
      preferredOccupation: [''],
      languagePreference: [''],
      gender: [''],
      educationLevel: [''],
      race: [''],
      ethnicity: [''],
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      zipExt: [''],
    });
  }

    //makes the editclaimant detail modal
    openEditClaimantDetails(object: any){
      this.modalService.open(EditClaimantDetailsComponent, object);
    }

     //makes the editclaimant address modal
    openEditClaimantAddresses(object: any){
      this.modalService.open(EditClaimantAddressComponent, object);
    }

  }

