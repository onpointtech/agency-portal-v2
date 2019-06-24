import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { SurveyCreatorComponent } from './survey.creator.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

const routes: Routes = [
  {
     path:'',
     component:SurveyCreatorComponent
  },
  {
    path:'survey-list',
    component:SurveyListComponent
 },
  {
     path:'**',
     redirectTo:'',
     pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
