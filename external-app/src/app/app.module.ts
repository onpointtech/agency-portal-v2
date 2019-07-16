import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SimpleClaimantProfileComponent } from './simple-claimant-profile/simple-claimant-profile.component';
import { EditClaimantDetailsComponent } from './edit-claimant-details/edit-claimant-details.component';
import { EditClaimantAddressComponent } from './edit-claimant-address/edit-claimant-address.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ValdemortModule } from 'ngx-valdemort';

import { NgxMaskModule, MaskPipe } from 'ngx-mask';

import { createCustomElement } from '@angular/elements' ;
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule,  DatePipe } from '@angular/common';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';

import { OptAddressPipe } from 'src/app/custom-pipes/opt-address.pipe';
import { OptDatePipe } from 'src/app/custom-pipes/opt-date.pipe';
import { OptPhonePipe } from 'src/app/custom-pipes/opt-phone.pipe';
import { OptSsnPipe } from 'src/app/custom-pipes/opt-ssn.pipe';

@NgModule({
  declarations: [
    SimpleClaimantProfileComponent,
    EditClaimantAddressComponent,
    EditClaimantDetailsComponent,
    OptAddressPipe,
    OptDatePipe,
    OptPhonePipe,
    OptSsnPipe

  ],
  imports: [
    ValdemortModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-full-width",
      closeButton: true,
      disableTimeOut: true,
      maxOpened: 1,
    }),
    ToastContainerModule,
    NgbModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-info',
    }),
    ReactiveFormsModule,
  ],
  entryComponents: [SimpleClaimantProfileComponent,
    EditClaimantAddressComponent,
    EditClaimantDetailsComponent,
  ],
  providers: [
    NgbActiveModal,
    DatePipe,
    MaskPipe,

  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(injector:Injector) {
    //turn a component into a custom element
    const custom = createCustomElement(SimpleClaimantProfileComponent, {injector: injector});

    //sets the selector for the new custom component
    customElements.define('app-simple-claimant-profile', custom);
  }

  ngDoBootstrap() {}


 }
