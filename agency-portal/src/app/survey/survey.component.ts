import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';
import { SurveyService } from '../portal-services/survey.service';
import { ToasterService } from '../portal-services/toaster.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SurveySO } from '../service-objects/survey-so';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styles: []
})
export class SurveyComponent implements OnInit {
  model: any;
  surveySO: SurveySO;
  surveyTitle: any;

  constructor(surveyService: SurveyService, private toasterService: ToasterService){

  }

  editor: SurveyEditor.SurveyEditor;
  
  ngOnInit() {
    var json = {
      questions: [
        {
          type: "radiogroup", name: "car", title: "What car are you driving?", isRequired: true,
          colCount: 4, choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
        },
        {
          type: "radiogroup", name: "car2", title: "What car are you not driving?", isRequired: true,
          colCount: 4, choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
        }
      ]
    };


    this.model = new Survey.ReactSurveyModel(json);
    Survey.SurveyNG.render('surveyContainer', { model: this.model });
  }

  getTitle(surveyData: any, questionNumber: number): string{
    return surveyData.getPlainData()[questionNumber].title;
  }

  getValue(surveyData: any, questionNumber: number): string{
    return surveyData.getPlainData()[questionNumber].data[0].value;
  }


  showModel(surveyData: any){
    console.log(this.getTitle(surveyData,0));
    console.log(this.getValue(surveyData,0));

    console.log(this.getTitle(surveyData,1));
    console.log(this.getValue(surveyData,1));




  }

  // makeModel(surveyData: any){

  // }

  // postModel()
  // {
    
  // }
}
