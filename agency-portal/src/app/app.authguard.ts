import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { AlertService } from 'projects/opt-library/src/portal-services/alert.service';
 
@Injectable()
export class AppAuthGuard extends KeycloakAuthGuard {
  constructor(protected router: Router, protected keycloakAngular: KeycloakService, private alert: AlertService, private activatedRoute: ActivatedRoute) {
    super(router, keycloakAngular);
  }
 
  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.authenticated) {
        this.keycloakAngular.login();
        return;
      }
 
      const requiredRoles = route.data.roles;
      const sample = this.activatedRoute.data;
      console.log(sample);
      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          this.router.navigate(['/not-authorized']);
          this.alert.error("Error","You are not allowed to visit this page");
          return resolve(true);
        }
        let granted: boolean = false;
        for (const requiredRole of requiredRoles) {
          if (this.roles.indexOf(requiredRole) > -1) {
            granted = true;
            return resolve(true);
          }
        }
        if(granted == false) {
          this.router.navigate(['/not-authorized']);
          this.alert.error("Error","You are not allowed to visit this page");
          return resolve(true);
        }
      }
    });
  }
}