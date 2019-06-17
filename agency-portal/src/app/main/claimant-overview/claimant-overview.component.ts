import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ClaimantService } from '../../portal-services/claimant.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-claimant-overview',
  templateUrl: './claimant-overview.component.html',
  styleUrls: ['./claimant-overview.component.css']
})
export class ClaimantOverviewComponent implements OnInit {
  claimantSO: ClaimantSO
  claimantId: number

  constructor(private route: ActivatedRoute, private claimantService: ClaimantService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    this.claimantId = Number(this.route.snapshot.paramMap.get('claimantId'));
    this.claimantOverview(this.claimantId)
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'MM/dd/yyyy');
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
