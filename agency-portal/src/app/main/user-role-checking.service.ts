import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleCheckingService {

  constructor() { }

  userCanAccess(allowedUsers: string[], userRoles: string[]): boolean {
    var accessPermission: boolean = true;

    for(var i = 0; i < userRoles.length; i++){
      if(allowedUsers.some(x => x === userRoles[i])) {
        accessPermission = true;
        break;
      }
    }
    return accessPermission;
  }
}
