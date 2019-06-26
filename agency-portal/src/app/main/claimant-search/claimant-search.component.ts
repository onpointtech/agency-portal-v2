import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClaimantSO } from 'projects/opt-library/src/service-objects/claimant-so';
import { ClaimantService } from 'projects/opt-library/src/portal-services/claimant.service';
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { AlertService } from 'projects/opt-library/src/portal-services/alert.service';

@Component({
  selector: 'app-claimant-search',
  templateUrl: './claimant-search.component.html',
  styleUrls: ['./claimant-search.component.css']
})
export class ClaimantSearchComponent implements OnInit {

  public claimantInfo: string;
  claimantSO: ClaimantSO[];
  previousUrl: any;
  subscription: Subscription;
  columnsToDisplay: string[];
  noSearchResultObject: object;
  
  constructor(private claimantService: ClaimantService, 
    private route: ActivatedRoute, 
    private toasterService: ToasterService, 
    private alert: AlertService, 
    private router: Router) { 

  }

  ngOnInit() {
    this.claimantInfo = this.route.snapshot.paramMap.get('claimantInfo');
    this.searchClaimant(this.claimantInfo);

    this.columnsToDisplay = ['ssn', 'name', 'dateOfBirth', 'homePhone', 'mobilePhone', 'address'];

    this.noSearchResultObject = {
      type: 'info',
      title: "Info",
      text: "Sorry, there are no results for the given string",
      showCancelButton: true,
      confirmButtonText: 'Go to Claimant Registration',
      cancelButtonText: 'Cancel',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-info',
    }
  }

  getClaimantSO(): void {
    this.claimantService
      .getAllClaimants()
      .subscribe(claimantSO => this.claimantSO = claimantSO);
  }

  searchClaimant(claimantInfo: string) {
    this.claimantService
    .searchClaimant(claimantInfo)
    .subscribe(claimantSO => {this.claimantSO = claimantSO;
      if(claimantSO.length > 1) {
        this.toasterService.success(
          "Success", 
          "There are " + String(claimantSO.length) + " results for your query."
        );
      } else if(claimantSO.length == 1) {
        this.toasterService.success(
          "Success", 
          "There is " + String(claimantSO.length) + " result for your query.");
      } else if(claimantSO.length == 0) {
        this.alert
        .custom(this.noSearchResultObject)
        .then((result) => {
          if(result.value) {
            this.noSearchResult();
          }
        })
      }
    });
  }

  noSearchResult() {
    this.router.navigate([`main/claimant-registration`]);
  }
}
