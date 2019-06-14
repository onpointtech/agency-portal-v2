import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styles: []
})
export class TopNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchClaimant(){
    var claimantInfo = (<HTMLInputElement>document.getElementById('searchText')).value;
    this.router.navigate([`main/claimant-search/${claimantInfo}`])
  }

}
