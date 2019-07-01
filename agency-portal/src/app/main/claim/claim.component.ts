//import angular modules
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import external modules
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';

//import user made modules
//import components

//import services
import { ToasterService } from 'projects/opt-library/src/portal-services/toaster.service';
import { AlertService } from 'projects/opt-library/src/portal-services/alert.service';

//import models or constants
import { SURVEY_TITLE, SURVEY_DEFINITION } from '../../choices/surveyQuestions';
import { SurveyService } from 'projects/opt-library/src/portal-services/survey.service';
import { SurveyResponseSO } from 'projects/opt-library/src/service-objects/survey-response-so';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  @Input() claimantId: number;

  //variables initialization
  surveyObject: any;
  surveyResponses: any;
  surveyDefinition: any;
  surveyResponseSO: SurveyResponseSO;
  surveyTitle: string;
  confirmReset: object;

  debug: boolean;
  completeLastPage: boolean;
  editor: SurveyEditor.SurveyEditor;

  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService,
    private toasterService: ToasterService,
    private alert: AlertService,
    private router: Router) {

  }


  ngOnInit() {
    //set sweetAlert
    this.confirmReset = {
      type: 'info',
      title: "Info",
      text: "Are you sure you want to reset the survey data",
      showCancelButton: true,
      confirmButtonText: 'Reset the survey data',
      cancelButtonText: 'Cancel',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-info',
    }


    //get claimantId from routes
    this.claimantId = Number(this.route
      .snapshot
      .paramMap
      .get('claimantId')
    );
    this.debug = false;

    //check if claimant id was inputted
    console.log("Claimant Id value is ", this.claimantId);


    //get initial survey_title and survey_definition from a file
    this.surveyTitle = SURVEY_TITLE;
    this.surveyDefinition = SURVEY_DEFINITION,


      //Set the completeLastPage to false
      this.completeLastPage = false;


    //gets the survey from the database
    this.getSurvey(SURVEY_TITLE, this.claimantId);
  }



  getSurvey(surveyName: string, claimantId: number) {
    return this.surveyService
      .getSurvey(surveyName, claimantId)

      //subscribe waits for the getSurvey query to the database
      .subscribe(
        survey => {
          console.log(survey);


          //Saves the title of the survey
          this.surveyTitle = survey.surveyName;


          if (survey.surveyResponse != null) {
            //if doesnt return anything saves the responses and parse
            this.surveyResponses = JSON.parse(survey.surveyResponse);
          }
          else {
            console.log("User has no previous survey response");
          }

          if (survey.surveyDefinition != null) {
            //surveyDefinition saves the surveyDefinition from the survey
            this.surveyDefinition = JSON.parse(survey.surveyDefinition);
          }
          else {
            console.log("User has no previous survey definition");
          }

          //now the surveyDefinition is loaded, we can now show the survey
          this.showSurveyWithResponses(this.surveyDefinition);

          //we now can try to hide the original buttons
          this.hideOriginalButtons();

        }
      );

  }

  //RENDER A SURVEY
  showSurveyWithResponses(surveyDefinition: any) {
    this.surveyObject = new Survey.ReactSurveyModel(surveyDefinition);
    this.surveyObject.data = this.surveyResponses;
    Survey.SurveyNG.render('surveyContainer', { model: this.surveyObject });
  }


  //SEND RESPONSES TO BACKEND
  sendResponses() {
    this.saveSurveyToSO(this.claimantId);
    this.postSurvey(this.surveyResponseSO);
    console.log("here in send responses");
  }


  //STORE RESPONSES AND CALL SEND
  storeResponseAndSend(surveyData: any) {
    this.surveyResponses = surveyData.data;
    this.sendResponses();
    console.log("RESPONSES", this.surveyResponses);
    this.toasterService.success("Success", "Survey has been saved!");
  }

  //PUT THE VALUES TO A SERVICE-OBJECT
  saveSurveyToSO(claimantId: number) {
    this.surveyResponseSO = {
      claimantId: claimantId,
      responseId: null,
      surveyName: this.surveyTitle,
      surveyDefinition: JSON.stringify(this.surveyDefinition),
      surveyResponse: JSON.stringify(this.surveyResponses),
    }
  }

  //delete survey responses, isn't used
  deleteAllSurveyResponses(){
    this.surveyService.deleteResponse(this.claimantId);
  }

  postSurvey(surveyResponseSO: SurveyResponseSO) {
    this.surveyService.createSurveyResponse(surveyResponseSO).subscribe();
  }


  hideOriginalButtons() {
    this.surveyObject.showNavigationButtons = false;
    this.surveyObject.render();
  }

  // BUTTON FUNCTIONS

  resetSurveyValues() {
    //this only resets local survey values, doesnt update backend
    this.surveyResponses = null;
    this.surveyObject.clear();

    //updates backend and restes all values there
    this.surveyService.deleteResponse(this.claimantId);

  }

  confirmToReset() {
    this.resetSurveyValues();
    this.toasterService.danger("Warning", "Your answers have been reset");
    this.router.navigate([`/main/claimant-overview/${this.claimantId}`]);
  }

  resetButton() {
    this.alert
      .custom(this.confirmReset)
      .then((result) => {
        if (result.value) {
          this.confirmToReset();
        }
      })
  }


  nextButton() {
    // console.log("current page is", this.surveyObject.currentPageNo);
    this.surveyObject.nextPage();
    this.surveyObject.render();
  }

  prevButton() {
    this.surveyObject.prevPage();
    this.surveyObject.render();
  }

  completeButton() {
    //will do this first if it is in a separate function
    this.surveyService.deleteResponse(this.claimantId);


    //inside a subscribe because it has to wait for delete to happen before posting
    this.surveyObject.completeText = "Complete Page"
    this.surveyObject.render();

    this.storeResponseAndSend(this.surveyObject);
    this.completeLastPage = this.surveyObject.completeLastPage();

    //redirect on survey submission
    this.router.navigate([`/main/claimant-overview/${this.claimantId}`]);
    
    //show toaster on success
    this.toasterService.success("Success", "Survey has been submitted to the server");

  }

  saveAndExitButton() {
    this.storeResponseAndSend(this.surveyObject);
  }

}
