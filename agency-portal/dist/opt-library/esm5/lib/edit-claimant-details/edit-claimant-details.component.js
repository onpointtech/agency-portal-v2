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
var EditClaimantDetailsComponent = /** @class */ (function () {
    function EditClaimantDetailsComponent(activeModal, claimantService, portalService, fb) {
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
    EditClaimantDetailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    EditClaimantDetailsComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.activeModal.close('Close click');
    };
    /**
     * @return {?}
     */
    EditClaimantDetailsComponent.prototype.updateClaimantDetails = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (updateClaimant) { _this.updateClaimant = updateClaimant; }));
        this.close();
    };
    /**
     * @param {?} c1
     * @param {?} c2
     * @return {?}
     */
    EditClaimantDetailsComponent.prototype.compareFn = /**
     * @param {?} c1
     * @param {?} c2
     * @return {?}
     */
    function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    EditClaimantDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'opt-edit-claimant-details',
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n\r\n      <!-- SSN and Alternate ClaimantID -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            SSN:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.ssn\" formControlName=\"ssn\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.ssn}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.ssn content: {{claimantProfileCopy.ssn}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Alternate ClaimantID:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.alternateClaimantId\"\r\n              formControlName=\"alternateClaimantId\" readonly=\"readonly\"\r\n              placeholder=\"{{claimantProfileCopy.alternateClaimantId}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.alternateClaimantId content: {{claimantProfileCopy.alternateClaimantId}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- First Name and Last Name -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            First Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.firstName\" formControlName=\"firstName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.firstName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.firstName content: {{claimantProfileCopy.firstName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Last Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.lastName\" formControlName=\"lastName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.lastName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.lastName content: {{claimantProfileCopy.lastName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Middle Initial and Home Phone -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Middle Initial:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"edit_field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.middleInitial\"\r\n              formControlName=\"middleInitial\" placeholder=\"{{claimantProfileCopy.middleInitial}}\">\r\n          </div>\r\n          \r\n          <!-- ERROR, THIS DOESNT SHOW UP FOR SOME REASON   -->\r\n          <span *ngIf=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched\"\r\n            class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n\r\n          <div class=\"text-danger\">\r\n            <val-errors controlName=\"middleInitial\">\r\n              <ng-template valError=\"minlength\">\r\n                <p class=\"ng-scope\">\r\n                  <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid Middle Initial.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.middleInitial content: {{claimantProfileCopy.middleInitial}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"homePhone\" class=\"col-xs-12 head control-label\">Home Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.homePhone\"\r\n              formControlName=\"homePhone\" placeholder=\"{{claimantProfileCopy.homePhone}}\" mask=\"(000) 000-0000\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.homePhone content: {{claimantProfileCopy.homePhone}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Mobile Phone  & Language Preference div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"mobilePhone\" class=\"col-xs-12 head control-label\">Mobile Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.mobilePhone\"\r\n              formControlName=\"mobilePhone\" placeholder=\"{{claimantProfileCopy.mobilePhone}}\" mask=\"(000) 000-0000\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.mobilePhone content: {{claimantProfileCopy.mobilePhone}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Language Preference:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"languagePreference\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.languagePreference\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.languagePreference}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of languagePreferenceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['languagePreference'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Language Preference.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Education Level & Gender div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Education Level:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"educationLevel\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.educationLevel\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.educationLevel}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of educationLevelChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['educationLevel'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Education Level.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Gender:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"gender\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.gender\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.gender}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of genderChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['gender'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Gender.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Race & Ethnicity div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Race:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"race\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.race\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.race}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of raceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['race'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Race.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Ethnicity:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"ethnicity\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.ethnicity\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.ethnicity}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of ethnicityChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['ethnicity'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Ethnicity.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    EditClaimantDetailsComponent.ctorParameters = function () { return [
        { type: NgbActiveModal },
        { type: ClaimantService },
        { type: PortalService },
        { type: FormBuilder }
    ]; };
    EditClaimantDetailsComponent.propDecorators = {
        input: [{ type: Input }]
    };
    return EditClaimantDetailsComponent;
}());
export { EditClaimantDetailsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtZGV0YWlscy9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFO0lBa0JFLHNDQUFtQixXQUEyQixFQUFVLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxFQUFlO1FBQXBJLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVZ2SixtQkFBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRXhDLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFC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ZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDOUQsU0FBUzs7OztRQUFDLFVBQUEsY0FBYyxJQUFNLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxFQUFPLEVBQUUsRUFBTztRQUN4QixPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNoRCxDQUFDOztnQkF4RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGdrakJBQXFEO2lCQUV0RDs7OztnQkFaUSxjQUFjO2dCQUtkLGVBQWU7Z0JBQ2YsYUFBYTtnQkFMRixXQUFXOzs7d0JBYTVCLEtBQUs7O0lBb0ZSLG1DQUFDO0NBQUEsQUExRkQsSUEwRkM7U0FyRlksNEJBQTRCOzs7SUFDdkMsNkNBQWU7O0lBQ2YsMENBQVc7O0lBQ1gsc0RBQXdDOztJQUN4QywyREFBd0M7O0lBQ3hDLG1EQUF1Qjs7SUFDdkIscURBQThCOztJQUM5QixtREFBMEI7O0lBQzFCLHdEQUFvQzs7SUFDcEMsNkRBQThDOztJQUM5QyxpRUFBc0Q7O0lBQ3RELDZDQUFjOztJQUVGLG1EQUFrQzs7Ozs7SUFBRSx1REFBd0M7Ozs7O0lBQUUscURBQW9DOzs7OztJQUFFLDBDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgR0VOREVSQ0hPSUNFUywgUkFDRUNIT0lDRVMsIEVUSE5JQ0lUWUNIT0lDRVMsIEVEVUNBVElPTkxFVkVMQ0hPSUNFUywgTEFOR1VBR0VQUkVGRVJFTkNFQ0hPSUNFUyB9IGZyb20gJy4uLy4uL2Nob2ljZXMvY2hvaWNlcyc7XHJcbmltcG9ydCB7IFVwZGF0ZUNsYWltYW50U08gfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvdXBkYXRlLWNsYWltYW50LXNvJztcclxuaW1wb3J0IHsgQ2xhaW1hbnRTTyB9IGZyb20gJy4uLy4uL3NlcnZpY2Utb2JqZWN0cy9jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IENsYWltYW50U2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9jbGFpbWFudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9wb3J0YWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29wdC1lZGl0LWNsYWltYW50LWRldGFpbHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDbGFpbWFudERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlucHV0O1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdXBkYXRlQ2xhaW1hbnQgPSBuZXcgVXBkYXRlQ2xhaW1hbnRTTygpO1xyXG4gIGNsYWltYW50UHJvZmlsZUNvcHkgPSAgbmV3IENsYWltYW50U08oKTtcclxuICBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG4gIGdlbmRlckNob2ljZXMgPSBHRU5ERVJDSE9JQ0VTO1xyXG4gIHJhY2VDaG9pY2VzID0gUkFDRUNIT0lDRVM7XHJcbiAgZXRobmljaXR5Q2hvaWNlcyA9IEVUSE5JQ0lUWUNIT0lDRVM7XHJcbiAgZWR1Y2F0aW9uTGV2ZWxDaG9pY2VzID0gRURVQ0FUSU9OTEVWRUxDSE9JQ0VTO1xyXG4gIGxhbmd1YWdlUHJlZmVyZW5jZUNob2ljZXMgPSBMQU5HVUFHRVBSRUZFUkVOQ0VDSE9JQ0VTO1xyXG4gIGRlYnVnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgY2xhaW1hbnRTZXJ2aWNlOiBDbGFpbWFudFNlcnZpY2UsIHByaXZhdGUgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weSA9IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IG51bGwsXHJcbiAgICAgIGhvbWVQaG9uZTogbnVsbCxcclxuICAgICAgbW9iaWxlUGhvbmU6IG51bGwsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IG51bGwsXHJcbiAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgcmFjZTogbnVsbCxcclxuICAgICAgZXRobmljaXR5OiBudWxsLFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBzc246IFtudWxsXSxcclxuICAgICAgYWx0ZXJuYXRlQ2xhaW1hbnRJZDogW251bGxdLCAgICBcclxuICAgICAgZmlyc3ROYW1lOiBbbnVsbCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV0sXHJcbiAgICAgIGxhc3ROYW1lOiBbbnVsbCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV0sICAgICAgXHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSxcclxuICAgICAgaG9tZVBob25lOiBbbnVsbCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV0sXHJcbiAgICAgIG1vYmlsZVBob25lOiBbbnVsbF0sXHJcblxyXG4gICAgICAvL1RoZXJlIGlzIG5vIHdheSB0aGV5IGNhbiBjaG9vc2UgbnVsbCwgc28gbm8gdmFsaWRhdGlvbnMgYXJlIG5lZWRlZFxyXG4gICAgICBsYW5ndWFnZVByZWZlcmVuY2U6IFtudWxsXSxcclxuICAgICAgZ2VuZGVyOiBbbnVsbF0sXHJcbiAgICAgIGVkdWNhdGlvbkxldmVsOiBbbnVsbF0sXHJcbiAgICAgIHJhY2U6IFtudWxsXSxcclxuICAgICAgZXRobmljaXR5OiBbbnVsbF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgnQ2xvc2UgY2xpY2snKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNsYWltYW50RGV0YWlscygpIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5taWRkbGVJbml0aWFsLFxyXG4gICAgICBob21lUGhvbmU6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5ob21lUGhvbmUsXHJcbiAgICAgIG1vYmlsZVBob25lOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkubW9iaWxlUGhvbmUsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5Lmxhbmd1YWdlUHJlZmVyZW5jZSxcclxuICAgICAgZ2VuZGVyOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuZ2VuZGVyLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5LmVkdWNhdGlvbkxldmVsLFxyXG4gICAgICByYWNlOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkucmFjZSxcclxuICAgICAgZXRobmljaXR5OiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuZXRobmljaXR5LFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogbnVsbCxcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHRoaXMuaWQgPSB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5jbGFpbWFudElkO1xyXG4gICAgdGhpcy5jbGFpbWFudFNlcnZpY2UudXBkYXRlQ2xhaW1hbnQodGhpcy5pZCwgdGhpcy51cGRhdGVDbGFpbWFudClcclxuICAgICAgLnN1YnNjcmliZSh1cGRhdGVDbGFpbWFudCA9PiB7IHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB1cGRhdGVDbGFpbWFudCB9KTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVGbihjMTogYW55LCBjMjogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYzEgJiYgYzIgPyBjMS5pZCA9PT0gYzIuaWQgOiBjMSA9PT0gYzI7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==