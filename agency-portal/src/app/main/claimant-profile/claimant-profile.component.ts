//import angular modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';

//import external modules
//import user made modules

//import components
import { EditClaimantDetailsComponent } from 'projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component';
import { EditClaimantAddressComponent } from 'projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component';
import { ClaimComponent } from '../claim/claim.component';

//import services
import { ModalService } from 'projects/opt-library/src/portal-services/modal.service';
import { PortalService } from 'projects/opt-library/src/portal-services/portal.service';

//import models or constants
import { ClaimantSO } from 'projects/opt-library/src/service-objects/claimant-so';

@Component({
  selector: 'app-claimant-profile',
  templateUrl: './claimant-profile.component.html',
  styleUrls: ['./claimant-profile.component.css']
})

export class ClaimantProfileComponent implements OnInit {
  claimantSO: ClaimantSO;
  profileForm: any;

  constructor(private route: ActivatedRoute,
    private modalService: ModalService,
    private claimantUsed: PortalService, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.claimantSO = this.claimantUsed.claimantSO;

    console.log(this.claimantSO)

    this.profileForm = this.formBuilder.group({
      ssn: [''],
      alternateClaimantId: [''],
      firstName: [''],
      lastName: [''],
      middleInitial: [''],
      dateOfBirth: [new Date(2019, 1, 1)],
      homePhone: [''],
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
