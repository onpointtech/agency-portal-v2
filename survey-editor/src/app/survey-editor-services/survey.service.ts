import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Survey } from '../service-objects/survey';
import { Observable } from 'rxjs';
import { SurveyResponseSO } from 'app/service-objects/survey-response-so';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  url = "http://localhost:8081/api/survey";
  urlResponse = "http://localhost:8081/api/surveyResponse";

  constructor(private httpClient: HttpClient) { }

  public createSurvey(survey: Survey): any {
    const claimantUrl = `${this.url}/addUpdateSurvey`;
    return this.httpClient.post(claimantUrl, survey);
  }

  public getAllSurveys(): Observable<Survey[]> {
    const claimantUrl = `${this.url}/getAllSurveys`;
    return this.httpClient.get<Survey[]>(claimantUrl);
  }

  public getSurveyById(surveyId: number): Observable<Survey> {
    const claimantUrl = `${this.url}/getSurveyById/${surveyId}`;
    return this.httpClient.get<Survey>(claimantUrl);
  }

  public createSurveyResponse(survey: SurveyResponseSO): any {
    const claimantUrl = `${this.urlResponse}/addResponse`;
    return this.httpClient.post(claimantUrl, survey);
  }
}
