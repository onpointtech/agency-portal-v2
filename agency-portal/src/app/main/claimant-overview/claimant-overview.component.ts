import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimantSO } from 'projects/opt-library/src/service-objects/claimant-so';
import { ClaimantService } from 'projects/opt-library/src/portal-services/claimant.service';
import { PortalService } from 'projects/opt-library/src/portal-services/portal.service';

@Component({
  selector: 'app-claimant-overview',
  templateUrl: './claimant-overview.component.html',
  styleUrls: ['./claimant-overview.component.css']
})
export class ClaimantOverviewComponent implements OnInit {
  claimantSO: ClaimantSO
  claimantId: number

  constructor(private route: ActivatedRoute, 
    private claimantService: ClaimantService,
    private claimantUsed: PortalService) { }

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
}
