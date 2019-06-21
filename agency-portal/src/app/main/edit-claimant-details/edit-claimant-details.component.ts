import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClaimantService } from '../../portal-services/claimant.service';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { PortalService } from '../../portal-services/portal.service';
import { ClaimantSO } from '../../service-objects/claimant-so'
import { FormBuilder, FormGroup } from '@angular/forms';
import { GENDERCHOICES, RACECHOICES, ETHNICITYCHOICES, EDUCATIONLEVELCHOICES, LANGUAGEPREFERENCECHOICES } from '../../choices/choices'

@Component({
  selector: 'app-edit-claimant-details',
  templateUrl: './edit-claimant-details.component.html',
  styleUrls: ['./edit-claimant-details.component.css']
})
export class EditClaimantDetailsComponent {

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
      middleInitial: [null],
      homePhone: [null],
      mobilePhone: [null],
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
    this.id = this.portalService.claimantSO.claimantId;
    this.claimantService.updateClaimant(this.id, this.updateClaimant)
      .subscribe(updateClaimant => { this.updateClaimant = updateClaimant });
    this.close();
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }



}
