import { Component, OnInit } from '@angular/core';
import { ClaimantService } from '../../portal-services/claimant.service';
import { ClaimantSO } from '../../service-objects/claimant-so';

@Component({
  selector: 'app-claimant-search',
  templateUrl: './claimant-search.component.html',
  styleUrls: ['./claimant-search.component.css']
})
export class ClaimantSearchComponent implements OnInit {
  claimantSO: ClaimantSO[]

  constructor(private claimantService: ClaimantService) { } //

  ngOnInit() {
    this.getClaimantSO();
  }

  getClaimantSO(): void {
    this.claimantService.getAllClaimants().subscribe(claimant => this.claimant = claimant);
  }

}
