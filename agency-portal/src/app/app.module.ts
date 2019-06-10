import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PageOneComponent } from './main/page-one/page-one.component';
import { PageTwoComponent } from './main/page-two/page-two.component';
import { HomeComponent } from './main/home/home.component';
import { ClaimantSearchComponent } from './main/claimant-search/claimant-search.component';
import { ClaimantOverviewComponent } from './main/claimant-overview/claimant-overview.component';
import { ClaimantProfileComponent } from './main/claimant-profile/claimant-profile.component';
import { ClaimantRegistrationComponent } from './main/claimant-registration/claimant-registration.component';
import { ClaimComponent } from './main/claim/claim.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    FooterComponent,
    PageOneComponent,
    PageTwoComponent,
    HomeComponent,
    ClaimantSearchComponent,
    ClaimantOverviewComponent,
    ClaimantProfileComponent,
    ClaimantRegistrationComponent,
    ClaimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toastr-top-center",
      closeButton: true,
      disableTimeOut: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
