import { Component, OnInit, ViewChild, SystemJsNgModuleLoader } from '@angular/core';
import { ClaimantService } from '../../portal-services/claimant.service';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ToasterService } from '../../portal-services/toaster.service';

@Component({
  selector: 'app-claimant-search',
  templateUrl: './claimant-search.component.html',
  styleUrls: ['./claimant-search.component.css']
})
export class ClaimantSearchComponent implements OnInit {
  public claimantInfo: string
  claimantSO: ClaimantSO[];

  columnsToDisplay = ['ssn', 'name', 'dateOfBirth', 'homePhone', 'mobilePhone', 'address'];
  
  constructor(private claimantService: ClaimantService, private route: ActivatedRoute, private toasterService: ToasterService, private router: Router) { }

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

    // if(this.claimantSO.length > 0){
    //   this.toasterService.success(String(this.claimantSO.length), "hello", 3);
    // } else {
    //   this.toasterService.info("hello", "hello");
    // }
  }

  registerClaimant() {
    this.router.navigate([`main/claimant-registration`])
  }
}
