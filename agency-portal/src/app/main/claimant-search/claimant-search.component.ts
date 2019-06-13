import { Component, OnInit, NgZone } from '@angular/core';
import { ClaimantService } from '../../portal-services/claimant.service';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-claimant-search',
  templateUrl: './claimant-search.component.html',
  styleUrls: ['./claimant-search.component.css']
})
export class ClaimantSearchComponent implements OnInit {
  public claimantInfo: string
  claimantSO: ClaimantSO[];

  columnsToDisplay = ['ssn', 'name', 'dateOfBirth', 'homePhone', 'mobilePhone', 'address'];
  
  constructor(private claimantService: ClaimantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.claimantInfo = this.route.snapshot.paramMap.get('claimantInfo');
    this.searchClaimant(this.claimantInfo)
  }

  getClaimantSO(): void {
    this.claimantService
      .getAllClaimants()
      .subscribe(claimantSO => this.claimantSO = claimantSO);
  }

  searchClaimant(claimantInfo: string){
    this.claimantService
    .searchClaimant(claimantInfo)
    .subscribe(claimantSO => this.claimantSO = claimantSO);
  }
}
