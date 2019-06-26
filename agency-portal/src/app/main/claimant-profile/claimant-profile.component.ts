import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder } from '../../../../node_modules/@angular/forms';
import { EditClaimantDetailsComponent } from 'projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component';
import { EditClaimantAddressComponent } from 'projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component';
import { ClaimantSO } from 'projects/opt-library/src/service-objects/claimant-so';
import { ModalService } from 'projects/opt-library/src/portal-services/modal.service';
import { PortalService } from 'projects/opt-library/src/portal-services/portal.service';

@Component({
  selector: 'app-claimant-profile',
  templateUrl: './claimant-profile.component.html',
  styleUrls: ['./claimant-profile.component.css']
})
export class ClaimantProfileComponent implements OnInit {
  claimantSO: ClaimantSO;
  profileForm: any;

  constructor(private route: ActivatedRoute, private modalService: ModalService, private claimantUsed: PortalService, private formBuilder: FormBuilder) { }

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

  openEditClaimantDetails(object: any){
    this.modalService.open(EditClaimantDetailsComponent, object);
  }

  openEditClaimantAddresses(object: any){
    this.modalService.open(EditClaimantAddressComponent, object);
  }

}
