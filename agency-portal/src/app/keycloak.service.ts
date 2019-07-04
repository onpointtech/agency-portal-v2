import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private keycloakAuth: any;
  init(): Promise<any> {
  return new Promise((resolve, reject) => {
      const config = {
        'url': 'http://localhost:8888/auth',
        'realm': 'master',
        'clientId': 'js-console'
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }
getToken(): string {
  return this.keycloakAuth.token;
}
}
