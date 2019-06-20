import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClaimantService } from '../../portal-services/claimant.service';
import { PortalService } from '../../portal-services/portal.service';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';

@Component({
  selector: 'app-edit-claimant-addresses',
  templateUrl: './edit-claimant-addresses.component.html',
  styleUrls: ['./edit-claimant-addresses.component.css']
})
export class EditClaimantAddressesComponent {
  @Input() address;
  id: number;
  updateClaimant = new UpdateClaimantSO();

  constructor(private activeModal: NgbActiveModal, private claimantService: ClaimantService, private portalService: PortalService) { }

  close() {
    this.activeModal.close('Close click');
  }

  updateClaimantDetails() {

    this.updateClaimant = {
      middleInitial: null,
      homePhone: null,
      mobilePhone: null,
      languagePreference: null,
      educationLevel: null, 
      gender: 'Male',
      race: null, 
      ethnicity: null,
      ivrPin: null, 
      documentDeliveryPreference: null,
      lastInsertUpdateTS: null, 
      lastInsertUpdateBy: null, 
      address: null,
    };

    this.id = this.portalService.claimantSO.claimantId;
    this.claimantService.updateClaimant(this.id, this.updateClaimant)
    .subscribe(updateClaimant => {this.updateClaimant = updateClaimant});
  }

}
