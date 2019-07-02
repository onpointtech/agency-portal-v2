/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { STATECHOICES } from '../../choices/choices';
import { Address } from '../../service-objects/address';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { ClaimantService } from '../../portal-services/claimant.service';
import { PortalService } from '../../portal-services/portal.service';
var EditClaimantAddressComponent = /** @class */ (function () {
    function EditClaimantAddressComponent(activeModal, claimantService, portalService, fb) {
        this.activeModal = activeModal;
        this.claimantService = claimantService;
        this.portalService = portalService;
        this.fb = fb;
        this.updateClaimant = new UpdateClaimantSO();
        this.claimantProfileCopy = new ClaimantSO();
        this.updateClaimantAddress = new Address();
        this.stateChoices = STATECHOICES;
        this.debug = false;
    }
    /**
     * @return {?}
     */
    EditClaimantAddressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.claimantProfileCopy = {
        //   claimantId: this.portalService.claimantSO.claimantId,
        //   ssn: this.portalService.claimantSO.ssn,
        //   dateOfBirth: this.portalService.claimantSO.dateOfBirth,
        //   firstName: this.portalService.claimantSO.firstName,
        //   middleInitial: this.portalService.claimantSO.middleInitial,
        //   lastName: this.portalService.claimantSO.lastName,
        //   homePhone: this.portalService.claimantSO.homePhone,
        //   mobilePhone: this.portalService.claimantSO.mobilePhone,
        //   languagePreference: this.portalService.claimantSO.languagePreference,
        //   educationLevel: this.portalService.claimantSO.educationLevel,
        //   gender: this.portalService.claimantSO.gender,
        //   race: this.portalService.claimantSO.race,
        //   ethnicity: this.portalService.claimantSO.ethnicity,
        //   lastInsertUpdateTS: this.portalService.claimantSO.lastInsertUpdateTS,
        //   lastInsertUpdateBy: this.portalService.claimantSO.lastInsertUpdateBy,
        //   ivrPin: this.portalService.claimantSO.ivrPin,
        //   documentDeliveryPreference: this.portalService.claimantSO.documentDeliveryPreference,
        //   address: this.portalService.claimantSO.address,
        //   email: this.portalService.claimantSO.email,
        //   preferredOccupation: this.portalService.claimantSO.preferredOccupation,
        //   alternateClaimantId: this.portalService.claimantSO.alternateClaimantId
        // }
        this.updateClaimantAddress = {
            addressLine1: this.portalService.claimantSO.address[0].addressLine1,
            addressLine2: this.portalService.claimantSO.address[0].addressLine2,
            city: this.portalService.claimantSO.address[0].city,
            state: this.portalService.claimantSO.address[0].state,
            zipCode: this.portalService.claimantSO.address[0].zipCode,
            zipExt: this.portalService.claimantSO.address[0].zipExt,
            id: this.portalService.claimantSO.address[0].id,
            lastInsertUpdateBy: this.portalService.claimantSO.address[0].lastInsertUpdateBy,
            lastInsertUpdateTS: this.portalService.claimantSO.address[0].lastInsertUpdateTS
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
            address: [this.updateClaimantAddress],
        };
        this.profileForm = this.fb.group({
            addressLine1: [null],
            addressLine2: [null],
            city: [null],
            state: [null],
            zipCode: [null],
            zipExt: [null],
        });
    };
    /**
     * @return {?}
     */
    EditClaimantAddressComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.activeModal.close('Close click');
    };
    /**
     * @return {?}
     */
    EditClaimantAddressComponent.prototype.updateClaimantDetails = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log(this.updateClaimant);
        console.log(this.updateClaimantAddress);
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
            address: [this.updateClaimantAddress],
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
    EditClaimantAddressComponent.prototype.compareFn = /**
     * @param {?} c1
     * @param {?} c2
     * @return {?}
     */
    function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    EditClaimantAddressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'opt-edit-claimant-address',
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n\r\n\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <!-- Address Line 1 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine1\" class=\"col-xs-12 head control-label\">Address Line 1:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.addressLine1\"\r\n              formControlName=\"addressLine1\" placeholder=\"{{updateClaimantAddress.addressLine1}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.addressLine1 content: {{updateClaimantAddress.addressLine1}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Address Line 2 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine2\" class=\"col-xs-12 head control-label\">Address Line 2:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.addressLine2\"\r\n              formControlName=\"addressLine2\" placeholder=\"{{updateClaimantAddress.addressLine2}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.addressLine2 content: {{updateClaimantAddress.addressLine2}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- City and State -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"city\" class=\"col-xs-12 head control-label\">City:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.city\"\r\n              formControlName=\"city\" placeholder=\"{{updateClaimantAddress.city}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.city content: {{updateClaimantAddress.city}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            State:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"state\" [compareWith]=\"compareFn\" [(ngModel)]=\"updateClaimantAddress.state\">\r\n              <option value=\"\" disabled=true>{{updateClaimantAddress.state}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of stateChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['state'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid State.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Zip Code and Zip Code Extension -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipCode\" class=\"col-xs-12 head control-label\">Zip Code:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.zipCode\"\r\n              formControlName=\"zipCode\" placeholder=\"{{updateClaimantAddress.zipCode}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.zipCode content: {{updateClaimantAddress.zipCode}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipExt\" class=\"col-xs-12 head control-label\">Zip Code Extension:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.zipExt\"\r\n              formControlName=\"zipExt\" placeholder=\"{{updateClaimantAddress.zipExt}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.zipExt content: {{updateClaimantAddress.zipExt}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    EditClaimantAddressComponent.ctorParameters = function () { return [
        { type: NgbActiveModal },
        { type: ClaimantService },
        { type: PortalService },
        { type: FormBuilder }
    ]; };
    EditClaimantAddressComponent.propDecorators = {
        address: [{ type: Input }]
    };
    return EditClaimantAddressComponent;
}());
export { EditClaimantAddressComponent };
if (false) {
    /** @type {?} */
    EditClaimantAddressComponent.prototype.address;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.id;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.addressId;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.updateClaimant;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.claimantProfileCopy;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.updateClaimantAddress;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.stateChoices;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.profileForm;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.debug;
    /** @type {?} */
    EditClaimantAddressComponent.prototype.activeModal;
    /**
     * @type {?}
     * @private
     */
    EditClaimantAddressComponent.prototype.claimantService;
    /**
     * @type {?}
     * @private
     */
    EditClaimantAddressComponent.prototype.portalService;
    /**
     * @type {?}
     * @private
     */
    EditClaimantAddressComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtYWRkcmVzcy9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFckU7SUFpQkUsc0NBQW1CLFdBQTJCLEVBQVUsZUFBZ0MsRUFBVSxhQUE0QixFQUFVLEVBQWU7UUFBcEksZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUHZKLG1CQUFjLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLHdCQUFtQixHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDdkMsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUU1QixV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QUEyQjtvQkFDckMseS9PQUFxRDtpQkFFdEQ7Ozs7Z0JBYlEsY0FBYztnQkFNZCxlQUFlO2dCQUNmLGFBQWE7Z0JBTkYsV0FBVzs7OzBCQWM1QixLQUFLOztJQThHUixtQ0FBQztDQUFBLEFBcEhELElBb0hDO1NBL0dZLDRCQUE0Qjs7O0lBQ3ZDLCtDQUFpQjs7SUFFakIsMENBQVc7O0lBQ1gsaURBQWtCOztJQUNsQixzREFBd0M7O0lBQ3hDLDJEQUF1Qzs7SUFDdkMsNkRBQXNDOztJQUN0QyxvREFBNEI7O0lBQzVCLG1EQUF1Qjs7SUFDdkIsNkNBQWM7O0lBRUYsbURBQWtDOzs7OztJQUFFLHVEQUF3Qzs7Ozs7SUFBRSxxREFBb0M7Ozs7O0lBQUUsMENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTVEFURUNIT0lDRVMgfSBmcm9tICcuLi8uLi9jaG9pY2VzL2Nob2ljZXMnO1xyXG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL2FkZHJlc3MnO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL2NsYWltYW50LXNvJztcclxuaW1wb3J0IHsgVXBkYXRlQ2xhaW1hbnRTTyB9IGZyb20gJy4uLy4uL3NlcnZpY2Utb2JqZWN0cy91cGRhdGUtY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3J0YWwtc2VydmljZXMvY2xhaW1hbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3J0YWwtc2VydmljZXMvcG9ydGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcHQtZWRpdC1jbGFpbWFudC1hZGRyZXNzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Q2xhaW1hbnRBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBhZGRyZXNzO1xyXG5cclxuICBpZDogbnVtYmVyO1xyXG4gIGFkZHJlc3NJZDogbnVtYmVyO1xyXG4gIHVwZGF0ZUNsYWltYW50ID0gbmV3IFVwZGF0ZUNsYWltYW50U08oKTtcclxuICBjbGFpbWFudFByb2ZpbGVDb3B5ID0gbmV3IENsYWltYW50U08oKTtcclxuICB1cGRhdGVDbGFpbWFudEFkZHJlc3MgPSBuZXcgQWRkcmVzcygpO1xyXG4gIHN0YXRlQ2hvaWNlcyA9IFNUQVRFQ0hPSUNFUztcclxuICBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG4gIGRlYnVnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgY2xhaW1hbnRTZXJ2aWNlOiBDbGFpbWFudFNlcnZpY2UsIHByaXZhdGUgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weSA9IHtcclxuICAgIC8vICAgY2xhaW1hbnRJZDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uY2xhaW1hbnRJZCxcclxuICAgIC8vICAgc3NuOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5zc24sXHJcbiAgICAvLyAgIGRhdGVPZkJpcnRoOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5kYXRlT2ZCaXJ0aCxcclxuICAgIC8vICAgZmlyc3ROYW1lOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5maXJzdE5hbWUsXHJcbiAgICAvLyAgIG1pZGRsZUluaXRpYWw6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLm1pZGRsZUluaXRpYWwsXHJcbiAgICAvLyAgIGxhc3ROYW1lOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5sYXN0TmFtZSxcclxuICAgIC8vICAgaG9tZVBob25lOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5ob21lUGhvbmUsXHJcbiAgICAvLyAgIG1vYmlsZVBob25lOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5tb2JpbGVQaG9uZSxcclxuICAgIC8vICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5sYW5ndWFnZVByZWZlcmVuY2UsXHJcbiAgICAvLyAgIGVkdWNhdGlvbkxldmVsOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5lZHVjYXRpb25MZXZlbCxcclxuICAgIC8vICAgZ2VuZGVyOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5nZW5kZXIsXHJcbiAgICAvLyAgIHJhY2U6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLnJhY2UsXHJcbiAgICAvLyAgIGV0aG5pY2l0eTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZXRobmljaXR5LFxyXG4gICAgLy8gICBsYXN0SW5zZXJ0VXBkYXRlVFM6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmxhc3RJbnNlcnRVcGRhdGVUUyxcclxuICAgIC8vICAgbGFzdEluc2VydFVwZGF0ZUJ5OiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5sYXN0SW5zZXJ0VXBkYXRlQnksXHJcbiAgICAvLyAgIGl2clBpbjogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uaXZyUGluLFxyXG4gICAgLy8gICBkb2N1bWVudERlbGl2ZXJ5UHJlZmVyZW5jZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2UsXHJcbiAgICAvLyAgIGFkZHJlc3M6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3MsXHJcbiAgICAvLyAgIGVtYWlsOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5lbWFpbCxcclxuICAgIC8vICAgcHJlZmVycmVkT2NjdXBhdGlvbjogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ucHJlZmVycmVkT2NjdXBhdGlvbixcclxuICAgIC8vICAgYWx0ZXJuYXRlQ2xhaW1hbnRJZDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWx0ZXJuYXRlQ2xhaW1hbnRJZFxyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzID0ge1xyXG4gICAgICBhZGRyZXNzTGluZTE6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uYWRkcmVzc0xpbmUxLFxyXG4gICAgICBhZGRyZXNzTGluZTI6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uYWRkcmVzc0xpbmUyLFxyXG4gICAgICBjaXR5OiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLmNpdHksXHJcbiAgICAgIHN0YXRlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLnN0YXRlLFxyXG4gICAgICB6aXBDb2RlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLnppcENvZGUsXHJcbiAgICAgIHppcEV4dDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS56aXBFeHQsXHJcbiAgICAgIGlkOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLmlkLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlQnk6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0ubGFzdEluc2VydFVwZGF0ZUJ5LFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0ubGFzdEluc2VydFVwZGF0ZVRTXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IG51bGwsXHJcbiAgICAgIGhvbWVQaG9uZTogbnVsbCxcclxuICAgICAgbW9iaWxlUGhvbmU6IG51bGwsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IG51bGwsXHJcbiAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgcmFjZTogbnVsbCxcclxuICAgICAgZXRobmljaXR5OiBudWxsLFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogW3RoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzXSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIGFkZHJlc3NMaW5lMTogW251bGxdLFxyXG4gICAgICAgIGFkZHJlc3NMaW5lMjogW251bGxdLFxyXG4gICAgICAgIGNpdHk6IFtudWxsXSxcclxuICAgICAgICBzdGF0ZTogW251bGxdLFxyXG4gICAgICAgIHppcENvZGU6IFtudWxsXSxcclxuICAgICAgICB6aXBFeHQ6IFtudWxsXSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgnQ2xvc2UgY2xpY2snKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNsYWltYW50RGV0YWlscygpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudXBkYXRlQ2xhaW1hbnQpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy51cGRhdGVDbGFpbWFudEFkZHJlc3MpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IG51bGwsXHJcbiAgICAgIGhvbWVQaG9uZTogbnVsbCxcclxuICAgICAgbW9iaWxlUGhvbmU6IG51bGwsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IG51bGwsXHJcbiAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgcmFjZTogbnVsbCxcclxuICAgICAgZXRobmljaXR5OiBudWxsLFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogW3RoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzXSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pZCA9IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmNsYWltYW50SWQ7XHJcbiAgICB0aGlzLmNsYWltYW50U2VydmljZS51cGRhdGVDbGFpbWFudCh0aGlzLmlkLCB0aGlzLnVwZGF0ZUNsYWltYW50KVxyXG4gICAgICAuc3Vic2NyaWJlKHVwZGF0ZUNsYWltYW50ID0+IHsgdGhpcy51cGRhdGVDbGFpbWFudCA9IHVwZGF0ZUNsYWltYW50IH0pO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZUZuKGMxOiBhbnksIGMyOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjMSAmJiBjMiA/IGMxLmlkID09PSBjMi5pZCA6IGMxID09PSBjMjtcclxuICB9XHJcbn1cclxuIl19