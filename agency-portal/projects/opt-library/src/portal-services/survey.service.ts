import { Injectable } from '@angular/core';
import { ClaimantSO } from '../service-objects/claimant-so';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from './toaster.service';
import { SurveySO } from '../service-objects/survey-so';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  url = "http://localhost:8080/api/survey";

  constructor(private http: HttpClient, private toasterService: ToasterService) { }

  public createSurvey(surveySO: SurveySO): any{
    const surveyUrl = `${this.url}/createSurvey/`;
    return this.http.post(surveyUrl, surveySO).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "Error in posting the survey");
      return EMPTY;
    }))
      .toPromise()
      .then(this.extractData);
  }

  public getSurveyById(surveyId: number): Observable<SurveySO>{
    const surveyUrl = `${this.url}/getSurveyById/`;
    return this.http.get<SurveySO>(surveyUrl)

  }

  public updateSurvey(surveyId: number, updateSurveySO: SurveySO): any{
    const surveyUrl = `${this.url}/updateSurvey/`;
    return this.http.put<SurveySO>(surveyUrl, updateSurveySO).pipe(catchError((err: any) => {
      this.toasterService.danger("ERROR", "Cannot update survey.");
      return EMPTY;
    }));
  }

  public extractData(res: Response) {
    this.toasterService.success("Success!", "Survey has been registered");
    console.log(res);
  }

  public handleErrorPromise(error: Response | any) {
    // this.toasterService.danger("ERROR", error);
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
