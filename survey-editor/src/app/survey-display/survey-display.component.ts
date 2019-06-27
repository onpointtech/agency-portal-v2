import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';
import * as SurveyKo from "survey-knockout";
import * as SurveyCreator from "survey-creator";


import { SurveyData } from 'app/service-objects/survey';
import { SurveyService } from 'app/survey-editor-services/survey.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { delay } from 'q';

@Component({
  selector: 'app-survey-display',
  templateUrl: './survey-display.component.html',
  styles: []
})
export class SurveyDisplayComponent implements OnInit {
  model: any;
  public survey: SurveyData;
  public surveyResponses: any;
  public jsonResponses: any;
  surveyCreator: SurveyCreator.SurveyCreator;
  public jsonFromDB: any;


  constructor(private surveyService: SurveyService) {

  }

  editor: SurveyEditor.SurveyEditor;

  ngOnInit() {
    this.getSurvey(6);
  }

  getSurvey(surveyId: number) {
    return this.surveyService
      .getSurveyById(surveyId)
      //subscribe waits for the get of the database
      .subscribe(
        survey => {
          //jsonFromDB saves the surveyDefinition from the survey
          this.jsonFromDB = survey.surveyDefinition;

          //now the jsonFromDB is loaded, we can now show the survey
          this.showSurvey(this.jsonFromDB);

        }
      );

  }


  storeSurveyResponsesLocally(surveyData: any) {
    this.surveyResponses = surveyData.data;
    this.jsonResponses = surveyData.getPlainData()

  }

  showResponses(surveyData: any): any {
    return surveyData.getPLainData();
  }


  showSurvey(jsonFromDB: any) {
    this.model = new Survey.ReactSurveyModel(jsonFromDB);
    Survey.SurveyNG.render('surveyContainer', { model: this.model });
  }

  showSurveyWithResponses(jsonFromDB: any, model: any) {
    model = new Survey.ReactSurveyModel(jsonFromDB);
    model.data = this.surveyResponses; Survey.SurveyNG.render('surveyContainer', { model: model });
  }

}
