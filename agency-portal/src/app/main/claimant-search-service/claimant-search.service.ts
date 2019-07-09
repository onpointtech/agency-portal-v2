import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClaimantSearchService {

  constructor(private http: HttpClient) { }

  // url = environment.apis.claimantSearch;
  url = 'https://api.opt-dev.optimumui.com/search-service/api/search/claimant';

  public searchClaimant(claimantInfo: string): Observable<any> {
    var claimant: any = {
      "maximumResultCount": 100,
      "searchString": claimantInfo
    }
    return this.http.post<any>(this.url, claimant);
  }
}
