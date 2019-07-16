import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { ToasterService } from './toaster.service';
import { catchError } from 'rxjs/operators'
import { ClaimantSO } from '../service-objects/claimant-so';
import { UpdateClaimantSO } from '../service-objects/update-claimant-so';


@Injectable({
  providedIn: 'root'
})
export class ClaimantService {

  url = "http://localhost:8080/claimantService/api/claimant";
  // url = "http://localhost:8082/api/claimant";



  constructor(private http: HttpClient, private toasterService: ToasterService) { }
  // public getClaimantById(claimantId: number): Observable<ClaimantSO> {
  //   const claimantUrl = `${this.url}/getClaimantById/${claimantId}`;
  //   return this.http.get<ClaimantSO>(claimantUrl)
  // }


  public getClaimantById(claimantId: number): Observable<any> {
    const claimantUrl = `http://localhost:8080/getClaimant/api/claimant/${claimantId}`;
    return this.http.get<any>(claimantUrl);
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



  public registerClaimant(claimantSO: ClaimantSO): Observable<number>   {
    console.log("Inside register claimant api");
    const claimantUrl = `${this.url}/registerClaimant`;
    return this.http.post<number>(claimantUrl, claimantSO);
  }


  updateClaimant(id: number, updateClaimantSO: UpdateClaimantSO): Observable<UpdateClaimantSO> {
    const claimantUrl = `${this.url}/updateClaimant/${id}`;
    return this.http.put<UpdateClaimantSO>(claimantUrl, updateClaimantSO).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "Cannot update profile.");
      return EMPTY;
    }));
  }
}
