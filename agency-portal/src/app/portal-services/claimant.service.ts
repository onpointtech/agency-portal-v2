import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
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

  getClaimantById(claimantId: number): Observable<ClaimantSO> {
    const claimantUrl = `http://localhost:8080/api/claimant/getClaimantById/${claimantId}`;
    return this.http.get<ClaimantSO>(claimantUrl)
  }

  getAllClaimants(): Observable<ClaimantSO[]> {
    const claimantUrl = 'http://localhost:8080/api/claimant/getAllClaimants';
    return this.http.get<ClaimantSO[]>(claimantUrl).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
      return EMPTY;
    }));
  }

  searchClaimant(claimantInfo: string): Observable<ClaimantSO[]> {
    const claimantUrl = `http://localhost:8080/api/claimant/searchClaimant/${claimantInfo}`;
    return this.http.get<ClaimantSO[]>(claimantUrl).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
      return EMPTY;
    }));
  } 

  // registerClaimant(claimantSO:ClaimantSO): Observable<number> {
  //   return this.http.post<number>(this.claimantUrl, claimantSO)
  // }

  // updateClaimantPayment() {

  // }

  // updateClaimant(id: number, updateClaimantSO: UpdateClaimantSO): Observable<UpdateClaimantSO> {
  //   const url = `$(this.claimantUrl)/$(id)`;
  //   return this.http.put<UpdateClaimantSO>(url, updateClaimantSO)
  // }
}
