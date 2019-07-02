/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
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
            addressLine1: [null, Validators.required],
            addressLine2: [null, Validators.required],
            city: [null, Validators.required],
            state: [null, Validators.required],
            zipCode: [null, Validators.required],
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
                    template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n\r\n\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <!-- Address Line 1 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine1\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Address Line 1:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['addressLine1'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.addressLine1\"\r\n            formControlName = \"addressLine1\">\r\n\r\n            <span *ngIf = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched\"\r\n          class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n          aria-hidden = \"true\">\r\n        </span>\r\n\r\n        <div class = \"text-danger\">\r\n          <val-errors controlName = \"addressLine1\">\r\n            <ng-template valError = \"required\">\r\n              <p class = \"ng-scope\">\r\n                <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Address Line 1.\r\n              </p>\r\n            </ng-template>\r\n          </val-errors>\r\n        </div>\r\n\r\n          </div>\r\n      </div>\r\n\r\n      <!-- Address Line 2 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine2\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Address Line 2:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['addressLine2'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.addressLine2\"\r\n            formControlName = \"addressLine2\">\r\n\r\n            <span *ngIf = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched\"\r\n          class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n          aria-hidden = \"true\">\r\n        </span>\r\n\r\n        <div class = \"text-danger\">\r\n          <val-errors controlName = \"addressLine2\">\r\n            <ng-template valError = \"required\">\r\n              <p class = \"ng-scope\">\r\n                <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Address Line 2.\r\n              </p>\r\n            </ng-template>\r\n          </val-errors>\r\n        </div>\r\n\r\n          </div>\r\n      </div>\r\n\r\n      <!-- City and State -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"city\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>City:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['city'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.city\" \r\n            formControlName = \"city\">\r\n\r\n            <span *ngIf = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"city\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid City.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n          \r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>State:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"state\" [compareWith]=\"compareFn\" [(ngModel)]=\"updateClaimantAddress.state\">\r\n              <option value=\"\" disabled=true>{{updateClaimantAddress.state}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of stateChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['state'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid State.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Zip Code and Zip Code Extension -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipCode\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Zip Code:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['zipCode'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.zipCode\"\r\n            formControlName = \"zipCode\">\r\n\r\n            <span *ngIf = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"zipCode\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid Zip Code.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipExt\" class=\"col-xs-12 head control-label\">Zip Code Extension:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.zipExt\"\r\n              formControlName=\"zipExt\" placeholder=\"{{updateClaimantAddress.zipExt}}\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtYWRkcmVzcy9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFO0lBaUJFLHNDQUFtQixXQUEyQixFQUFVLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxFQUFlO1FBQXBJLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVB2SixtQkFBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdEMsaUJBQVksR0FBRyxZQUFZLENB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d0M7O0lBQ3hDLDJEQUF1Qzs7SUFDdkMsNkRBQXNDOztJQUN0QyxvREFBNEI7O0lBQzVCLG1EQUF1Qjs7SUFDdkIsNkNBQWM7O0lBRUYsbURBQWtDOzs7OztJQUFFLHVEQUF3Qzs7Ozs7SUFBRSxxREFBb0M7Ozs7O0lBQUUsMENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTVEFURUNIT0lDRVMgfSBmcm9tICcuLi8uLi9jaG9pY2VzL2Nob2ljZXMnO1xyXG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL2FkZHJlc3MnO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL2NsYWltYW50LXNvJztcclxuaW1wb3J0IHsgVXBkYXRlQ2xhaW1hbnRTTyB9IGZyb20gJy4uLy4uL3NlcnZpY2Utb2JqZWN0cy91cGRhdGUtY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3J0YWwtc2VydmljZXMvY2xhaW1hbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3J0YWwtc2VydmljZXMvcG9ydGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcHQtZWRpdC1jbGFpbWFudC1hZGRyZXNzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Q2xhaW1hbnRBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBhZGRyZXNzO1xyXG5cclxuICBpZDogbnVtYmVyO1xyXG4gIGFkZHJlc3NJZDogbnVtYmVyO1xyXG4gIHVwZGF0ZUNsYWltYW50ID0gbmV3IFVwZGF0ZUNsYWltYW50U08oKTtcclxuICBjbGFpbWFudFByb2ZpbGVDb3B5ID0gbmV3IENsYWltYW50U08oKTtcclxuICB1cGRhdGVDbGFpbWFudEFkZHJlc3MgPSBuZXcgQWRkcmVzcygpO1xyXG4gIHN0YXRlQ2hvaWNlcyA9IFNUQVRFQ0hPSUNFUztcclxuICBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG4gIGRlYnVnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgY2xhaW1hbnRTZXJ2aWNlOiBDbGFpbWFudFNlcnZpY2UsIHByaXZhdGUgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNsYWltYW50QWRkcmVzcyA9IHtcclxuICAgICAgYWRkcmVzc0xpbmUxOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLmFkZHJlc3NMaW5lMSxcclxuICAgICAgYWRkcmVzc0xpbmUyOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLmFkZHJlc3NMaW5lMixcclxuICAgICAgY2l0eTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS5jaXR5LFxyXG4gICAgICBzdGF0ZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS5zdGF0ZSxcclxuICAgICAgemlwQ29kZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS56aXBDb2RlLFxyXG4gICAgICB6aXBFeHQ6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uemlwRXh0LFxyXG4gICAgICBpZDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS5pZCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLmxhc3RJbnNlcnRVcGRhdGVCeSxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZVRTOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLmxhc3RJbnNlcnRVcGRhdGVUU1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNsYWltYW50ID0ge1xyXG4gICAgICBtaWRkbGVJbml0aWFsOiBudWxsLFxyXG4gICAgICBob21lUGhvbmU6IG51bGwsXHJcbiAgICAgIG1vYmlsZVBob25lOiBudWxsLFxyXG4gICAgICBsYW5ndWFnZVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGVkdWNhdGlvbkxldmVsOiBudWxsLFxyXG4gICAgICBnZW5kZXI6IG51bGwsXHJcbiAgICAgIHJhY2U6IG51bGwsXHJcbiAgICAgIGV0aG5pY2l0eTogbnVsbCxcclxuICAgICAgaXZyUGluOiBudWxsLFxyXG4gICAgICBkb2N1bWVudERlbGl2ZXJ5UHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZVRTOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlQnk6IG51bGwsXHJcbiAgICAgIGFkZHJlc3M6IFt0aGlzLnVwZGF0ZUNsYWltYW50QWRkcmVzc10sXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucHJvZmlsZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICBhZGRyZXNzTGluZTE6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICBhZGRyZXNzTGluZTI6IFtudWxsLCAgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgY2l0eTogW251bGwsICBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICBzdGF0ZTogW251bGwsICBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB6aXBDb2RlOiBbbnVsbCwgIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIHppcEV4dDogW251bGxdLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCdDbG9zZSBjbGljaycpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xhaW1hbnREZXRhaWxzKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy51cGRhdGVDbGFpbWFudCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwZGF0ZUNsYWltYW50QWRkcmVzcyk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHtcclxuICAgICAgbWlkZGxlSW5pdGlhbDogbnVsbCxcclxuICAgICAgaG9tZVBob25lOiBudWxsLFxyXG4gICAgICBtb2JpbGVQaG9uZTogbnVsbCxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogbnVsbCxcclxuICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICByYWNlOiBudWxsLFxyXG4gICAgICBldGhuaWNpdHk6IG51bGwsXHJcbiAgICAgIGl2clBpbjogbnVsbCxcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBhZGRyZXNzOiBbdGhpcy51cGRhdGVDbGFpbWFudEFkZHJlc3NdLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmlkID0gdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uY2xhaW1hbnRJZDtcclxuICAgIHRoaXMuY2xhaW1hbnRTZXJ2aWNlLnVwZGF0ZUNsYWltYW50KHRoaXMuaWQsIHRoaXMudXBkYXRlQ2xhaW1hbnQpXHJcbiAgICAgIC5zdWJzY3JpYmUodXBkYXRlQ2xhaW1hbnQgPT4geyB0aGlzLnVwZGF0ZUNsYWltYW50ID0gdXBkYXRlQ2xhaW1hbnQgfSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlRm4oYzE6IGFueSwgYzI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGMxICYmIGMyID8gYzEuaWQgPT09IGMyLmlkIDogYzEgPT09IGMyO1xyXG4gIH1cclxufVxyXG4iXX0=