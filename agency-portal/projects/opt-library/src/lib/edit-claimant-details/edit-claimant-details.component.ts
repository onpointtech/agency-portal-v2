import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GENDERCHOICES, RACECHOICES, ETHNICITYCHOICES, EDUCATIONLEVELCHOICES, LANGUAGEPREFERENCECHOICES } from '../../choices/choices';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ClaimantService } from '../../portal-services/claimant.service';
import { PortalService } from '../../portal-services/portal.service';

@Component({
  selector: 'opt-edit-claimant-details',
  templateUrl: './edit-claimant-details.component.html',
  styles: []
})
export class EditClaimantDetailsComponent implements OnInit {
  @Input() input;
  id: number;
  updateClaimant = new UpdateClaimantSO();
  claimantProfileCopy =  new ClaimantSO();
  profileForm: FormGroup;
  genderChoices = GENDERCHOICES;
  raceChoices = RACECHOICES;
  ethnicityChoices = ETHNICITYCHOICES;
  educationLevelChoices = EDUCATIONLEVELCHOICES;
  languagePreferenceChoices = LANGUAGEPREFERENCECHOICES;
  debug = false;

  constructor(public activeModal: NgbActiveModal, private claimantService: ClaimantService, private portalService: PortalService, private fb: FormBuilder) { }

  ngOnInit() {
    this.claimantProfileCopy = this.portalService.claimantSO;

    this.updateClaimant = {
      middleInitial: null,
      homePhone: null,
      mobilePhone: null,
      languagePreference: null,
      educationLevel: null,
      gender: null,
      race: null,
      ethnicity: null,
      ivrPin: null,
      documentDeliveryPreference: null,
      lastInsertUpdateTS: null,
      lastInsertUpdateBy: null,
      address: null,
    };

    this.profileForm = this.fb.group({
      ssn: [null],
      alternateClaimantId: [null],    
      firstName: [null,Validators.minLength(1)],
      lastName: [null,Validators.minLength(1)],      
      middleInitial: [null,Validators.minLength(1)],
      homePhone: [null,Validators.minLength(1)],
      mobilePhone: [null],

      //There is no way they can choose null, so no validations are needed
      languagePreference: [null],
      gender: [null],
      educationLevel: [null],
      race: [null],
      ethnicity: [null],
    });
  }

  close() {
    this.activeModal.close('Close click');
  }

  updateClaimantDetails() {
    this.updateClaimant = {
      middleInitial: this.claimantProfileCopy.middleInitial,
      homePhone: this.claimantProfileCopy.homePhone,
      mobilePhone: this.claimantProfileCopy.mobilePhone,
      languagePreference: this.claimantProfileCopy.languagePreference,
      gender: this.claimantProfileCopy.gender,
      educationLevel: this.claimantProfileCopy.educationLevel,
      race: this.claimantProfileCopy.race,
      ethnicity: this.claimantProfileCopy.ethnicity,
      ivrPin: null,
      documentDeliveryPreference: null,
      lastInsertUpdateTS: null,
      lastInsertUpdateBy: null,
      address: null,
    }



    this.id = this.portalService.claimantSO.claimantId;
    this.claimantService.updateClaimant(this.id, this.updateClaimant)
      .subscribe(updateClaimant => { this.updateClaimant = updateClaimant });
    this.close();
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  
}
