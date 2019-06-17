import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { ClaimantSO } from '../service-objects/claimant-so';
import { ToasterService } from './toaster.service';
import { catchError } from 'rxjs/operators'

//import { Claimant } from '../mock-claimant';


@Injectable({
  providedIn: 'root'
})
export class ClaimantService {

  constructor(private http: HttpClient, private toasterService: ToasterService) { }
  public getClaimantById(claimantId: number): Observable<ClaimantSO> {
    const claimantUrl = `http://localhost:8080/api/claimant/getClaimantById/${claimantId}`;
    return this.http.get<ClaimantSO>(claimantUrl)
  }

  public getAllClaimants(): Observable<ClaimantSO[]> { //Observable<ClaimantSO[]> {
    const claimantUrl = 'http://localhost:8080/api/claimant/getAllClaimants';
    return this.http.get<ClaimantSO[]>(claimantUrl).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
      return EMPTY;
    }));
  }

  public searchClaimant(claimantInfo: string): Observable<ClaimantSO[]> {
    const claimantUrl = `http://localhost:8080/api/claimant/searchClaimant/${claimantInfo}`;
    return this.http.get<ClaimantSO[]>(claimantUrl).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
      return EMPTY;
    }));
  } 

  public registerClaimant(claimantSO:ClaimantSO): Promise<any> {
    console.log("inside register claimant");
    const claimantUrl = `http://localhost:8080/api/claimant/registerClaimant`;
    return this.http.post(claimantUrl, claimantSO)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleErrorPromise)
  }

  extractData(res: Response) {
    this.toasterService.success("Success!", "Profile has been registered");
    console.log(res);
  }

  handleErrorPromise (error: Response | any) {
    // this.toasterService.danger("ERROR", error);
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  } 
  // updateClaimantPayment() {

  // }

  // updateClaimant(id: number, updateClaimantSO: UpdateClaimantSO): Observable<UpdateClaimantSO> {
  //   const url = `$(this.claimantUrl)/$(id)`;
  //   return this.http.put<UpdateClaimantSO>(url, updateClaimantSO)
  // }
}
