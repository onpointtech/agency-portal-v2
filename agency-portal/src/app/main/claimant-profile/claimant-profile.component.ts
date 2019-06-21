import { Component, OnInit } from '@angular/core';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalService } from '../../portal-services/modal.service';
import { EditClaimantDetailsComponent } from '../edit-claimant-details/edit-claimant-details.component';
import { EditClaimantAddressesComponent } from '../edit-claimant-addresses/edit-claimant-addresses.component';
import { PortalService } from '../../portal-services/portal.service';
import { FormBuilder } from '../../../../node_modules/@angular/forms';

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
    this.modalService.open(EditClaimantAddressesComponent, object);
  }

}
