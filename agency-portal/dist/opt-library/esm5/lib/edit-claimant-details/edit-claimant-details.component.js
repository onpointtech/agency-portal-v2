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
    EditClaimantDetailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        function (updateClaimant) { _this.updateClaimant = updateClaimant; console.log("reached this"); }));
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
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n\r\n      <!-- SSN and Alternate ClaimantID -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            SSN:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.ssn\" formControlName=\"ssn\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.ssn}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.ssn content: {{claimantProfileCopy.ssn}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Alternate ClaimantID:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.alternateClaimantId\"\r\n              formControlName=\"alternateClaimantId\" readonly=\"readonly\"\r\n              placeholder=\"{{claimantProfileCopy.alternateClaimantId}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.alternateClaimantId content: {{claimantProfileCopy.alternateClaimantId}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- First Name and Last Name -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            First Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.firstName\" formControlName=\"firstName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.firstName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.firstName content: {{claimantProfileCopy.firstName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Last Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.lastName\" formControlName=\"lastName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.lastName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.lastName content: {{claimantProfileCopy.lastName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Middle Initial and Home Phone -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Middle Initial:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"edit_field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.middleInitial\"\r\n              formControlName=\"middleInitial\" placeholder=\"{{claimantProfileCopy.middleInitial}}\">\r\n\r\n              <div class = \"text-danger\">\r\n                  <val-errors controlName = \"middleInitial\">\r\n                    <ng-template valError = \"maxlength\">\r\n                      <p class = \"ng-scope\">\r\n                        <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                        Middle Initial can only have a maximum of 1 letter\r\n                      </p>\r\n                    </ng-template>\r\n      \r\n                    <ng-template valError = \"pattern\">\r\n                      <p class = \"ng-scope\">\r\n                        <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                        Only a letter can be entered as a middle initial\r\n                      </p>\r\n                    </ng-template>\r\n                  </val-errors>\r\n                </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.middleInitial content: {{claimantProfileCopy.middleInitial}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"homePhone\" class=\"col-xs-12 head control-label\">Home Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.homePhone\"\r\n              formControlName=\"homePhone\" placeholder=\"{{claimantProfileCopy.homePhone}}\" mask=\"(000) 000-0000\">\r\n          </div>\r\n\r\n          <div class = \"text-danger\">\r\n              <val-errors controlName = \"homePhone\">\r\n                <ng-template valError = \"pattern\">\r\n                  <p class = \"ng-scope\">\r\n                    <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                    Only numbers are allowed to be inputted in this field.\r\n                  </p>\r\n                </ng-template>\r\n              </val-errors>\r\n            </div>\r\n\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.homePhone content: {{claimantProfileCopy.homePhone}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Mobile Phone  & Language Preference div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"mobilePhone\" class=\"col-xs-12 head control-label\">Mobile Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.mobilePhone\"\r\n              formControlName=\"mobilePhone\" placeholder=\"{{claimantProfileCopy.mobilePhone}}\" mask=\"(000) 000-0000\">\r\n          </div>\r\n\r\n          <div class = \"text-danger\">\r\n              <val-errors controlName = \"mobilePhone\">\r\n                <ng-template valError = \"pattern\">\r\n                  <p class = \"ng-scope\">\r\n                    <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                    Only numbers are allowed to be inputted in this field.\r\n                  </p>\r\n                </ng-template>\r\n              </val-errors>\r\n            </div>\r\n            \r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.mobilePhone content: {{claimantProfileCopy.mobilePhone}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Language Preference:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"languagePreference\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.languagePreference\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.languagePreference}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of languagePreferenceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['languagePreference'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Language Preference.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Education Level & Gender div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Education Level:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"educationLevel\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.educationLevel\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.educationLevel}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of educationLevelChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['educationLevel'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Education Level.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Gender:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"gender\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.gender\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.gender}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of genderChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['gender'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Gender.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Race & Ethnicity div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Race:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"race\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.race\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.race}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of raceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['race'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Race.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Ethnicity:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"ethnicity\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.ethnicity\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.ethnicity}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of ethnicityChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['ethnicity'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Ethnicity.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type = \"submit\" class=\"btn btn-primary\"  (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtZGV0YWlscy9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFO0lBb0JFLHNDQUFtQixXQUEyQixFQUFVLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxFQUFlO1FBQXBJLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVp2SixtQkFBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLHdCQUFtQixHQUFJLElBQUksVUFBVSxFQUFFLENBQUM7UUFFeEMsa0JBQWEsR0FBRyxhQUFh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cEMsNkRBQThDOztJQUM5QyxpRUFBc0Q7O0lBQ3RELDZDQUFjOztJQUNkLHNEQUEwQjs7SUFFZCxtREFBa0M7Ozs7O0lBQUUsdURBQXdDOzs7OztJQUFFLHFEQUFvQzs7Ozs7SUFBRSwwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEdFTkRFUkNIT0lDRVMsIFJBQ0VDSE9JQ0VTLCBFVEhOSUNJVFlDSE9JQ0VTLCBFRFVDQVRJT05MRVZFTENIT0lDRVMsIExBTkdVQUdFUFJFRkVSRU5DRUNIT0lDRVMgfSBmcm9tICcuLi8uLi9jaG9pY2VzL2Nob2ljZXMnO1xyXG5pbXBvcnQgeyBVcGRhdGVDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL3VwZGF0ZS1jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IENsYWltYW50U08gfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3J0YWwtc2VydmljZXMvY2xhaW1hbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3J0YWwtc2VydmljZXMvcG9ydGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcHQtZWRpdC1jbGFpbWFudC1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1jbGFpbWFudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Q2xhaW1hbnREZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbnB1dDtcclxuICBpZDogbnVtYmVyO1xyXG4gIHVwZGF0ZUNsYWltYW50ID0gbmV3IFVwZGF0ZUNsYWltYW50U08oKTtcclxuICBjbGFpbWFudFByb2ZpbGVDb3B5ID0gIG5ldyBDbGFpbWFudFNPKCk7XHJcbiAgY2xhaW1hbnRQcm9maWxlRWRpdCA9ICBuZXcgQ2xhaW1hbnRTTygpO1xyXG4gIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XHJcbiAgZ2VuZGVyQ2hvaWNlcyA9IEdFTkRFUkNIT0lDRVM7XHJcbiAgcmFjZUNob2ljZXMgPSBSQUNFQ0hPSUNFUztcclxuICBldGhuaWNpdHlDaG9pY2VzID0gRVRITklDSVRZQ0hPSUNFUztcclxuICBlZHVjYXRpb25MZXZlbENob2ljZXMgPSBFRFVDQVRJT05MRVZFTENIT0lDRVM7XHJcbiAgbGFuZ3VhZ2VQcmVmZXJlbmNlQ2hvaWNlcyA9IExBTkdVQUdFUFJFRkVSRU5DRUNIT0lDRVM7XHJcbiAgZGVidWcgPSBmYWxzZTtcclxuICBuZXdQcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLCBwcml2YXRlIGNsYWltYW50U2VydmljZTogQ2xhaW1hbnRTZXJ2aWNlLCBwcml2YXRlIHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkgPSB7XHJcbiAgICAgIGNsYWltYW50SWQ6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmNsYWltYW50SWQsXHJcbiAgICAgIHNzbjogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uc3NuLFxyXG4gICAgICBkYXRlT2ZCaXJ0aDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZGF0ZU9mQmlydGgsXHJcbiAgICAgIGZpcnN0TmFtZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZmlyc3ROYW1lLFxyXG4gICAgICBtaWRkbGVJbml0aWFsOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5taWRkbGVJbml0aWFsLFxyXG4gICAgICBsYXN0TmFtZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ubGFzdE5hbWUsXHJcbiAgICAgIGhvbWVQaG9uZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uaG9tZVBob25lLFxyXG4gICAgICBtb2JpbGVQaG9uZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ubW9iaWxlUGhvbmUsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ubGFuZ3VhZ2VQcmVmZXJlbmNlLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZWR1Y2F0aW9uTGV2ZWwsXHJcbiAgICAgIGdlbmRlcjogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZ2VuZGVyLFxyXG4gICAgICByYWNlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5yYWNlLFxyXG4gICAgICBldGhuaWNpdHk6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmV0aG5pY2l0eSxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZVRTOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5sYXN0SW5zZXJ0VXBkYXRlVFMsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ubGFzdEluc2VydFVwZGF0ZUJ5LFxyXG4gICAgICBpdnJQaW46IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLml2clBpbixcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlLFxyXG4gICAgICBhZGRyZXNzOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzLFxyXG4gICAgICBlbWFpbDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZW1haWwsXHJcbiAgICAgIHByZWZlcnJlZE9jY3VwYXRpb246IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLnByZWZlcnJlZE9jY3VwYXRpb24sXHJcbiAgICAgIGFsdGVybmF0ZUNsYWltYW50SWQ6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFsdGVybmF0ZUNsYWltYW50SWRcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHtcclxuICAgICAgbWlkZGxlSW5pdGlhbDogbnVsbCxcclxuICAgICAgaG9tZVBob25lOiBudWxsLFxyXG4gICAgICBtb2JpbGVQaG9uZTogbnVsbCxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogbnVsbCxcclxuICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICByYWNlOiBudWxsLFxyXG4gICAgICBldGhuaWNpdHk6IG51bGwsXHJcbiAgICAgIGl2clBpbjogbnVsbCxcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBhZGRyZXNzOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnByb2ZpbGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgc3NuOiBbbnVsbF0sXHJcbiAgICAgICAgYWx0ZXJuYXRlQ2xhaW1hbnRJZDogW251bGxdLCAgICBcclxuICAgICAgICBmaXJzdE5hbWU6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSxcclxuICAgICAgICBsYXN0TmFtZTogW251bGwsVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldLCAgICAgIFxyXG4gICAgICAgIG1pZGRsZUluaXRpYWw6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSxcclxuICAgICAgICBob21lUGhvbmU6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSxcclxuICAgICAgICBtb2JpbGVQaG9uZTogW251bGxdLFxyXG5cclxuICAgICAgICAvL1RoZXJlIGlzIG5vIHdheSB0aGV5IGNhbiBjaG9vc2UgbnVsbCwgc28gbm8gdmFsaWRhdGlvbnMgYXJlIG5lZWRlZFxyXG4gICAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogW251bGxdLFxyXG4gICAgICAgIGdlbmRlcjogW251bGxdLFxyXG4gICAgICAgIGVkdWNhdGlvbkxldmVsOiBbbnVsbF0sXHJcbiAgICAgICAgcmFjZTogW251bGxdLFxyXG4gICAgICAgIGV0aG5pY2l0eTogW251bGxdLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCdDbG9zZSBjbGljaycpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xhaW1hbnREZXRhaWxzKCkge1xyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHtcclxuICAgICAgbWlkZGxlSW5pdGlhbDogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5Lm1pZGRsZUluaXRpYWwsXHJcbiAgICAgIGhvbWVQaG9uZTogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5LmhvbWVQaG9uZSxcclxuICAgICAgbW9iaWxlUGhvbmU6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5tb2JpbGVQaG9uZSxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkubGFuZ3VhZ2VQcmVmZXJlbmNlLFxyXG4gICAgICBnZW5kZXI6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5nZW5kZXIsXHJcbiAgICAgIGVkdWNhdGlvbkxldmVsOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuZWR1Y2F0aW9uTGV2ZWwsXHJcbiAgICAgIHJhY2U6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5yYWNlLFxyXG4gICAgICBldGhuaWNpdHk6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5ldGhuaWNpdHksXHJcbiAgICAgIGl2clBpbjogbnVsbCxcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBhZGRyZXNzOiBudWxsLFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdGhpcy5pZCA9IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmNsYWltYW50SWQ7XHJcbiAgICB0aGlzLmNsYWltYW50U2VydmljZS51cGRhdGVDbGFpbWFudCh0aGlzLmlkLCB0aGlzLnVwZGF0ZUNsYWltYW50KVxyXG4gICAgICAuc3Vic2NyaWJlKHVwZGF0ZUNsYWltYW50ID0+IHsgdGhpcy51cGRhdGVDbGFpbWFudCA9IHVwZGF0ZUNsYWltYW50OyBjb25zb2xlLmxvZyhcInJlYWNoZWQgdGhpc1wiKSB9KTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVGbihjMTogYW55LCBjMjogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYzEgJiYgYzIgPyBjMS5pZCA9PT0gYzIuaWQgOiBjMSA9PT0gYzI7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==