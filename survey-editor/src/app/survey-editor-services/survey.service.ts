import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Survey } from '../service-objects/survey';
import { Observable } from 'rxjs';
import { SurveyResponseSO } from 'app/service-objects/survey-response-so';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  url = "http://localhost:8081/api/";

  constructor(private httpClient: HttpClient) { }

  public createSurvey(survey: Survey): any {
    const claimantUrl = `${this.url}survey/addUpdateSurvey`;
    return this.httpClient.post(claimantUrl, survey);
  }

  public getAllSurveys(): Observable<Survey[]> {
    const claimantUrl = `${this.url}survey/getAllSurveys`;
    return this.httpClient.get<Survey[]>(claimantUrl);
  }

  public getSurveyById(surveyId: number): Observable<Survey> {
    const claimantUrl = `${this.url}survey/getSurveyById/${surveyId}`;
    return this.httpClient.get<Survey>(claimantUrl);
  }

  public createSurveyResponse(survey: SurveyResponseSO): any {
    const claimantUrl = `${this.url}surveyResponse/addResponse`;
    return this.httpClient.post(claimantUrl, survey);
  }
}
