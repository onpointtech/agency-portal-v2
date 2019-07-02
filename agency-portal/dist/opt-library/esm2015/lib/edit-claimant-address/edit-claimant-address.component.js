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
export class EditClaimantAddressComponent {
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
        this.updateClaimantAddress = new Address();
        this.stateChoices = STATECHOICES;
        this.debug = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
EditClaimantAddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'opt-edit-claimant-address',
                template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n\r\n\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <!-- Address Line 1 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine1\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Address Line 1:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['addressLine1'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.addressLine1\"\r\n            formControlName = \"addressLine1\">\r\n\r\n            <span *ngIf = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched\"\r\n          class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n          aria-hidden = \"true\">\r\n        </span>\r\n\r\n        <div class = \"text-danger\">\r\n          <val-errors controlName = \"addressLine1\">\r\n            <ng-template valError = \"required\">\r\n              <p class = \"ng-scope\">\r\n                <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Address Line 1.\r\n              </p>\r\n            </ng-template>\r\n          </val-errors>\r\n        </div>\r\n\r\n          </div>\r\n      </div>\r\n\r\n      <!-- Address Line 2 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine2\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Address Line 2:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['addressLine2'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.addressLine2\"\r\n            formControlName = \"addressLine2\">\r\n\r\n            <span *ngIf = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched\"\r\n          class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n          aria-hidden = \"true\">\r\n        </span>\r\n\r\n        <div class = \"text-danger\">\r\n          <val-errors controlName = \"addressLine2\">\r\n            <ng-template valError = \"required\">\r\n              <p class = \"ng-scope\">\r\n                <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Address Line 2.\r\n              </p>\r\n            </ng-template>\r\n          </val-errors>\r\n        </div>\r\n\r\n          </div>\r\n      </div>\r\n\r\n      <!-- City and State -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"city\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>City:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['city'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.city\" \r\n            formControlName = \"city\">\r\n\r\n            <span *ngIf = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"city\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid City.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n          \r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>State:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"state\" [compareWith]=\"compareFn\" [(ngModel)]=\"updateClaimantAddress.state\">\r\n              <option value=\"\" disabled=true>{{updateClaimantAddress.state}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of stateChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['state'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid State.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Zip Code and Zip Code Extension -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipCode\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Zip Code:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['zipCode'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.zipCode\"\r\n            formControlName = \"zipCode\">\r\n\r\n            <span *ngIf = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"zipCode\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid Zip Code.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipExt\" class=\"col-xs-12 head control-label\">Zip Code Extension:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.zipExt\"\r\n              formControlName=\"zipExt\" placeholder=\"{{updateClaimantAddress.zipExt}}\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
            }] }
];
/** @nocollapse */
EditClaimantAddressComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: ClaimantService },
    { type: PortalService },
    { type: FormBuilder }
];
EditClaimantAddressComponent.propDecorators = {
    address: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtYWRkcmVzcy9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBT3JFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7SUFZdkMsWUFBbUIsV0FBMkIsRUFBVSxlQUFnQyxFQUFVLGFBQTRCLEVBQVUsRUFBZTtRQUFwSSxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFQdkosbUJBQWMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDeEMsd0JBQW1CLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FB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Q0FBYzs7SUFFRixtREFBa0M7Ozs7O0lBQUUsdURBQXdDOzs7OztJQUFFLHFEQUFvQzs7Ozs7SUFBRSwwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNUQVRFQ0hPSUNFUyB9IGZyb20gJy4uLy4uL2Nob2ljZXMvY2hvaWNlcyc7XHJcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvYWRkcmVzcyc7XHJcbmltcG9ydCB7IENsYWltYW50U08gfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBVcGRhdGVDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL3VwZGF0ZS1jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IENsYWltYW50U2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9jbGFpbWFudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9wb3J0YWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29wdC1lZGl0LWNsYWltYW50LWFkZHJlc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDbGFpbWFudEFkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGFkZHJlc3M7XHJcblxyXG4gIGlkOiBudW1iZXI7XHJcbiAgYWRkcmVzc0lkOiBudW1iZXI7XHJcbiAgdXBkYXRlQ2xhaW1hbnQgPSBuZXcgVXBkYXRlQ2xhaW1hbnRTTygpO1xyXG4gIGNsYWltYW50UHJvZmlsZUNvcHkgPSBuZXcgQ2xhaW1hbnRTTygpO1xyXG4gIHVwZGF0ZUNsYWltYW50QWRkcmVzcyA9IG5ldyBBZGRyZXNzKCk7XHJcbiAgc3RhdGVDaG9pY2VzID0gU1RBVEVDSE9JQ0VTO1xyXG4gIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XHJcbiAgZGVidWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCwgcHJpdmF0ZSBjbGFpbWFudFNlcnZpY2U6IENsYWltYW50U2VydmljZSwgcHJpdmF0ZSBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzID0ge1xyXG4gICAgICBhZGRyZXNzTGluZTE6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uYWRkcmVzc0xpbmUxLFxyXG4gICAgICBhZGRyZXNzTGluZTI6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uYWRkcmVzc0xpbmUyLFxyXG4gICAgICBjaXR5OiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLmNpdHksXHJcbiAgICAgIHN0YXRlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLnN0YXRlLFxyXG4gICAgICB6aXBDb2RlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLnppcENvZGUsXHJcbiAgICAgIHppcEV4dDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS56aXBFeHQsXHJcbiAgICAgIGlkOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLmlkLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlQnk6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0ubGFzdEluc2VydFVwZGF0ZUJ5LFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0ubGFzdEluc2VydFVwZGF0ZVRTXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IG51bGwsXHJcbiAgICAgIGhvbWVQaG9uZTogbnVsbCxcclxuICAgICAgbW9iaWxlUGhvbmU6IG51bGwsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IG51bGwsXHJcbiAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgcmFjZTogbnVsbCxcclxuICAgICAgZXRobmljaXR5OiBudWxsLFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogW3RoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzXSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIGFkZHJlc3NMaW5lMTogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIGFkZHJlc3NMaW5lMjogW251bGwsICBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICBjaXR5OiBbbnVsbCwgIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIHN0YXRlOiBbbnVsbCwgIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIHppcENvZGU6IFtudWxsLCAgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgemlwRXh0OiBbbnVsbF0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoJ0Nsb3NlIGNsaWNrJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDbGFpbWFudERldGFpbHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwZGF0ZUNsYWltYW50KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNsYWltYW50ID0ge1xyXG4gICAgICBtaWRkbGVJbml0aWFsOiBudWxsLFxyXG4gICAgICBob21lUGhvbmU6IG51bGwsXHJcbiAgICAgIG1vYmlsZVBob25lOiBudWxsLFxyXG4gICAgICBsYW5ndWFnZVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGVkdWNhdGlvbkxldmVsOiBudWxsLFxyXG4gICAgICBnZW5kZXI6IG51bGwsXHJcbiAgICAgIHJhY2U6IG51bGwsXHJcbiAgICAgIGV0aG5pY2l0eTogbnVsbCxcclxuICAgICAgaXZyUGluOiBudWxsLFxyXG4gICAgICBkb2N1bWVudERlbGl2ZXJ5UHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZVRTOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlQnk6IG51bGwsXHJcbiAgICAgIGFkZHJlc3M6IFt0aGlzLnVwZGF0ZUNsYWltYW50QWRkcmVzc10sXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaWQgPSB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5jbGFpbWFudElkO1xyXG4gICAgdGhpcy5jbGFpbWFudFNlcnZpY2UudXBkYXRlQ2xhaW1hbnQodGhpcy5pZCwgdGhpcy51cGRhdGVDbGFpbWFudClcclxuICAgICAgLnN1YnNjcmliZSh1cGRhdGVDbGFpbWFudCA9PiB7IHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB1cGRhdGVDbGFpbWFudCB9KTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVGbihjMTogYW55LCBjMjogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gYzEgJiYgYzIgPyBjMS5pZCA9PT0gYzIuaWQgOiBjMSA9PT0gYzI7XHJcbiAgfVxyXG59XHJcbiJdfQ==