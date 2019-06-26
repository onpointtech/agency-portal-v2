import { NgModule } from '@angular/core';
import { ValdemortModule } from 'ngx-valdemort';
import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { OptLibraryComponent } from './opt-library.component';
import { EditClaimantAddressComponent } from './edit-claimant-address/edit-claimant-address.component';
import { EditClaimantDetailsComponent } from './edit-claimant-details/edit-claimant-details.component';
import { MaskPipe } from 'ngx-mask';
import { OptSsnPipe } from '../custom-pipes/opt-ssn.pipe';
import { OptPhonePipe } from '../custom-pipes/opt-phone.pipe';
import { OptAddressPipe } from '../custom-pipes/opt-address.pipe';
import { OptDatePipe } from '../custom-pipes/opt-date.pipe';

@NgModule({
  declarations: [
    OptLibraryComponent,
    EditClaimantDetailsComponent, 
    EditClaimantAddressComponent,
    OptSsnPipe,
    OptPhonePipe,
    OptAddressPipe,
    OptDatePipe,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ValdemortModule
  ],
  exports: [
    OptLibraryComponent,
    EditClaimantAddressComponent,
    EditClaimantDetailsComponent,
    OptSsnPipe,
    OptPhonePipe,
    OptAddressPipe,
    OptDatePipe,
  ],
  entryComponents: [EditClaimantDetailsComponent, EditClaimantAddressComponent],
  providers: [DatePipe, MaskPipe]
})
export class OptLibraryModule { }
