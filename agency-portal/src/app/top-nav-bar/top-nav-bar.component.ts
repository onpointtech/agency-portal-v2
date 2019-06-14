import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router"

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styles: []
})
export class TopNavBarComponent implements OnInit {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         this.router.navigated = false;
         window.scrollTo(0, 0);
      }
    });

  }

  ngOnInit() {
  }

  searchClaimant(){
    var claimantInfo = (<HTMLInputElement>document.getElementById('searchText')).value;
    this.router.navigate([`main/claimant-search/${claimantInfo}`])
  }

}
