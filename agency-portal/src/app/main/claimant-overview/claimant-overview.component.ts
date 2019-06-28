import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimantSO } from 'projects/opt-library/src/service-objects/claimant-so';
import { ClaimantService } from 'projects/opt-library/src/portal-services/claimant.service';
import { PortalService } from 'projects/opt-library/src/portal-services/portal.service';
import { ClaimComponent } from '../claim/claim.component';
import { ModalService } from 'projects/opt-library/src/portal-services/modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-claimant-overview',
  templateUrl: './claimant-overview.component.html',
  styleUrls: ['./claimant-overview.component.css']
})
export class ClaimantOverviewComponent implements OnInit {
  claimantSO: ClaimantSO
  @Input() claimantId: number

  constructor(private route: ActivatedRoute, 
    private claimantService: ClaimantService,
    private claimantUsed: PortalService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.claimantId = Number(this.route
      .snapshot
      .paramMap
      .get('claimantId')
    );
    this.claimantOverview(this.claimantId)
  }

  claimantOverview(claimantId: number){
    this.claimantService.
    getClaimantById(claimantId)
    .subscribe(claimantSO => { 
      this.claimantSO = claimantSO; 
      this.claimantUsed.claimantSO = this.claimantSO;
     });
  }


  openNewClaim(object: any){
    const modalRef = this.modalService.open(ClaimComponent, object);
    modalRef.componentInstance.claimantId = this.claimantId;
  }

}
