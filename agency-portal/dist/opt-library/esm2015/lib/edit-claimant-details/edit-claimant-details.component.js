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
            firstName: [null, Validators.minLength(1)],
            lastName: [null, Validators.minLength(1)],
            middleInitial: [null, Validators.minLength(1)],
            homePhone: [null, Validators.minLength(1)],
            mobilePhone: [null],
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
        this.claimantService.updateClaimant(this.id, this.updateClaimant)
            .subscribe((/**
         * @param {?} updateClaimant
         * @return {?}
         */
        updateClaimant => { this.updateClaimant = updateClaimant; }));
        this.close();
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
                template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n\r\n      <!-- SSN and Alternate ClaimantID -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            SSN:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.ssn\" formControlName=\"ssn\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.ssn}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.ssn content: {{claimantProfileCopy.ssn}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Alternate ClaimantID:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.alternateClaimantId\"\r\n              formControlName=\"alternateClaimantId\" readonly=\"readonly\"\r\n              placeholder=\"{{claimantProfileCopy.alternateClaimantId}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.alternateClaimantId content: {{claimantProfileCopy.alternateClaimantId}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- First Name and Last Name -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            First Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.firstName\" formControlName=\"firstName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.firstName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.firstName content: {{claimantProfileCopy.firstName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Last Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.lastName\" formControlName=\"lastName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.lastName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.lastName content: {{claimantProfileCopy.lastName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Middle Initial and Home Phone -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Middle Initial:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"edit_field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.middleInitial\"\r\n              formControlName=\"middleInitial\" placeholder=\"{{claimantProfileCopy.middleInitial}}\">\r\n          </div>\r\n          \r\n          <!-- ERROR, THIS DOESNT SHOW UP FOR SOME REASON   -->\r\n          <span *ngIf=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched\"\r\n            class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n\r\n          <div class=\"text-danger\">\r\n            <val-errors controlName=\"middleInitial\">\r\n              <ng-template valError=\"minlength\">\r\n                <p class=\"ng-scope\">\r\n                  <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid Middle Initial.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.middleInitial content: {{claimantProfileCopy.middleInitial}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"homePhone\" class=\"col-xs-12 head control-label\">Home Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.homePhone\"\r\n              formControlName=\"homePhone\" placeholder=\"{{claimantProfileCopy.homePhone}}\" mask=\"(000) 000-0000\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.homePhone content: {{claimantProfileCopy.homePhone}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Mobile Phone  & Language Preference div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"mobilePhone\" class=\"col-xs-12 head control-label\">Mobile Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.mobilePhone\"\r\n              formControlName=\"mobilePhone\" placeholder=\"{{claimantProfileCopy.mobilePhone}}\" mask=\"(000) 000-0000\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.mobilePhone content: {{claimantProfileCopy.mobilePhone}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Language Preference:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"languagePreference\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.languagePreference\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.languagePreference}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of languagePreferenceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['languagePreference'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Language Preference.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Education Level & Gender div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Education Level:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"educationLevel\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.educationLevel\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.educationLevel}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of educationLevelChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['educationLevel'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Education Level.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Gender:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"gender\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.gender\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.gender}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of genderChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['gender'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Gender.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Race & Ethnicity div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Race:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"race\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.race\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.race}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of raceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['race'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Race.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Ethnicity:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"ethnicity\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.ethnicity\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.ethnicity}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of ethnicityChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['ethnicity'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Ethnicity.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtZGV0YWlscy9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBT3JFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7SUFhdkMsWUFBbUIsV0FBMkIsRUFBVSxlQUFnQyxFQUFVLGFBQTRCLEVBQVUsRUFBZTtRQUFwSSxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFWdkosbUJBQWMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDeEMsd0JBQW1CLEdBQUksSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUV4QyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixnQkFB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LENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQzlELFNBQVM7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQU8sRUFBRSxFQUFPO1FBQ3hCLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2hELENBQUM7OztZQXhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsZ2tqQkFBcUQ7YUFFdEQ7Ozs7WUFaUSxjQUFjO1lBS2QsZUFBZTtZQUNmLGFBQWE7WUFMRixXQUFXOzs7b0JBYTVCLEtBQUs7Ozs7SUFBTiw2Q0FBZTs7SUFDZiwwQ0FBVzs7SUFDWCxzREFBd0M7O0lBQ3hDLDJEQUF3Qzs7SUFDeEMsbURBQXVCOztJQUN2QixxREFBOEI7O0lBQzlCLG1EQUEwQjs7SUFDMUIsd0RBQW9DOztJQUNwQyw2REFBOEM7O0lBQzlDLGlFQUFzRDs7SUFDdEQsNkNBQWM7O0lBRUYsbURBQWtDOzs7OztJQUFFLHVEQUF3Qzs7Ozs7SUFBRSxxREFBb0M7Ozs7O0lBQUUsMENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBHRU5ERVJDSE9JQ0VTLCBSQUNFQ0hPSUNFUywgRVRITklDSVRZQ0hPSUNFUywgRURVQ0FUSU9OTEVWRUxDSE9JQ0VTLCBMQU5HVUFHRVBSRUZFUkVOQ0VDSE9JQ0VTIH0gZnJvbSAnLi4vLi4vY2hvaWNlcy9jaG9pY2VzJztcclxuaW1wb3J0IHsgVXBkYXRlQ2xhaW1hbnRTTyB9IGZyb20gJy4uLy4uL3NlcnZpY2Utb2JqZWN0cy91cGRhdGUtY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL2NsYWltYW50LXNvJztcclxuaW1wb3J0IHsgQ2xhaW1hbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9ydGFsLXNlcnZpY2VzL2NsYWltYW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9ydGFsLXNlcnZpY2VzL3BvcnRhbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3B0LWVkaXQtY2xhaW1hbnQtZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtY2xhaW1hbnQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdENsYWltYW50RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW5wdXQ7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB1cGRhdGVDbGFpbWFudCA9IG5ldyBVcGRhdGVDbGFpbWFudFNPKCk7XHJcbiAgY2xhaW1hbnRQcm9maWxlQ29weSA9ICBuZXcgQ2xhaW1hbnRTTygpO1xyXG4gIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XHJcbiAgZ2VuZGVyQ2hvaWNlcyA9IEdFTkRFUkNIT0lDRVM7XHJcbiAgcmFjZUNob2ljZXMgPSBSQUNFQ0hPSUNFUztcclxuICBldGhuaWNpdHlDaG9pY2VzID0gRVRITklDSVRZQ0hPSUNFUztcclxuICBlZHVjYXRpb25MZXZlbENob2ljZXMgPSBFRFVDQVRJT05MRVZFTENIT0lDRVM7XHJcbiAgbGFuZ3VhZ2VQcmVmZXJlbmNlQ2hvaWNlcyA9IExBTkdVQUdFUFJFRkVSRU5DRUNIT0lDRVM7XHJcbiAgZGVidWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCwgcHJpdmF0ZSBjbGFpbWFudFNlcnZpY2U6IENsYWltYW50U2VydmljZSwgcHJpdmF0ZSBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5ID0gdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U087XHJcblxyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHtcclxuICAgICAgbWlkZGxlSW5pdGlhbDogbnVsbCxcclxuICAgICAgaG9tZVBob25lOiBudWxsLFxyXG4gICAgICBtb2JpbGVQaG9uZTogbnVsbCxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogbnVsbCxcclxuICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICByYWNlOiBudWxsLFxyXG4gICAgICBldGhuaWNpdHk6IG51bGwsXHJcbiAgICAgIGl2clBpbjogbnVsbCxcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBhZGRyZXNzOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnByb2ZpbGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHNzbjogW251bGxdLFxyXG4gICAgICBhbHRlcm5hdGVDbGFpbWFudElkOiBbbnVsbF0sICAgIFxyXG4gICAgICBmaXJzdE5hbWU6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSxcclxuICAgICAgbGFzdE5hbWU6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSwgICAgICBcclxuICAgICAgbWlkZGxlSW5pdGlhbDogW251bGwsVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldLFxyXG4gICAgICBob21lUGhvbmU6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSxcclxuICAgICAgbW9iaWxlUGhvbmU6IFtudWxsXSxcclxuXHJcbiAgICAgIC8vVGhlcmUgaXMgbm8gd2F5IHRoZXkgY2FuIGNob29zZSBudWxsLCBzbyBubyB2YWxpZGF0aW9ucyBhcmUgbmVlZGVkXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogW251bGxdLFxyXG4gICAgICBnZW5kZXI6IFtudWxsXSxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IFtudWxsXSxcclxuICAgICAgcmFjZTogW251bGxdLFxyXG4gICAgICBldGhuaWNpdHk6IFtudWxsXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCdDbG9zZSBjbGljaycpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xhaW1hbnREZXRhaWxzKCkge1xyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHtcclxuICAgICAgbWlkZGxlSW5pdGlhbDogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5Lm1pZGRsZUluaXRpYWwsXHJcbiAgICAgIGhvbWVQaG9uZTogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5LmhvbWVQaG9uZSxcclxuICAgICAgbW9iaWxlUGhvbmU6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5tb2JpbGVQaG9uZSxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkubGFuZ3VhZ2VQcmVmZXJlbmNlLFxyXG4gICAgICBnZW5kZXI6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5nZW5kZXIsXHJcbiAgICAgIGVkdWNhdGlvbkxldmVsOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuZWR1Y2F0aW9uTGV2ZWwsXHJcbiAgICAgIHJhY2U6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5yYWNlLFxyXG4gICAgICBldGhuaWNpdHk6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5ldGhuaWNpdHksXHJcbiAgICAgIGl2clBpbjogbnVsbCxcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBhZGRyZXNzOiBudWxsLFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdGhpcy5pZCA9IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmNsYWltYW50SWQ7XHJcbiAgICB0aGlzLmNsYWltYW50U2VydmljZS51cGRhdGVDbGFpbWFudCh0aGlzLmlkLCB0aGlzLnVwZGF0ZUNsYWltYW50KVxyXG4gICAgICAuc3Vic2NyaWJlKHVwZGF0ZUNsYWltYW50ID0+IHsgdGhpcy51cGRhdGVDbGFpbWFudCA9IHVwZGF0ZUNsYWltYW50IH0pO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZUZuKGMxOiBhbnksIGMyOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjMSAmJiBjMiA/IGMxLmlkID09PSBjMi5pZCA6IGMxID09PSBjMjtcclxuICB9XHJcbiAgXHJcbn1cclxuIl19