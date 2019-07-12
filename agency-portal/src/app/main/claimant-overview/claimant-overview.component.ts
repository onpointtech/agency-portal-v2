//import angular modules
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import external modules
//import user made modules

//import components
import { ClaimComponent } from '../claim/claim.component';

//import services
import { ClaimantService } from 'projects/opt-library/src/portal-services/claimant.service';
import { PortalService } from 'projects/opt-library/src/portal-services/portal.service';

//import models or constants
import { ClaimantSO } from 'projects/opt-library/src/service-objects/claimant-so';
import { ClaimantSearchService } from '../claimant-search-service/claimant-search.service';


@Component({
  selector: 'app-claimant-overview',
  templateUrl: './claimant-overview.component.html',
  styleUrls: ['./claimant-overview.component.css']
})
export class ClaimantOverviewComponent implements OnInit {
  @Input() claimantId: number
  claimantSO: any
  flag: number;

  constructor(private route: ActivatedRoute, 
    private claimantService: ClaimantService,
    private claimantUsed: PortalService,
    private searchService: ClaimantSearchService
  ) { }

  ngOnInit() {
    this.claimantId = Number(this.route
      .snapshot
      .paramMap
      .get('claimantId')
    );
    this.claimantOverview(this.claimantId)
  }

  claimantOverview(claimantId: number){
    this.claimantService
    .getClaimantById(claimantId)
    .subscribe(claimantSO => { 
      console.log(claimantSO);
      this.claimantSO = claimantSO; 
      this.claimantUsed.claimantSO = this.claimantSO;
    });
  }

}
