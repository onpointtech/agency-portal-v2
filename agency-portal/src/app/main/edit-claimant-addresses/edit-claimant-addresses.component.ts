import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-claimant-addresses',
  templateUrl: './edit-claimant-addresses.component.html',
  styleUrls: ['./edit-claimant-addresses.component.css']
})
export class EditClaimantAddressesComponent {
  @Input() address;
  constructor(private activeModal: NgbActiveModal) { }

  close() {
    this.activeModal.close('Close click');
  }
}
