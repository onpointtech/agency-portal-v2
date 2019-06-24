import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey-editor-services/survey.service';
import { Survey } from '../service-objects/survey-so';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  survey: Survey[];
  columnsToDisplay: string[];

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.getAllSurveys();

    this.columnsToDisplay = ['surveyId', 'name'];
  }

  getAllSurveys() {
    this.surveyService.getAllSurveys()
      .subscribe(survey => this.survey = survey);
  }

}
