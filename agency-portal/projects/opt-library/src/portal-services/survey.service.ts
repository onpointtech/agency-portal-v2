import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../service-objects/survey';
import { SurveyResponseSO } from '../service-objects/survey-response-so';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  // url = "http://localhost:8080/surveyService/api/";
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
    console.log("POSTING", survey);
    const claimantUrl = `${this.url}surveyResponse/addResponse`;
    return this.httpClient.post(claimantUrl, survey);
  }

  public getSurvey(surveyName: string, claimantId: number): Observable<SurveyResponseSO> {
    const claimantUrl = `${this.url}survey/getSurvey/${surveyName}/${claimantId}/`;
    return this.httpClient.get<SurveyResponseSO>(claimantUrl);
  }

  public deleteResponse(claimantId : number): any {
    const claimantUrl = `${this.url}surveyResponse/deleteResponse/${claimantId}`;
    return this.httpClient.delete<SurveyResponseSO[]>(claimantUrl).subscribe(() => console.log("Old responses deleted"));
  }

}
