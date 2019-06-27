import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';


import { SurveyService } from 'app/survey-editor-services/survey.service';
import { SurveyResponseSO } from 'app/service-objects/survey-response-so';
import { ToasterService } from 'app/toaster.service';

@Component({
  selector: 'app-survey-display',
  templateUrl: './survey-display.component.html',
  styles: []
})
export class SurveyDisplayComponent implements OnInit {
  model: any;
  public surveyResponses: any;
  public jsonResponses: any;
  public surveyDefinition: any;
  public claimantId: number;
  public surveyResponseSO: SurveyResponseSO;
  public surveyTitle: string;

  constructor(private surveyService: SurveyService) {

  }

  editor: SurveyEditor.SurveyEditor;

  ngOnInit() {
    this.getSurvey(3);
    this.claimantId = 1;
  }

  getSurvey(surveyId: number) {
    return this.surveyService
      .getSurveyById(surveyId)
      //subscribe waits for the get of the database
      .subscribe(
        survey => {
          console.log(survey);

          //Saves the title of the survey
          this.surveyTitle = survey.name;

          //surveyDefinition saves the surveyDefinition from the survey
          this.surveyDefinition = survey.surveyDefinition;

          //now the surveyDefinition is loaded, we can now show the survey
          this.showSurvey(this.surveyDefinition);

        }
      );

  }

  sendResponses() {
    this.saveSurveyToSO(1);
    this.postSurvey(this.surveyResponseSO);
  }

  storeSurveyResponsesLocally(surveyData: any) {
    this.surveyResponses = surveyData.data;
    this.jsonResponses = surveyData.getPlainData();
  }

  showResponses(surveyData: any): any {
    return surveyData.getPLainData();
  }


  showSurvey(surveyDefinition: any) {
    this.model = new Survey.ReactSurveyModel(surveyDefinition);
    Survey.SurveyNG.render('surveyContainer', { model: this.model });
  }

  showSurveyWithResponses(surveyDefinition: any, model: any) {
    model = new Survey.ReactSurveyModel(surveyDefinition);
    model.data = this.surveyResponses; Survey.SurveyNG.render('surveyContainer', { model: model });
  }

  saveSurveyToSO(claimantId: number) {
    this.surveyResponseSO = {
      claimantId: claimantId,
      responseId: null,
      surveyName: this.surveyTitle,
      surveyDefinition: JSON.stringify(this.surveyDefinition),
      surveyResponse: JSON.stringify(this.jsonResponses),
    }
  }

  postSurvey(surveyResponseSO: SurveyResponseSO) {
    this.surveyService.createSurveyResponse(surveyResponseSO).subscribe();
  }

}
