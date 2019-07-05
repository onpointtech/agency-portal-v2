import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { SimpleClaimantProfileComponent } from './simple-claimant-profile/simple-claimant-profile.component';
import { createCustomElement } from '@angular/elements' ;

@NgModule({
  declarations: [
    SimpleClaimantProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [SimpleClaimantProfileComponent],
  providers: [],
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
