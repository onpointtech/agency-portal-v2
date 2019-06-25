import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateClaimantSO } from 'src/app/service-objects/update-claimant-so';
import { ClaimantSO } from 'src/app/service-objects/claimant-so';
import { Address } from 'src/app/service-objects/address';
import { STATECHOICES } from 'src/app/choices/choices';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClaimantService } from 'src/app/portal-services/claimant.service';
import { PortalService } from 'src/app/portal-services/portal.service';

@Component({
  selector: 'opt-edit-claimant-address',
  templateUrl: './edit-claimant-address.component.html',
  styles: []
})
export class EditClaimantAddressComponent implements OnInit {
  @Input() address;

  id: number;
  addressId: number;
  updateClaimant = new UpdateClaimantSO();
  claimantProfileCopy = new ClaimantSO();
  updateClaimantAddress = new Address();
  stateChoices = STATECHOICES;
  profileForm: FormGroup;
  debug = false;

  constructor(public activeModal: NgbActiveModal, private claimantService: ClaimantService, private portalService: PortalService, private fb: FormBuilder) { }

  ngOnInit() {
    this.claimantProfileCopy = this.portalService.claimantSO;

    this.updateClaimantAddress = {
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zipCode: null,
      zipExt: null,
      id: null,
      lastInsertUpdateBy: null,
      lastInsertUpdateTS: null
    };

    this.updateClaimant = {
      middleInitial: null,
      homePhone: null,
      mobilePhone: null,
      languagePreference: null,
      educationLevel: null,
      gender: null,
      race: null,
      ethnicity: null,
      ivrPin: null,
      documentDeliveryPreference: null,
      lastInsertUpdateTS: null,
      lastInsertUpdateBy: null,
      address: [this.updateClaimantAddress],
    };

    this.profileForm = this.fb.group({
      addressLine1: [null],
      addressLine2: [null],
      city: [null],
      state: [null],
      zipCode: [null],
      zipExt: [null],
    });
  }

  close() {
    this.activeModal.close('Close click');
  }

  updateClaimantDetails() {
    console.log(this.updateClaimant);
    console.log(this.updateClaimantAddress);

    this.id = this.portalService.claimantSO.claimantId;
    this.claimantService.updateClaimant(this.id, this.updateClaimant)
      .subscribe(updateClaimant => { this.updateClaimant = updateClaimant });
    this.close();
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
