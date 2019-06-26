import { NgModule } from '@angular/core';
import { ValdemortModule } from 'ngx-valdemort';
import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OptLibraryComponent } from './opt-library.component';
import { EditClaimantAddressComponent } from './edit-claimant-address/edit-claimant-address.component';
import { EditClaimantDetailsComponent } from './edit-claimant-details/edit-claimant-details.component';

@NgModule({
  declarations: [
    OptLibraryComponent,
    EditClaimantDetailsComponent, 
    EditClaimantAddressComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ValdemortModule
  ],
  exports: [OptLibraryComponent]
})
export class OptLibraryModule { }
