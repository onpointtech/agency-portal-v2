import { NgModule } from '@angular/core';
import { OptLibraryComponent } from './opt-library.component';
import { EditClaimantAddressComponent } from './edit-claimant-address/edit-claimant-address.component';
import { EditClaimantDetailsComponent } from './edit-claimant-details/edit-claimant-details.component';

@NgModule({
  declarations: [OptLibraryComponent, EditClaimantDetailsComponent, EditClaimantAddressComponent],
  imports: [
  ],
  exports: [OptLibraryComponent]
})
export class OptLibraryModule { }
