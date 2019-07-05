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
        this.close();
        return this.claimantService.updateClaimant(this.id, this.updateClaimant)
            .subscribe((/**
         * @param {?} updateClaimant
         * @return {?}
         */
        function (updateClaimant) {
            _this.updateClaimant = updateClaimant;
            console.log(_this.claimantProfileCopy);
            _this.portalService.claimantSO = _this.claimantProfileCopy;
            console.log(_this.portalService.claimantSO);
        }));
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
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n\r\n      <!-- SSN and Alternate ClaimantID -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            SSN:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.ssn\" formControlName=\"ssn\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.ssn}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.ssn content: {{claimantProfileCopy.ssn}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Alternate ClaimantID:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.alternateClaimantId\"\r\n              formControlName=\"alternateClaimantId\" readonly=\"readonly\"\r\n              placeholder=\"{{claimantProfileCopy.alternateClaimantId}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.alternateClaimantId content: {{claimantProfileCopy.alternateClaimantId}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- First Name and Last Name -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            First Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.firstName\" formControlName=\"firstName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.firstName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.firstName content: {{claimantProfileCopy.firstName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Last Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.lastName\" formControlName=\"lastName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.lastName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.lastName content: {{claimantProfileCopy.lastName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Middle Initial and Home Phone -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Middle Initial:\r\n          </label>\r\n          <div [class]=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <input [class]=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched ? 'edit_field error': 'edit_field'\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.middleInitial\"\r\n              formControlName=\"middleInitial\" [placeholder] = \"profileForm.controls['middleInitial'].invalid? '(Required)' : '' \">\r\n\r\n            <span *ngIf = \"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched\"\r\n              class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n              aria-hidden = \"true\">\r\n            </span>\r\n\r\n              <div class = \"text-danger\">\r\n                  <val-errors controlName = \"middleInitial\">\r\n                    <ng-template valError = \"maxlength\">\r\n                      <p class = \"ng-scope\">\r\n                        <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                        Middle Initial can only have a maximum of 1 letter\r\n                      </p>\r\n                    </ng-template>\r\n      \r\n                    <ng-template valError = \"pattern\">\r\n                      <p class = \"ng-scope\">\r\n                        <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                        Only a letter can be entered as a middle initial\r\n                      </p>\r\n                    </ng-template>\r\n                  </val-errors>\r\n                </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"homePhone\" class=\"col-xs-12 head control-label\">\r\n            <span class = \"text-danger\">*</span>Home Phone:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['homePhone'].invalid? '(000) 000-000 (Required)' : '' \"\r\n            [(ngModel)] = \"claimantProfileCopy.homePhone\"\r\n            formControlName = \"homePhone\"\r\n            mask = \"(000) 000-0000\">\r\n          </div>\r\n\r\n          <div class = \"text-danger\">\r\n              <val-errors controlName = \"homePhone\">\r\n                <ng-template valError = \"pattern\">\r\n                  <p class = \"ng-scope\">\r\n                    <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                    Only numbers are allowed to be inputted in this field.\r\n                  </p>\r\n                </ng-template>\r\n              </val-errors>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Mobile Phone  & Language Preference div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"mobilePhone\" class=\"col-xs-12 head control-label\">Mobile Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type = \"text\"\r\n            class = \"form-control edit_field\"\r\n            [(ngModel)] = \"claimantProfileCopy.mobilePhone\"\r\n            formControlName = \"mobilePhone\"\r\n            placeholder = \"(000) 000-000\"\r\n            mask = \"(000) 000-0000\">\r\n          </div>\r\n\r\n          <div class = \"text-danger\">\r\n              <val-errors controlName = \"mobilePhone\">\r\n                <ng-template valError = \"pattern\">\r\n                  <p class = \"ng-scope\">\r\n                    <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                    Only numbers are allowed to be inputted in this field.\r\n                  </p>\r\n                </ng-template>\r\n              </val-errors>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Language Preference:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"languagePreference\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.languagePreference\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.languagePreference}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of languagePreferenceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['languagePreference'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Language Preference.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Education Level & Gender div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Education Level:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"educationLevel\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.educationLevel\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.educationLevel}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of educationLevelChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['educationLevel'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Education Level.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Gender:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"gender\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.gender\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.gender}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of genderChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['gender'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Gender.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Race & Ethnicity div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Race:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"race\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.race\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.race}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of raceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['race'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Race.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Ethnicity:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"ethnicity\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.ethnicity\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.ethnicity}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of ethnicityChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['ethnicity'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Ethnicity.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type = \"submit\" class=\"btn btn-primary\"  (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtZGV0YWlscy9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFO0lBb0JFLHNDQUFtQixXQUEyQixFQUFVLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxFQUFlO1FBQXBJLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVp2SixtQkFBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLHdCQUFtQixHQUFJLElBQUksVUFBVSxFQUFFLENBQUM7UUFFeEMsa0JBQWEsR0FBRyxhQUFh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QUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxFQUFPLEVBQUUsRUFBTztRQUN4QixPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNoRCxDQUFDOztnQkE1SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLG16a0JBQXFEO2lCQUV0RDs7OztnQkFaUSxjQUFjO2dCQUtkLGVBQWU7Z0JBQ2YsYUFBYTtnQkFMRixXQUFXOzs7d0JBYTVCLEtBQUs7O0lBd0lSLG1DQUFDO0NBQUEsQUE5SUQsSUE4SUM7U0F6SVksNEJBQTRCOzs7SUFDdkMsNkNBQWU7O0lBQ2YsMENBQVc7O0lBQ1gsc0RBQXdDOztJQUN4QywyREFBd0M7O0lBQ3hDLDJEQUF3Qzs7SUFDeEMsbURBQXVCOztJQUN2QixxREFBOEI7O0lBQzlCLG1EQUEwQjs7SUFDMUIsd0RBQW9DOztJQUNwQyw2REFBOEM7O0lBQzlDLGlFQUFzRDs7SUFDdEQsNkNBQWM7O0lBQ2Qsc0RBQTBCOztJQUVkLG1EQUFrQzs7Ozs7SUFBRSx1REFBd0M7Ozs7O0lBQUUscURBQW9DOzs7OztJQUFFLDBDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgR0VOREVSQ0hPSUNFUywgUkFDRUNIT0lDRVMsIEVUSE5JQ0lUWUNIT0lDRVMsIEVEVUNBVElPTkxFVkVMQ0hPSUNFUywgTEFOR1VBR0VQUkVGRVJFTkNFQ0hPSUNFUyB9IGZyb20gJy4uLy4uL2Nob2ljZXMvY2hvaWNlcyc7XHJcbmltcG9ydCB7IFVwZGF0ZUNsYWltYW50U08gfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvdXBkYXRlLWNsYWltYW50LXNvJztcclxuaW1wb3J0IHsgQ2xhaW1hbnRTTyB9IGZyb20gJy4uLy4uL3NlcnZpY2Utb2JqZWN0cy9jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IENsYWltYW50U2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9jbGFpbWFudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9wb3J0YWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29wdC1lZGl0LWNsYWltYW50LWRldGFpbHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDbGFpbWFudERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlucHV0O1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdXBkYXRlQ2xhaW1hbnQgPSBuZXcgVXBkYXRlQ2xhaW1hbnRTTygpO1xyXG4gIGNsYWltYW50UHJvZmlsZUNvcHkgPSAgbmV3IENsYWltYW50U08oKTtcclxuICBjbGFpbWFudFByb2ZpbGVFZGl0ID0gIG5ldyBDbGFpbWFudFNPKCk7XHJcbiAgcHJvZmlsZUZvcm06IEZvcm1Hcm91cDtcclxuICBnZW5kZXJDaG9pY2VzID0gR0VOREVSQ0hPSUNFUztcclxuICByYWNlQ2hvaWNlcyA9IFJBQ0VDSE9JQ0VTO1xyXG4gIGV0aG5pY2l0eUNob2ljZXMgPSBFVEhOSUNJVFlDSE9JQ0VTO1xyXG4gIGVkdWNhdGlvbkxldmVsQ2hvaWNlcyA9IEVEVUNBVElPTkxFVkVMQ0hPSUNFUztcclxuICBsYW5ndWFnZVByZWZlcmVuY2VDaG9pY2VzID0gTEFOR1VBR0VQUkVGRVJFTkNFQ0hPSUNFUztcclxuICBkZWJ1ZyA9IGZhbHNlO1xyXG4gIG5ld1Byb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgY2xhaW1hbnRTZXJ2aWNlOiBDbGFpbWFudFNlcnZpY2UsIHByaXZhdGUgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weSA9IHtcclxuICAgICAgY2xhaW1hbnRJZDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uY2xhaW1hbnRJZCxcclxuICAgICAgc3NuOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5zc24sXHJcbiAgICAgIGRhdGVPZkJpcnRoOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5kYXRlT2ZCaXJ0aCxcclxuICAgICAgZmlyc3ROYW1lOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5maXJzdE5hbWUsXHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLm1pZGRsZUluaXRpYWwsXHJcbiAgICAgIGxhc3ROYW1lOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5sYXN0TmFtZSxcclxuICAgICAgaG9tZVBob25lOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5ob21lUGhvbmUsXHJcbiAgICAgIG1vYmlsZVBob25lOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5tb2JpbGVQaG9uZSxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5sYW5ndWFnZVByZWZlcmVuY2UsXHJcbiAgICAgIGVkdWNhdGlvbkxldmVsOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5lZHVjYXRpb25MZXZlbCxcclxuICAgICAgZ2VuZGVyOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5nZW5kZXIsXHJcbiAgICAgIHJhY2U6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLnJhY2UsXHJcbiAgICAgIGV0aG5pY2l0eTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZXRobmljaXR5LFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmxhc3RJbnNlcnRVcGRhdGVUUyxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5sYXN0SW5zZXJ0VXBkYXRlQnksXHJcbiAgICAgIGl2clBpbjogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uaXZyUGluLFxyXG4gICAgICBkb2N1bWVudERlbGl2ZXJ5UHJlZmVyZW5jZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2UsXHJcbiAgICAgIGFkZHJlc3M6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3MsXHJcbiAgICAgIGVtYWlsOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5lbWFpbCxcclxuICAgICAgcHJlZmVycmVkT2NjdXBhdGlvbjogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ucHJlZmVycmVkT2NjdXBhdGlvbixcclxuICAgICAgYWx0ZXJuYXRlQ2xhaW1hbnRJZDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWx0ZXJuYXRlQ2xhaW1hbnRJZFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNsYWltYW50ID0ge1xyXG4gICAgICBtaWRkbGVJbml0aWFsOiBudWxsLFxyXG4gICAgICBob21lUGhvbmU6IG51bGwsXHJcbiAgICAgIG1vYmlsZVBob25lOiBudWxsLFxyXG4gICAgICBsYW5ndWFnZVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGVkdWNhdGlvbkxldmVsOiBudWxsLFxyXG4gICAgICBnZW5kZXI6IG51bGwsXHJcbiAgICAgIHJhY2U6IG51bGwsXHJcbiAgICAgIGV0aG5pY2l0eTogbnVsbCxcclxuICAgICAgaXZyUGluOiBudWxsLFxyXG4gICAgICBkb2N1bWVudERlbGl2ZXJ5UHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZVRTOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlQnk6IG51bGwsXHJcbiAgICAgIGFkZHJlc3M6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucHJvZmlsZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICBzc246IFtudWxsXSxcclxuICAgICAgICBhbHRlcm5hdGVDbGFpbWFudElkOiBbbnVsbF0sICAgIFxyXG4gICAgICAgIGZpcnN0TmFtZTogW251bGwsVmFsaWRhdG9ycy5taW5MZW5ndGgoMSldLFxyXG4gICAgICAgIGxhc3ROYW1lOiBbbnVsbCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV0sICAgICAgXHJcbiAgICAgICAgbWlkZGxlSW5pdGlhbDogW1xyXG4gICAgICAgICAgbnVsbCxcclxuICAgICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgxKSxcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKFwiW2EtekEtel0qXCIpXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaG9tZVBob25lOiBbXHJcbiAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTApLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oXCJbMC05XSpcIilcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBtb2JpbGVQaG9uZTogW1xyXG4gICAgICAgICAgbnVsbCxcclxuICAgICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKSxcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKFwiWzAtOV0qXCIpXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIC8vVGhlcmUgaXMgbm8gd2F5IHRoZXkgY2FuIGNob29zZSBudWxsLCBzbyBubyB2YWxpZGF0aW9ucyBhcmUgbmVlZGVkXHJcbiAgICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiBbbnVsbF0sXHJcbiAgICAgICAgZ2VuZGVyOiBbbnVsbF0sXHJcbiAgICAgICAgZWR1Y2F0aW9uTGV2ZWw6IFtudWxsXSxcclxuICAgICAgICByYWNlOiBbbnVsbF0sXHJcbiAgICAgICAgZXRobmljaXR5OiBbbnVsbF0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoJ0Nsb3NlIGNsaWNrJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDbGFpbWFudERldGFpbHMoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNsYWltYW50ID0ge1xyXG4gICAgICBtaWRkbGVJbml0aWFsOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkubWlkZGxlSW5pdGlhbCxcclxuICAgICAgaG9tZVBob25lOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuaG9tZVBob25lLFxyXG4gICAgICBtb2JpbGVQaG9uZTogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5Lm1vYmlsZVBob25lLFxyXG4gICAgICBsYW5ndWFnZVByZWZlcmVuY2U6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5sYW5ndWFnZVByZWZlcmVuY2UsXHJcbiAgICAgIGdlbmRlcjogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5LmdlbmRlcixcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5lZHVjYXRpb25MZXZlbCxcclxuICAgICAgcmFjZTogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5LnJhY2UsXHJcbiAgICAgIGV0aG5pY2l0eTogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5LmV0aG5pY2l0eSxcclxuICAgICAgaXZyUGluOiBudWxsLFxyXG4gICAgICBkb2N1bWVudERlbGl2ZXJ5UHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZVRTOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlQnk6IG51bGwsXHJcbiAgICAgIGFkZHJlc3M6IG51bGwsXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB0aGlzLmlkID0gdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uY2xhaW1hbnRJZDtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIHJldHVybiB0aGlzLmNsYWltYW50U2VydmljZS51cGRhdGVDbGFpbWFudCh0aGlzLmlkLCB0aGlzLnVwZGF0ZUNsYWltYW50KVxyXG4gICAgLnN1YnNjcmliZSh1cGRhdGVDbGFpbWFudCA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB1cGRhdGVDbGFpbWFudDtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5KTtcclxuICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08gPSB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZUZuKGMxOiBhbnksIGMyOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjMSAmJiBjMiA/IGMxLmlkID09PSBjMi5pZCA6IGMxID09PSBjMjtcclxuICB9XHJcbiAgXHJcbn1cclxuIl19