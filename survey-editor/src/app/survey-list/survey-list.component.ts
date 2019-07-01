import { Component, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from '../survey-editor-services/survey.service';
import { Survey } from '../service-objects/survey-so';
import { MatSort } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  survey: Survey[];
  columnsToDisplay: string[];

  @ViewChild(MatSort, null) sort: MatSort;

  constructor( private surveyService: SurveyService) { }

  ngOnInit() {
    this.getAllSurveys();
    this.columnsToDisplay = ['surveyId', 'name']
  }

  getAllSurveys() {
    this.surveyService.getAllSurveys()
      .subscribe(survey => {
        this.survey = survey;
      });
  }

}
