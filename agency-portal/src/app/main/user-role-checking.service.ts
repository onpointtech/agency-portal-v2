import { Injectable } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { AlertService } from 'projects/opt-library/src/portal-services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleCheckingService {

  constructor(private router: Router,
    private alert: AlertService
  ) { }

  userCanAccess(allowedUsers: string[], userRoles: string[]): boolean {
    var accessPermission: boolean = false;

    for(var i = 0; i < userRoles.length; i++){
      if(allowedUsers.some(x => x === userRoles[i])) {
        accessPermission = true;
        break;
      }
    }

    if(!accessPermission){
      this.router.navigate(['/main/home']);
      this.alert.error("Error","You are not allowed to visit this page");
    }

    return accessPermission;
  }
}
