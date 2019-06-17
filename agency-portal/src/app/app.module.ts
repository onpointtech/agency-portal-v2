import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { OptimumComponentsModule } from 'optimum-components';
import { NgxMaskModule, MaskPipe } from 'ngx-mask';


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
import { OptSsnPipe } from './custom-pipes/opt-ssn.pipe';
import { OptPhonePipe } from './custom-pipes/opt-phone.pipe';
import { OptAddressPipe } from './custom-pipes/opt-address.pipe';
import { OptimumFormComponent } from './main/optimum-form/optimum-form.component';
import { OptDatePipe } from './custom-pipes/opt-date.pipe';

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
    OptSsnPipe,
    OptPhonePipe,
    OptAddressPipe,
    OptDatePipe,
    OptimumFormComponent,
  ],
  imports: [
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
    OptimumComponentsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [DatePipe, MaskPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
