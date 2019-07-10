import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

declare let Keycloak: any;

@Injectable()
export class KeycloakService {
   static auth: any = {};

   static init(): Promise<any> {
    const keycloakAuth: any = Keycloak({
      config: environment.keycloak,
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: []
    });
 
    KeycloakService.auth.loggedIn = false;
 
    return new Promise((resolve, reject) => {
       keycloakAuth.init({onLoad: 'login-required'})
          .success(() => {
             console.log(keycloakAuth);
             KeycloakService.auth.loggedIn = true;
             KeycloakService.auth.authz = keycloakAuth;
             KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl
                + '/realms/angular_keycloak/protocol/openid-connect/logout?redirect_uri='
                + document.baseURI;
             resolve();
          })
          .error(() => {
             reject();
          });
    });
 }

 static logout() {
  console.log('**  LOGOUT');
  KeycloakService.auth.loggedIn = false;
  KeycloakService.auth.authz = null;

  window.location.href = KeycloakService.auth.logoutUrl;
}

getToken(): Promise<any> {
  return new Promise((resolve, reject) => {
     if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
           .updateToken(5)
           .success(() => {
              resolve(KeycloakService.auth.authz.token);
           })
           .error(() => {
              reject('Failed to refresh token');
           });
     } else {
        reject('Not logged in');
     }
  });
}

static getUsername(): string {
   return KeycloakService.auth.authz.tokenParsed;
   //return KeycloakService.auth.authz.tokenParsed.preferred_username;
}

static getFullName(): string {
  return KeycloakService.auth.authz.tokenParsed.name;
}


}