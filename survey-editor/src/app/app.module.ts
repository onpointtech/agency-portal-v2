import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey.component";
import { SurveyCreatorComponent } from "./survey.creator.component";
import { AppRoutingModule } from './app-routing.module';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { CommonModule } from '../../node_modules/@angular/common';
import { SurveyDisplayComponent } from './survey-display/survey-display.component';

@NgModule({
  declarations: [AppComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    SurveyListComponent,
    SurveyEditComponent,
    SurveyDisplayComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
