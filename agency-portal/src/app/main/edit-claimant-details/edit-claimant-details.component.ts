import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClaimantService } from '../../portal-services/claimant.service';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { PortalService } from '../../portal-services/portal.service';

@Component({
  selector: 'app-edit-claimant-details',
  templateUrl: './edit-claimant-details.component.html',
  styleUrls: ['./edit-claimant-details.component.css']
})
export class EditClaimantDetailsComponent {
  @Input() input;
  id: number;
  updateClaimant = new UpdateClaimantSO();

  constructor(public activeModal: NgbActiveModal, private claimantService: ClaimantService, private portalService: PortalService) { }

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
