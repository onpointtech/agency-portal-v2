import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AgencyServiceService {

  url = "http://localhost:8080/agencyService";

  constructor(private http: HttpClient, private toasterService: ToasterService) {  }
    public getAgencyStaff(agencyStaffId:string): Observable<any> {
      const agencyUrl = `${this.url}/api/agency/${agencyStaffId}`;
      // const agencyUrl = `${this.url}/api/agency/getAgencyByUserId/${agencyStaffId}`;

      return this.http.get<any>(agencyUrl)
    }
 

}
