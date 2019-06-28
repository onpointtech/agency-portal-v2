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
                    template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\n    <div class=\"form-group\">\n\n      <!-- SSN and Alternate ClaimantID -->\n      <div class=\"col-xs-12 no-padding\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            SSN:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <!-- FORM INPUT -->\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.ssn\" formControlName=\"ssn\"\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.ssn}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.ssn content: {{claimantProfileCopy.ssn}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n\n        </div>\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            Alternate ClaimantID:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <!-- FORM INPUT -->\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.alternateClaimantId\"\n              formControlName=\"alternateClaimantId\" readonly=\"readonly\"\n              placeholder=\"{{claimantProfileCopy.alternateClaimantId}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.alternateClaimantId content: {{claimantProfileCopy.alternateClaimantId}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- First Name and Last Name -->\n      <div class=\"col-xs-12 no-padding\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            First Name:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <!-- FORM INPUT -->\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.firstName\" formControlName=\"firstName\"\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.firstName}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.firstName content: {{claimantProfileCopy.firstName}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n\n        </div>\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            Last Name:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <!-- FORM INPUT -->\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.lastName\" formControlName=\"lastName\"\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.lastName}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.lastName content: {{claimantProfileCopy.lastName}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n\n        </div>\n      </div>\n\n\n      <!-- Middle Initial and Home Phone -->\n      <div class=\"col-xs-12 no-padding\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            Middle Initial:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <!-- FORM INPUT -->\n            <input class=\"edit_field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.middleInitial\"\n              formControlName=\"middleInitial\" placeholder=\"{{claimantProfileCopy.middleInitial}}\">\n          </div>\n          \n          <!-- ERROR, THIS DOESNT SHOW UP FOR SOME REASON   -->\n          <span *ngIf=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched\"\n            class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\n\n          <div class=\"text-danger\">\n            <val-errors controlName=\"middleInitial\">\n              <ng-template valError=\"minlength\">\n                <p class=\"ng-scope\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n                  Please enter a valid Middle Initial.\n                </p>\n              </ng-template>\n            </val-errors>\n          </div>\n\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.middleInitial content: {{claimantProfileCopy.middleInitial}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n\n        </div>\n        <div class=\"col-xs-12 col-md-6\">\n          <label for=\"homePhone\" class=\"col-xs-12 head control-label\">Home Phone:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.homePhone\"\n              formControlName=\"homePhone\" placeholder=\"{{claimantProfileCopy.homePhone}}\" mask=\"(000) 000-0000\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.homePhone content: {{claimantProfileCopy.homePhone}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n      </div>\n\n      <!-- Mobile Phone  & Language Preference div -->\n      <div class=\"col-xs-12 no-padding\">\n\n        <div class=\"col-xs-12 col-md-6\">\n          <label for=\"mobilePhone\" class=\"col-xs-12 head control-label\">Mobile Phone:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.mobilePhone\"\n              formControlName=\"mobilePhone\" placeholder=\"{{claimantProfileCopy.mobilePhone}}\" mask=\"(000) 000-0000\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.mobilePhone content: {{claimantProfileCopy.mobilePhone}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            Language Preference:\n          </label>\n          <div\n            [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\n            <!-- FORM INPUT -->\n            <select\n              [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'edit_field error': 'edit_field'\"\n              formControlName=\"languagePreference\" [compareWith]=\"compareFn\"\n              [(ngModel)]=\"claimantProfileCopy.languagePreference\">\n              <option value=\"\" disabled=true>{{claimantProfileCopy.languagePreference}}</option>\n              <option [value]=\"choice\" *ngFor=\"let choice of languagePreferenceChoices\">{{choice}}</option>\n            </select>\n\n            <!-- ERROR   -->\n            <span\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\n            <div\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\n              class=\"text-danger\">\n\n              <!-- ERROR LIST -->\n\n              <p *ngIf=\"profileForm.controls['languagePreference'].invalid\" class=\"ng-scope\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n                Please enter a valid Language Preference.\n              </p>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <!-- Education Level & Gender div -->\n      <div class=\"col-xs-12 no-padding\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            Education Level:\n          </label>\n          <div\n            [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\n            <!-- FORM INPUT -->\n            <select\n              [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'edit_field error': 'edit_field'\"\n              formControlName=\"educationLevel\" [compareWith]=\"compareFn\"\n              [(ngModel)]=\"claimantProfileCopy.educationLevel\">\n              <option value=\"\" disabled=true>{{claimantProfileCopy.educationLevel}}</option>\n              <option [value]=\"choice\" *ngFor=\"let choice of educationLevelChoices\">{{choice}}</option>\n            </select>\n\n            <!-- ERROR   -->\n            <span\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\n            <div\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\n              class=\"text-danger\">\n\n              <!-- ERROR LIST -->\n\n              <p *ngIf=\"profileForm.controls['educationLevel'].invalid\" class=\"ng-scope\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n                Please enter a valid Education Level.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            Gender:\n          </label>\n          <div\n            [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\n            <!-- FORM INPUT -->\n            <select\n              [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'edit_field error': 'edit_field'\"\n              formControlName=\"gender\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.gender\">\n              <option value=\"\" disabled=true>{{claimantProfileCopy.gender}}</option>\n              <option [value]=\"choice\" *ngFor=\"let choice of genderChoices\">{{choice}}</option>\n            </select>\n\n            <!-- ERROR   -->\n            <span *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\n            <div *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\n              class=\"text-danger\">\n\n              <!-- ERROR LIST -->\n\n              <p *ngIf=\"profileForm.controls['gender'].invalid\" class=\"ng-scope\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n                Please enter a valid Gender.\n              </p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- Race & Ethnicity div -->\n      <div class=\"col-xs-12 no-padding\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            Race:\n          </label>\n          <div\n            [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\n            <!-- FORM INPUT -->\n            <select\n              [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'edit_field error': 'edit_field'\"\n              formControlName=\"race\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.race\">\n              <option value=\"\" disabled=true>{{claimantProfileCopy.race}}</option>\n              <option [value]=\"choice\" *ngFor=\"let choice of raceChoices\">{{choice}}</option>\n            </select>\n\n            <!-- ERROR   -->\n            <span *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\n            <div *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\n              class=\"text-danger\">\n\n              <!-- ERROR LIST -->\n\n              <p *ngIf=\"profileForm.controls['race'].invalid\" class=\"ng-scope\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n                Please enter a valid Race.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            Ethnicity:\n          </label>\n          <div\n            [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\n            <!-- FORM INPUT -->\n            <select\n              [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'edit_field error': 'edit_field'\"\n              formControlName=\"ethnicity\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.ethnicity\">\n              <option value=\"\" disabled=true>{{claimantProfileCopy.ethnicity}}</option>\n              <option [value]=\"choice\" *ngFor=\"let choice of ethnicityChoices\">{{choice}}</option>\n            </select>\n\n            <!-- ERROR   -->\n            <span *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\n            <div *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\n              class=\"text-danger\">\n\n              <!-- ERROR LIST -->\n\n              <p *ngIf=\"profileForm.controls['ethnicity'].invalid\" class=\"ng-scope\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n                Please enter a valid Ethnicity.\n              </p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtZGV0YWlscy9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFO0lBa0JFLHNDQUFtQixXQUEyQixFQUFVLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxFQUFlO1FBQXBJLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVZ2SixtQkFBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRXhDLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFC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ZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDOUQsU0FBUzs7OztRQUFDLFVBQUEsY0FBYyxJQUFNLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxFQUFPLEVBQUUsRUFBTztRQUN4QixPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNoRCxDQUFDOztnQkF4RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLG8waEJBQXFEO2lCQUV0RDs7OztnQkFaUSxjQUFjO2dCQUtkLGVBQWU7Z0JBQ2YsYUFBYTtnQkFMRixXQUFXOzs7d0JBYTVCLEtBQUs7O0lBb0ZSLG1DQUFDO0NBQUEsQUExRkQsSUEwRkM7U0FyRlksNEJBQTRCOzs7SUFDdkMsNkNBQWU7O0lBQ2YsMENBQVc7O0lBQ1gsc0RBQXdDOztJQUN4QywyREFBd0M7O0lBQ3hDLG1EQUF1Qjs7SUFDdkIscURBQThCOztJQUM5QixtREFBMEI7O0lBQzFCLHdEQUFvQzs7SUFDcEMsNkRBQThDOztJQUM5QyxpRUFBc0Q7O0lBQ3RELDZDQUFjOztJQUVGLG1EQUFrQzs7Ozs7SUFBRSx1REFBd0M7Ozs7O0lBQUUscURBQW9DOzs7OztJQUFFLDBDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgR0VOREVSQ0hPSUNFUywgUkFDRUNIT0lDRVMsIEVUSE5JQ0lUWUNIT0lDRVMsIEVEVUNBVElPTkxFVkVMQ0hPSUNFUywgTEFOR1VBR0VQUkVGRVJFTkNFQ0hPSUNFUyB9IGZyb20gJy4uLy4uL2Nob2ljZXMvY2hvaWNlcyc7XHJcbmltcG9ydCB7IFVwZGF0ZUNsYWltYW50U08gfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvdXBkYXRlLWNsYWltYW50LXNvJztcclxuaW1wb3J0IHsgQ2xhaW1hbnRTTyB9IGZyb20gJy4uLy4uL3NlcnZpY2Utb2JqZWN0cy9jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IENsYWltYW50U2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9jbGFpbWFudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9wb3J0YWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29wdC1lZGl0LWNsYWltYW50LWRldGFpbHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDbGFpbWFudERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlucHV0O1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdXBkYXRlQ2xhaW1hbnQgPSBuZXcgVXBkYXRlQ2xhaW1hbnRTTygpO1xyXG4gIGNsYWltYW50UHJvZmlsZUNvcHkgPSAgbmV3IENsYWltYW50U08oKTtcclxuICBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG4gIGdlbmRlckNob2ljZXMgPSBHRU5ERVJDSE9JQ0VTO1xyXG4gIHJhY2VDaG9pY2VzID0gUkFDRUNIT0lDRVM7XHJcbiAgZXRobmljaXR5Q2hvaWNlcyA9IEVUSE5JQ0lUWUNIT0lDRVM7XHJcbiAgZWR1Y2F0aW9uTGV2ZWxDaG9pY2VzID0gRURVQ0FUSU9OTEVWRUxDSE9JQ0VTO1xyXG4gIGxhbmd1YWdlUHJlZmVyZW5jZUNob2ljZXMgPSBMQU5HVUFHRVBSRUZFUkVOQ0VDSE9JQ0VTO1xyXG4gIGRlYnVnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgY2xhaW1hbnRTZXJ2aWNlOiBDbGFpbWFudFNlcnZpY2UsIHByaXZhdGUgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weSA9IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IG51bGwsXHJcbiAgICAgIGhvbWVQaG9uZTogbnVsbCxcclxuICAgICAgbW9iaWxlUGhvbmU6IG51bGwsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IG51bGwsXHJcbiAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgcmFjZTogbnVsbCxcclxuICAgICAgZXRobmljaXR5OiBudWxsLFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBzc246IFtudWxsXSxcclxuICAgICAgYWx0ZXJuYXRlQ2xhaW1hbnRJZDogW251bGxdLCAgICBcclxuICAgICAgZmlyc3ROYW1lOiBbbnVsbCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV0sXHJcbiAgICAgIGxhc3ROYW1lOiBbbnVsbCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV0sICAgICAgXHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IFtudWxsLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpXSxcclxuICAgICAgaG9tZVBob25lOiBbbnVsbCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKV0sXHJcbiAgICAgIG1vYmlsZVBob25lOiBbbnVsbF0sXHJcblxyXG4gICAgICAvL1RoZXJlIGlzIG5vIHdheSB0aGV5IGNhbiBjaG9vc2UgbnVsbCwgc28gbm8gdmFsaWRhdGlvbnMgYXJlIG5lZWRlZFxyXG4gICAgICBsYW5ndWFnZVByZWZlcmVuY2U6IFtudWxsXSxcclxuICAgICAgZ2VuZGVyOiBbbnVsbF0sXHJcbiAgICAgIGVkdWNhdGlvbkxldmVsOiBbbnVsbF0sXHJcbiAgICAgIHJhY2U6IFtudWxsXSxcclxuICAgICAgZXRobmljaXR5OiBbbnVsbF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgnQ2xvc2UgY2xpY2snKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNsYWltYW50RGV0YWlscygpIHtcclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5taWRkbGVJbml0aWFsLFxyXG4gICAgICBob21lUGhvbmU6IHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weS5ob21lUGhvbmUsXHJcbiAgICAgIG1vYmlsZVBob25lOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkubW9iaWxlUGhvbmUsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5Lmxhbmd1YWdlUHJlZmVyZW5jZSxcclxuICAgICAgZ2VuZGVyOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuZ2VuZGVyLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5LmVkdWNhdGlvbkxldmVsLFxyXG4gICAgICByYWNlOiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkucmFjZSxcclxuICAgICAgZXRobmljaXR5OiB0aGlzLmNsYWltYW50UHJvZmlsZUNvcHkuZXRobmljaXR5LFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogbnVsbCxcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHRoaXMuaWQgPSB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5jbGFpbWFudElkO1xyXG4gICAgdGhpcy5jbGFpbWFudFNlcnZpY2UudXBkYXRlQ2xhaW1hbnQodGhpcy5pZCwgdGhpcy51cGRhdGVDbGFpbWFudClcclxuICAgICAgLnN1YnNjcmliZSh1cGRhdGVDbGFpbWFudCA9PiB7IHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB1cGRhdGVDbGFpbWFudCB9KTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVGbihjMTogYW55LCBjMjogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYzEgJiYgYzIgPyBjMS5pZCA9PT0gYzIuaWQgOiBjMSA9PT0gYzI7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==