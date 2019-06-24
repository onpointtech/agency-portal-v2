import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Survey } from '../service-objects/survey';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  url = "http://localhost:8080/api/survey";

  constructor(private httpClient: HttpClient) { }

  public createSurvey(survey: Survey): any {
    const claimantUrl = `${this.url}/createSurvey`;
    return this.httpClient.post(claimantUrl, survey);
  }
}
