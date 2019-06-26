import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { ValdemortModule } from 'ngx-valdemort';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { NgxMaskModule, MaskPipe } from 'ngx-mask';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { ClaimantSearchComponent } from './main/claimant-search/claimant-search.component';
import { ClaimantOverviewComponent } from './main/claimant-overview/claimant-overview.component';
import { ClaimantProfileComponent } from './main/claimant-profile/claimant-profile.component';
import { ClaimantRegistrationComponent } from './main/claimant-registration/claimant-registration.component';
import { ClaimComponent } from './main/claim/claim.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SurveyComponent } from './survey/survey.component';
import { OptLibraryModule } from 'projects/opt-library/src/public-api';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    FooterComponent,
    HomeComponent,
    ClaimantSearchComponent,
    ClaimantOverviewComponent,
    ClaimantProfileComponent,
    ClaimantRegistrationComponent,
    ClaimComponent,
    SurveyComponent,
  ],
  imports: [
    OptLibraryModule,
    ValdemortModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-full-width",
      closeButton: true,
      disableTimeOut: true,
      maxOpened: 1,
    }),
    ToastContainerModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    MatDatepickerModule,
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-info',
    })
  ],
  entryComponents: [],
  providers: [DatePipe, MaskPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
