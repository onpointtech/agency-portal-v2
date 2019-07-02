import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { STATECHOICES } from '../../choices/choices';
import { Address } from '../../service-objects/address';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { ClaimantService } from '../../portal-services/claimant.service';
import { PortalService } from '../../portal-services/portal.service';

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

    this.updateClaimantAddress = {
      addressLine1: this.portalService.claimantSO.address[0].addressLine1,
      addressLine2: this.portalService.claimantSO.address[0].addressLine2,
      city: this.portalService.claimantSO.address[0].city,
      state: this.portalService.claimantSO.address[0].state,
      zipCode: this.portalService.claimantSO.address[0].zipCode,
      zipExt: this.portalService.claimantSO.address[0].zipExt,
      id: this.portalService.claimantSO.address[0].id,
      lastInsertUpdateBy: this.portalService.claimantSO.address[0].lastInsertUpdateBy,
      lastInsertUpdateTS: this.portalService.claimantSO.address[0].lastInsertUpdateTS
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
        addressLine1: [null, Validators.required],
        addressLine2: [null,  Validators.required],
        city: [null,  Validators.required],
        state: [null,  Validators.required],
        zipCode: [null,  Validators.required],
        zipExt: [null],
      }
    );
  }

  close() {
    this.activeModal.close('Close click');
  }

  updateClaimantDetails() {
    console.log(this.updateClaimant);
    console.log(this.updateClaimantAddress);

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

    this.id = this.portalService.claimantSO.claimantId;
    this.claimantService.updateClaimant(this.id, this.updateClaimant)
      .subscribe(updateClaimant => { this.updateClaimant = updateClaimant });
    this.close();
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
