import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ClaimantService } from '../../portal-services/claimant.service';

@Component({
  selector: 'app-claimant-overview',
  templateUrl: './claimant-overview.component.html',
  styleUrls: ['./claimant-overview.component.css']
})
export class ClaimantOverviewComponent implements OnInit {
  claimantSO: ClaimantSO
  claimantId: number

  constructor(private route: ActivatedRoute, private claimantService: ClaimantService, private router: Router) { }

  ngOnInit() {
    this.claimantId = Number(this.route.snapshot.paramMap.get('claimantId'));
    this.claimantOverview(this.claimantId)
  }

  claimantOverview(claimantId: number){
    this.claimantService.
    getClaimantById(claimantId)
    .subscribe(claimantSO => this.claimantSO = claimantSO);
  }

  viewClaimantProfile(){
    this.router.navigate([`main/claimant-profile/${this.claimantId}`])
  }

}
