import { Component, OnInit } from '@angular/core';
import { ClaimantService } from '../../portal-services/claimant.service';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ToasterService } from '../../portal-services/toaster.service';
import { Subscription } from 'rxjs';
import { SweetAlertService } from '../../portal-services/sweet-alert.service';

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

  columnsToDisplay = ['ssn', 'name', 'dateOfBirth', 'homePhone', 'mobilePhone', 'address'];

  swalObject:object = {
    type: 'info',
    title: "Info",
    text: "Sorry, there are no results for the given string",
    showCancelButton: true,
    confirmButtonText: 'Go to Claimant Registration',
    cancelButtonText: 'Cancel'
  }
  
  constructor(private claimantService: ClaimantService, private route: ActivatedRoute, private toasterService: ToasterService, private sweetAlert: SweetAlertService) { 
  }

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
    .subscribe(claimantSO => {this.claimantSO = claimantSO;
      if(claimantSO.length > 1){
        this.toasterService.success("Success", "There are " + String(claimantSO.length) + " results for your query.");
      } else if(claimantSO.length == 1) {
        this.toasterService.success("Success", "There is " + String(claimantSO.length) + " result for your query.");
      }else if(claimantSO.length == 0) {
        this.sweetAlert.custom(this.swalObject, "main/claimant-registration");
      }
    });
  }
}
