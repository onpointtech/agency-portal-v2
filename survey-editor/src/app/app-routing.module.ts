import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyCreatorComponent } from './survey.creator.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { SurveyDisplayComponent } from './survey-display/survey-display.component';

const routes: Routes = [
  {
     path:'',
     redirectTo:'survey-creator',
     pathMatch:'full'
  },
  {
    path:'survey-creator',
    component: SurveyCreatorComponent
  },
  {
     path:'survey-list',
     component: SurveyListComponent
  },
  {
    path:'survey-edit/:surveyId',
    component: SurveyEditComponent
  },
  {
    path:'survey-display',
    component: SurveyDisplayComponent
  },
  {
     path:'**',
     redirectTo:'survey-creator',
     pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

