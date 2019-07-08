/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { GENDERCHOICES, RACECHOICES, ETHNICITYCHOICES, EDUCATIONLEVELCHOICES, LANGUAGEPREFERENCECHOICES } from '../../choices/choices';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ClaimantService } from '../../portal-services/claimant.service';
import { PortalService } from '../../portal-services/portal.service';
export class EditClaimantDetailsComponent {
    /**
     * @param {?} activeModal
     * @param {?} claimantService
     * @param {?} portalService
     * @param {?} fb
     */
    constructor(activeModal, claimantService, portalService, fb) {
        this.activeModal = activeModal;
        this.claimantService = claimantService;
        this.portalService = portalService;
        this.fb = fb;
        this.updateClaimant = new UpdateClaimantSO();
        this.claimantProfileCopy = new ClaimantSO();
        this.claimantProfileEdit = new ClaimantSO();
        this.genderChoices = GENDERCHOICES;
        this.raceChoices = RACECHOICES;
        this.ethnicityChoices = ETHNICITYCHOICES;
        this.educationLevelChoices = EDUCATIONLEVELCHOICES;
        this.languagePreferenceChoices = LANGUAGEPREFERENCECHOICES;
        this.debug = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.claimantProfileCopy = {
            claimantId: this.portalService.claimantSO.claimantId,
            ssn: this.portalService.claimantSO.ssn,
            dateOfBirth: this.portalService.claimantSO.dateOfBirth,
            firstName: this.portalService.claimantSO.firstName,
            middleInitial: this.portalService.claimantSO.middleInitial,
            lastName: this.portalService.claimantSO.lastName,
            homePhone: this.portalService.claimantSO.homePhone,
            mobilePhone: this.portalService.claimantSO.mobilePhone,
            languagePreference: this.portalService.claimantSO.languagePreference,
            educationLevel: this.portalService.claimantSO.educationLevel,
            gender: this.portalService.claimantSO.gender,
            race: this.portalService.claimantSO.race,
            ethnicity: this.portalService.claimantSO.ethnicity,
            lastInsertUpdateTS: this.portalService.claimantSO.lastInsertUpdateTS,
            lastInsertUpdateBy: this.portalService.claimantSO.lastInsertUpdateBy,
            ivrPin: this.portalService.claimantSO.ivrPin,
            documentDeliveryPreference: this.portalService.claimantSO.documentDeliveryPreference,
            address: this.portalService.claimantSO.address,
            email: this.portalService.claimantSO.email,
            preferredOccupation: this.portalService.claimantSO.preferredOccupation,
            alternateClaimantId: this.portalService.claimantSO.alternateClaimantId
        };
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
            firstName: [null, Validators.minLength(1)],
            lastName: [null, Validators.minLength(1)],
            middleInitial: [
                null,
                Validators.compose([
                    Validators.minLength(1),
                    Validators.maxLength(1),
                    Validators.required,
                    Validators.pattern("[a-zA-z]*")
                ])
            ],
            homePhone: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.maxLength(10),
                    Validators.pattern("[0-9]*")
                ])
            ],
            mobilePhone: [
                null,
                Validators.compose([
                    Validators.maxLength(10),
                    Validators.pattern("[0-9]*")
                ])
            ],
            //There is no way they can choose null, so no validations are needed
            languagePreference: [null],
            gender: [null],
            educationLevel: [null],
            race: [null],
            ethnicity: [null],
        });
    }
    /**
     * @return {?}
     */
    close() {
        this.activeModal.close('Close click');
    }
    /**
     * @return {?}
     */
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
        };
        this.id = this.portalService.claimantSO.claimantId;
        this.close();
        return this.claimantService.updateClaimant(this.id, this.updateClaimant)
            .subscribe((/**
         * @param {?} updateClaimant
         * @return {?}
         */
        updateClaimant => {
            this.updateClaimant = updateClaimant;
            console.log(this.claimantProfileCopy);
            this.portalService.claimantSO = this.claimantProfileCopy;
            console.log(this.portalService.claimantSO);
        }));
    }
    /**
     * @param {?} c1
     * @param {?} c2
     * @return {?}
     */
    compareFn(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
EditClaimantDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'opt-edit-claimant-details',
                template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n\r\n      <!-- SSN and Alternate ClaimantID -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            SSN:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.ssn\" formControlName=\"ssn\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.ssn}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.ssn content: {{claimantProfileCopy.ssn}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Alternate ClaimantID:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.alternateClaimantId\"\r\n              formControlName=\"alternateClaimantId\" readonly=\"readonly\"\r\n              placeholder=\"{{claimantProfileCopy.alternateClaimantId}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.alternateClaimantId content: {{claimantProfileCopy.alternateClaimantId}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- First Name and Last Name -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            First Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.firstName\" formControlName=\"firstName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.firstName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.firstName content: {{claimantProfileCopy.firstName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Last Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.lastName\" formControlName=\"lastName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.lastName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.lastName content: {{claimantProfileCopy.lastName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Middle Initial and Home Phone -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Middle Initial:\r\n          </label>\r\n          <div [class]=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <input [class]=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched ? 'edit_field error': 'edit_field'\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.middleInitial\"\r\n              formControlName=\"middleInitial\" [placeholder] = \"profileForm.controls['middleInitial'].invalid? '(Required)' : '' \">\r\n\r\n            <span *ngIf = \"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched\"\r\n              class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n              aria-hidden = \"true\">\r\n            </span>\r\n\r\n              <div class = \"text-danger\">\r\n                  <val-errors controlName = \"middleInitial\">\r\n                    <ng-template valError = \"maxlength\">\r\n                      <p class = \"ng-scope\">\r\n                        <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                        Middle Initial can only have a maximum of 1 letter\r\n                      </p>\r\n                    </ng-template>\r\n      \r\n                    <ng-template valError = \"pattern\">\r\n                      <p class = \"ng-scope\">\r\n                        <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                        Only a letter can be entered as a middle initial\r\n                      </p>\r\n                    </ng-template>\r\n                  </val-errors>\r\n                </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"homePhone\" class=\"col-xs-12 head control-label\">\r\n            <span class = \"text-danger\">*</span>Home Phone:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['homePhone'].invalid? '(000) 000-000 (Required)' : '' \"\r\n            [(ngModel)] = \"claimantProfileCopy.homePhone\"\r\n            formControlName = \"homePhone\"\r\n            mask = \"(000) 000-0000\">\r\n          </div>\r\n\r\n          <div class = \"text-danger\">\r\n              <val-errors controlName = \"homePhone\">\r\n                <ng-template valError = \"pattern\">\r\n                  <p class = \"ng-scope\">\r\n                    <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                    Only numbers are allowed to be inputted in this field.\r\n                  </p>\r\n                </ng-template>\r\n              </val-errors>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Mobile Phone  & Language Preference div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"mobilePhone\" class=\"col-xs-12 head control-label\">Mobile Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type = \"text\"\r\n            class = \"form-control edit_field\"\r\n            [(ngModel)] = \"claimantProfileCopy.mobilePhone\"\r\n            formControlName = \"mobilePhone\"\r\n            placeholder = \"(000) 000-000\"\r\n            mask = \"(000) 000-0000\">\r\n          </div>\r\n\r\n          <div class = \"text-danger\">\r\n              <val-errors controlName = \"mobilePhone\">\r\n                <ng-template valError = \"pattern\">\r\n                  <p class = \"ng-scope\">\r\n                    <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                    Only numbers are allowed to be inputted in this field.\r\n                  </p>\r\n                </ng-template>\r\n              </val-errors>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Language Preference:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"languagePreference\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.languagePreference\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.languagePreference}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of languagePreferenceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['languagePreference'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Language Preference.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Education Level & Gender div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Education Level:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"educationLevel\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.educationLevel\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.educationLevel}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of educationLevelChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['educationLevel'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Education Level.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Gender:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"gender\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.gender\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.gender}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of genderChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['gender'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Gender.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Race & Ethnicity div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Race:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"race\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.race\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.race}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of raceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['race'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Race.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Ethnicity:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"ethnicity\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.ethnicity\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.ethnicity}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of ethnicityChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['ethnicity'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Ethnicity.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type = \"submit\" class=\"btn btn-primary\"  (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
            }] }
];
/** @nocollapse */
EditClaimantDetailsComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: ClaimantService },
    { type: PortalService },
    { type: FormBuilder }
];
EditClaimantDetailsComponent.propDecorators = {
    input: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.input;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.id;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.updateClaimant;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.claimantProfileCopy;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.claimantProfileEdit;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.profileForm;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.genderChoices;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.raceChoices;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.ethnicityChoices;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.educationLevelChoices;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.languagePreferenceChoices;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.debug;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.newProfileForm;
    /** @type {?} */
    EditClaimantDetailsComponent.prototype.activeModal;
    /**
     * @type {?}
     * @private
     */
    EditClaimantDetailsComponent.prototype.claimantService;
    /**
     * @type {?}
     * @private
     */
    EditClaimantDetailsComponent.prototype.portalService;
    /**
     * @type {?}
     * @private
     */
    EditClaimantDetailsComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtZGV0YWlscy9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBT3JFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7SUFldkMsWUFBbUIsV0FBMkIsRUFBVSxlQUFnQyxFQUFVLGFBQTRCLEVBQVUsRUFBZTtRQUFwSSxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFadkosbUJBQWMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDeEMsd0JBQW1CLEdBQUksSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBSSxJQUFJLFVBQVUsRUFBRSxDQUFD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QUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQU8sRUFBRSxFQUFPO1FBQ3hCLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2hELENBQUM7OztZQTVJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsbXprQkFBcUQ7YUFFdEQ7Ozs7WUFaUSxjQUFjO1lBS2QsZUFBZTtZQUNmLGFBQWE7WUFMRixXQUFXOzs7b0JBYTVCLEtBQUs7Ozs7SUFBTiw2Q0FBZTs7SUFDZiwwQ0FBVzs7SUFDWCxzREFBd0M7O0lBQ3hDLDJEQUF3Qzs7SUFDeEMsMkRBQXdDOztJQUN4QyxtREFBdUI7O0lBQ3ZCLHFEQUE4Qjs7SUFDOUIsbURBQTBCOztJQUMxQix3REFBb0M7O0lBQ3BDLDZEQUE4Qzs7SUFDOUMsaUVBQXNEOztJQUN0RCw2Q0FBYzs7SUFDZCxzREFBMEI7O0lBRWQsbURBQWtDOzs7OztJQUFFLHVEQUF3Qzs7Ozs7SUFBRSxxREFBb0M7Ozs7O0lBQUUsMENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBHRU5ERVJDSE9JQ0VTLCBSQUNFQ0hPSUNFUywgRVRITklDSVRZQ0hPSUNFUywgRURVQ0FUSU9OTEVWRUxDSE9JQ0VTLCBMQU5HVUFHRVBSRUZFUkVOQ0VDSE9JQ0VTIH0gZnJvbSAnLi4vLi4vY2hvaWNlcy9jaG9pY2VzJztcclxuaW1wb3J0IHsgVXBkYXRlQ2xhaW1hbnRTTyB9IGZyb20gJy4uLy4uL3NlcnZpY2Utb2JqZWN0cy91cGRhdGUtY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL2NsYWltYW50LXNvJztcclxuaW1wb3J0IHsgQ2xhaW1hbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9ydGFsLXNlcnZpY2VzL2NsYWltYW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9ydGFsLXNlcnZpY2VzL3BvcnRhbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3B0LWVkaXQtY2xhaW1hbnQtZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtY2xhaW1hbnQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdENsYWltYW50RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW5wdXQ7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB1cGRhdGVDbGFpbWFudCA9IG5ldyBVcGRhdGVDbGFpbWFudFNPKCk7XHJcbiAgY2xhaW1hbnRQcm9maWxlQ29weSA9ICBuZXcgQ2xhaW1hbnRTTygpO1xyXG4gIGNsYWltYW50UHJvZmlsZUVkaXQgPSAgbmV3IENsYWltYW50U08oKTtcclxuICBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG4gIGdlbmRlckNob2ljZXMgPSBHRU5ERVJDSE9JQ0VTO1xyXG4gIHJhY2VDaG9pY2VzID0gUkFDRUNIT0lDRVM7XHJcbiAgZXRobmljaXR5Q2hvaWNlcyA9IEVUSE5JQ0lUWUNIT0lDRVM7XHJcbiAgZWR1Y2F0aW9uTGV2ZWxDaG9pY2VzID0gRURVQ0FUSU9OTEVWRUxDSE9JQ0VTO1xyXG4gIGxhbmd1YWdlUHJlZmVyZW5jZUNob2ljZXMgPSBMQU5HVUFHRVBSRUZFUkVOQ0VDSE9JQ0VTO1xyXG4gIGRlYnVnID0gZmFsc2U7XHJcbiAgbmV3UHJvZmlsZUZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCwgcHJpdmF0ZSBjbGFpbWFudFNlcnZpY2U6IENsYWltYW50U2VydmljZSwgcHJpdmF0ZSBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5ID0ge1xyXG4gICAgICBjbGFpbWFudElkOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5jbGFpbWFudElkLFxyXG4gICAgICBzc246IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLnNzbixcclxuICAgICAgZGF0ZU9mQmlydGg6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmRhdGVPZkJpcnRoLFxyXG4gICAgICBmaXJzdE5hbWU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmZpcnN0TmFtZSxcclxuICAgICAgbWlkZGxlSW5pdGlhbDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ubWlkZGxlSW5pdGlhbCxcclxuICAgICAgbGFzdE5hbWU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmxhc3ROYW1lLFxyXG4gICAgICBob21lUGhvbmU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmhvbWVQaG9uZSxcclxuICAgICAgbW9iaWxlUGhvbmU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLm1vYmlsZVBob25lLFxyXG4gICAgICBsYW5ndWFnZVByZWZlcmVuY2U6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmxhbmd1YWdlUHJlZmVyZW5jZSxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmVkdWNhdGlvbkxldmVsLFxyXG4gICAgICBnZW5kZXI6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmdlbmRlcixcclxuICAgICAgcmFjZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ucmFjZSxcclxuICAgICAgZXRobmljaXR5OiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5ldGhuaWNpdHksXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ubGFzdEluc2VydFVwZGF0ZVRTLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlQnk6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmxhc3RJbnNlcnRVcGRhdGVCeSxcclxuICAgICAgaXZyUGluOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5pdnJQaW4sXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5kb2N1bWVudERlbGl2ZXJ5UHJlZmVyZW5jZSxcclxuICAgICAgYWRkcmVzczogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzcyxcclxuICAgICAgZW1haWw6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmVtYWlsLFxyXG4gICAgICBwcmVmZXJyZWRPY2N1cGF0aW9uOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5wcmVmZXJyZWRPY2N1cGF0aW9uLFxyXG4gICAgICBhbHRlcm5hdGVDbGFpbWFudElkOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hbHRlcm5hdGVDbGFpbWFudElkXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IG51bGwsXHJcbiAgICAgIGhvbWVQaG9uZTogbnVsbCxcclxuICAgICAgbW9iaWxlUGhvbmU6IG51bGwsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IG51bGwsXHJcbiAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgcmFjZTogbnVsbCxcclxuICAgICAgZXRobmljaXR5OiBudWxsLFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIHNzbjogW251bGxdLFxyXG4gICAgICAgIGFsdGVybmF0ZUNsYWltYW50SWQ6IFtudWxsXSwgICAgXHJcbiAgICAgICAgZmlyc3ROYW1lOiBbbnVsbCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV0sXHJcbiAgICAgICAgbGFzdE5hbWU6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSwgICAgICBcclxuICAgICAgICBtaWRkbGVJbml0aWFsOiBbXHJcbiAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMSksXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEpLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oXCJbYS16QS16XSpcIilcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBob21lUGhvbmU6IFtcclxuICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCksXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybihcIlswLTldKlwiKVxyXG4gICAgICAgICAgXSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1vYmlsZVBob25lOiBbXHJcbiAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTApLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oXCJbMC05XSpcIilcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgLy9UaGVyZSBpcyBubyB3YXkgdGhleSBjYW4gY2hvb3NlIG51bGwsIHNvIG5vIHZhbGlkYXRpb25zIGFyZSBuZWVkZWRcclxuICAgICAgICBsYW5ndWFnZVByZWZlcmVuY2U6IFtudWxsXSxcclxuICAgICAgICBnZW5kZXI6IFtudWxsXSxcclxuICAgICAgICBlZHVjYXRpb25MZXZlbDogW251bGxdLFxyXG4gICAgICAgIHJhY2U6IFtudWxsXSxcclxuICAgICAgICBldGhuaWNpdHk6IFtudWxsXSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgnQ2xvc2UgY2xpY2snKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNsYWltYW50RGV0YWlscygpIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5taWRkbGVJbml0aWFsLFxyXG4gICAgICBob21lUGhvbmU6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5ob21lUGhvbmUsXHJcbiAgICAgIG1vYmlsZVBob25lOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkubW9iaWxlUGhvbmUsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5Lmxhbmd1YWdlUHJlZmVyZW5jZSxcclxuICAgICAgZ2VuZGVyOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuZ2VuZGVyLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5LmVkdWNhdGlvbkxldmVsLFxyXG4gICAgICByYWNlOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkucmFjZSxcclxuICAgICAgZXRobmljaXR5OiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuZXRobmljaXR5LFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogbnVsbCxcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHRoaXMuaWQgPSB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5jbGFpbWFudElkO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhaW1hbnRTZXJ2aWNlLnVwZGF0ZUNsYWltYW50KHRoaXMuaWQsIHRoaXMudXBkYXRlQ2xhaW1hbnQpXHJcbiAgICAuc3Vic2NyaWJlKHVwZGF0ZUNsYWltYW50ID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHVwZGF0ZUNsYWltYW50O1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkpO1xyXG4gICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTyA9IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlRm4oYzE6IGFueSwgYzI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGMxICYmIGMyID8gYzEuaWQgPT09IGMyLmlkIDogYzEgPT09IGMyO1xyXG4gIH1cclxuICBcclxufVxyXG4iXX0=