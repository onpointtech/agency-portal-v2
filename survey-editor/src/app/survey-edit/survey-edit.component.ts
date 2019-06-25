import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as SurveyKo from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SurveyService } from '../survey-editor-services/survey.service';
import { Survey } from '../service-objects/survey';

widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);

var CkEditor_ModalEditor = {
  afterRender: function(modalEditor, htmlElement) {
    var editor = window["CKEDITOR"].replace(htmlElement);
    editor.on("change", function() {
      modalEditor.editingValue = editor.getData();
    });
    editor.setData(modalEditor.editingValue);
  },
  destroy: function(modalEditor, htmlElement) {
    var instance = window["CKEDITOR"].instances[htmlElement.id];
    if (instance) {
      instance.removeAllListeners();
      window["CKEDITOR"].remove(instance);
    }
  }
};
SurveyCreator.SurveyPropertyModalEditor.registerCustomWidget(
  "html",
  CkEditor_ModalEditor
);

@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {
  survey: Survey;
  surveyCreator: SurveyCreator.SurveyCreator;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  surveyId: number;

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyId = Number(this.route.snapshot.paramMap.get('surveyId'));
    console.log(this.surveyId)
    this.getSurvey(this.surveyId);


  }

  getSurvey(surveyId: number) {
    return this.surveyService
    .getSurveyById(surveyId)
    .subscribe(
      survey => {
        SurveyKo.JsonObject.metaData.addProperty(
          "questionbase",
          "popupdescription:text"
        );
        SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");

        let options = { showEmbededSurveyTab: true, generateValidJSON: true };
        this.surveyCreator = new SurveyCreator.SurveyCreator(
          "surveyCreatorContainer1",
          options
        );
        this.surveyCreator.text = survey.surveyDefinition;
        this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
      }
    );
  }

  saveMySurvey = () => {
    var parsed = JSON.parse(this.surveyCreator.text)
    this.survey.name = parsed.title
    this.survey.surveyDefinition = JSON.stringify(parsed);
    this.surveyService
      .createSurvey(this.survey)
      .subscribe(id => console.log(id));
  };

}
