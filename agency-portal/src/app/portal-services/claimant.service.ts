import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { ClaimantSO } from '../service-objects/claimant-so';
import { ToasterService } from './toaster.service';
import { catchError } from 'rxjs/operators'
import { UpdateClaimantSO } from '../service-objects/update-claimant-so';


@Injectable({
  providedIn: 'root'
})
export class ClaimantService {

  url = "http://localhost:8080/api/claimant";

  constructor(private http: HttpClient, private toasterService: ToasterService) { }
  public getClaimantById(claimantId: number): Observable<ClaimantSO> {
    const claimantUrl = `${this.url}/getClaimantById/${claimantId}`;
    return this.http.get<ClaimantSO>(claimantUrl)
  }

  public getAllClaimants(): Observable<ClaimantSO[]> { //Observable<ClaimantSO[]> {
    const claimantUrl = `${this.url}/getAllClaimants`;
    return this.http.get<ClaimantSO[]>(claimantUrl).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
      return EMPTY;
    }));
  }

  public searchClaimant(claimantInfo: string): Observable<ClaimantSO[]> {
    const claimantUrl = `${this.url}/searchClaimant/${claimantInfo}`;
    return this.http.get<ClaimantSO[]>(claimantUrl).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
      return EMPTY;
    }));
  }

  public registerClaimant(claimantSO: ClaimantSO){
    console.log("inside register claimant");
    const claimantUrl = `http://localhost:8080/api/claimant/registerClaimant`;
    return this.http.post(claimantUrl, claimantSO).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
      return EMPTY;
    }))
      .toPromise()
      .then(this.extractData);
  }

  public extractData(res: Response) {
    this.toasterService.success("Success!", "Profile has been registered");
    console.log(res);
  }

  public handleErrorPromise(error: Response | any) {
    // this.toasterService.danger("ERROR", error);
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  updateClaimant(id: number, updateClaimantSO: UpdateClaimantSO): Observable<UpdateClaimantSO> {
    const claimantUrl = `${this.url}/updateClaimant/${id}`;
    return this.http.put<UpdateClaimantSO>(claimantUrl, updateClaimantSO).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "Cannot update profile.");
      return EMPTY;
    }));
  }
}
