import { Component } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from "../../src/app/parser/ngb-date-fr-parser-formatter";
import { KeycloakService } from '../../node_modules/keycloak-angular';
import { KeycloakProfile } from '../../node_modules/keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}]
})
export class AppComponent {
  userDetails: KeycloakProfile;
  title = 'Agency Portal';

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
  }
}
