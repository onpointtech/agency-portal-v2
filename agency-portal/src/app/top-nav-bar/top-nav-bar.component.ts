import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router"
import { KeycloakService } from 'keycloak-angular';
import { PortalService } from 'projects/opt-library/src/portal-services/portal.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styles: []
})
export class TopNavBarComponent implements OnInit {
  firstName: string;
  constructor(private router: Router, private keycloakService: KeycloakService, private portalService: PortalService) {
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
    this.firstName = this.portalService.firstName;
  }

  searchClaimant(){
    var claimantInfo = (<HTMLInputElement>document.getElementById('searchText')).value;
    this.router.navigate([`main/claimant-search/${claimantInfo}`])
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

}
