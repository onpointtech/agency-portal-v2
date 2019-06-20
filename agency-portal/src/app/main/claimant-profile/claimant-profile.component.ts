import { Component, OnInit } from '@angular/core';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalService } from '../../portal-services/modal.service';
import { EditClaimantDetailsComponent } from '../edit-claimant-details/edit-claimant-details.component';
import { EditClaimantAddressesComponent } from '../edit-claimant-addresses/edit-claimant-addresses.component';
import { PortalService } from '../../portal-services/portal.service';

@Component({
  selector: 'app-claimant-profile',
  templateUrl: './claimant-profile.component.html',
  styleUrls: ['./claimant-profile.component.css']
})
export class ClaimantProfileComponent implements OnInit {
  claimantSO: ClaimantSO;

  constructor(private route: ActivatedRoute, private modalService: ModalService, private claimantUsed: PortalService) { }

  ngOnInit() {
  //   this.route.queryParams.subscribe((params: Params) => {
  //     this.claimantSO = JSON.parse(params.claimantSO) as ClaimantSO;
  // });
    this.claimantSO = this.claimantUsed.claimantSO;
  }

  openEditClaimantDetails(object: any){
    this.modalService.open(EditClaimantDetailsComponent, object);
  }

  openEditClaimantAddresses(object: any){
    this.modalService.open(EditClaimantAddressesComponent, object);
  }

}
