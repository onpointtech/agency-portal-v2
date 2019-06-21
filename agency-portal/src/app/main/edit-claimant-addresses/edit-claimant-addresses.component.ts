import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClaimantService } from '../../portal-services/claimant.service';
import { PortalService } from '../../portal-services/portal.service';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClaimantSO } from '../../service-objects/claimant-so'
import { Address } from '../../service-objects/address';
import { STATECHOICES } from '../../choices/choices'

@Component({
  selector: 'app-edit-claimant-addresses',
  templateUrl: './edit-claimant-addresses.component.html',
  styleUrls: ['./edit-claimant-addresses.component.css']
})

export class EditClaimantAddressesComponent {
  @Input() address;

  id: number;
  addressId: number;
  updateClaimant = new UpdateClaimantSO();
  claimantProfileCopy = new ClaimantSO();
  updateClaimantAddress = new Address();
  stateChoices = STATECHOICES;
  profileForm: FormGroup;
  debug = false;

  constructor(private activeModal: NgbActiveModal, private claimantService: ClaimantService, private portalService: PortalService, private fb: FormBuilder) { }

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
