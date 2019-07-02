//-------------------- BIG FILE LAYOUT HAS THESE --------------------------
// a suggestion for coding standards
// if the team is advanced, you can make a parser to automate documentation

//---------------------------- IMPORT -------------------------------------

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
import { delay } from 'rxjs/internal/operators/delay';

  //---------------------------- COMPONENT -------------------------------------

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  //------------------- INPUT OUTPUT VARIABLES INITIALIZATION --------------------

  @Input() claimantId: number;

  //------------------------ VARIABLES INITIALIZATION ---------------------------
  surveyObject: any;
  surveyResponses: any;
  surveyDefinition: any;
  surveyResponseSO: SurveyResponseSO;
  surveyTitle: string;
  confirmReset: object;

  debug: boolean;
  completeLastPage: boolean;
  editor: SurveyEditor.SurveyEditor;

//-------------------------------- CONSTRUCTOR ---------------------------------
  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService,
    private toasterService: ToasterService,
    private alert: AlertService,
    private router: Router) {

  }

//--------------------------------- NG ON INIT ----------------------------------

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

//-------------------------------- SURVEY FUNCTIONS  ---------------------------------


  getSurvey(surveyName: string, claimantId: number) {
    return this.surveyService
      .getSurvey(surveyName, claimantId)

      //subscribe waits for the getSurvey query to the database
      .subscribe(
        survey => {
          console.log(survey);


          //Saves the title of the survey
          this.surveyTitle = survey.surveyName;

          // ERROR CHECKING AND VALIDATION
          if (survey.surveyResponse != null) {
            //if doesnt return anything saves the responses and parse
            this.surveyResponses = JSON.parse(survey.surveyResponse);
          }
          else {
            console.log("Survey Error","no previous survey response");
          }

        //surveyDefinition saves the surveyDefinition from the survey

          if (survey.surveyDefinition != null) {
            this.surveyDefinition = JSON.parse(survey.surveyDefinition);
          }
          else {
            console.log("Survey Error","No previous survey definition");
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
    //ERROR CHECKING
    if(this.surveyObject != null){
      this.surveyObject.data = this.surveyResponses;
      Survey.SurveyNG.render('surveyContainer', { model: this.surveyObject });
    }
    else{
      console.log("Survey Error", "survey cannot be rendered");
    }

    //updates backend and restes all values there
    this.surveyService.deleteResponse(this.claimantId);
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

    if(this.surveyResponseSO == null){
      console.log("Survey Error","Survey cannot be saved to a service object");

    }

  }

  //DELETE SURVEY RESPONSES
  //used to keep the database only have one response per claimant
  deleteAllSurveyResponses() {
    this.surveyService.deleteResponse(this.claimantId);
  }

  //SENDS THE RESPONSES AS AN HTTP POST
  postSurvey(surveyResponseSO: SurveyResponseSO) {
    this.surveyService.createSurveyResponse(surveyResponseSO).subscribe();
  }



//RESETS SURVEY VALUES LOCALLY AND TO THE DB
  resetSurveyValues() {
    //this only resets local survey values, doesnt update backend
    this.surveyResponses = null;
    this.surveyObject.clear();

    //updates backend and resets all values there
    this.surveyService.deleteResponse(this.claimantId);

  }



  //-------------------------------- BUTTON FUNCTIONS ---------------------------------

  //ALERT MODULE FUNCTION
  confirmToReset() {
    this.resetSurveyValues();
    this.toasterService.danger("Warning", "Your answers have been reset");
    this.router.navigate([`/main/claimant-overview/${this.claimantId}`]);
  }


  // A SPECIAL FUNCTION NEEDS TO BE CALLED TO SET THE ORIGINAL NAV BUTTONS TO HIDE
  hideOriginalButtons() {
    this.surveyObject.showNavigationButtons = false;
    this.surveyObject.render();
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
    this.surveyObject.nextPage();
    this.surveyObject.render();
  }

  prevButton() {
    this.surveyObject.prevPage();
    this.surveyObject.render();
  }

  completeButton() {
    //inside a subscribe because it has to wait for delete to happen before posting
    this.surveyObject.completeText = "Complete Page"
    this.surveyObject.render();

    //
    this.storeResponseAndSend(this.surveyObject);
    this.completeLastPage = this.surveyObject.completeLastPage();

    //redirect on survey submission
    this.router.navigate([`/main/claimant-overview/${this.claimantId}`]);

    //show toaster on success
    this.toasterService.success("Success", "Survey has been submitted to the server");

    //Delete the responses
    this.surveyService.deleteResponse(this.claimantId);

  }

  saveAndExitButton() {
    this.storeResponseAndSend(this.surveyObject);
  }

}
