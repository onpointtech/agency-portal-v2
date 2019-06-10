import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'node_modules/rxjs';
import { ClaimantSO } from '../service-objects/claimant-so';
import { UpdateClaimantSO } from '../service-objects/update-claimant-so';


@Injectable({
  providedIn: 'root'
})
export class ClaimantService {

  constructor(private http: HttpClient) { }

  private claimantUrl = 'http://localhost:8080'

  getClaimantById(id: number): Observable<ClaimantSO> {
    const url = `$(this.claimantUrl)/$(id)`;
    return this.http.get<ClaimantSO>(url)
  }

  getAllClaimants(): Observable<ClaimantSO[]> {
    return this.http.get<ClaimantSO[]>(this.claimantUrl)
  }

  registerClaimant(claimantSO:ClaimantSO): Observable<number> {
    return this.http.post<number>(this.claimantUrl, claimantSO)
  }

  updateClaimantPayment() {

  }

  updateClaimant(id: number, updateClaimantSO: UpdateClaimantSO): Observable<UpdateClaimantSO> {
    const url = `$(this.claimantUrl)/$(id)`;
    return this.http.put<UpdateClaimantSO>(url, updateClaimantSO)
  }
}
