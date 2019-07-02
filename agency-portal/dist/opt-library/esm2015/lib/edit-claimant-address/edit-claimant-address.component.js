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
                template: "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n\r\n\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <!-- Address Line 1 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine1\" class=\"col-xs-12 head control-label\">Address Line 1:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.addressLine1\"\r\n              formControlName=\"addressLine1\" placeholder=\"{{updateClaimantAddress.addressLine1}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.addressLine1 content: {{updateClaimantAddress.addressLine1}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Address Line 2 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine2\" class=\"col-xs-12 head control-label\">Address Line 2:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.addressLine2\"\r\n              formControlName=\"addressLine2\" placeholder=\"{{updateClaimantAddress.addressLine2}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.addressLine2 content: {{updateClaimantAddress.addressLine2}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- City and State -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"city\" class=\"col-xs-12 head control-label\">City:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.city\"\r\n              formControlName=\"city\" placeholder=\"{{updateClaimantAddress.city}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.city content: {{updateClaimantAddress.city}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            State:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"state\" [compareWith]=\"compareFn\" [(ngModel)]=\"updateClaimantAddress.state\">\r\n              <option value=\"\" disabled=true>{{updateClaimantAddress.state}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of stateChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['state'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid State.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Zip Code and Zip Code Extension -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipCode\" class=\"col-xs-12 head control-label\">Zip Code:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.zipCode\"\r\n              formControlName=\"zipCode\" placeholder=\"{{updateClaimantAddress.zipCode}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.zipCode content: {{updateClaimantAddress.zipCode}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipExt\" class=\"col-xs-12 head control-label\">Zip Code Extension:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.zipExt\"\r\n              formControlName=\"zipExt\" placeholder=\"{{updateClaimantAddress.zipExt}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.zipExt content: {{updateClaimantAddress.zipExt}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtYWRkcmVzcy9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPckUsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7OztJQVl2QyxZQUFtQixXQUEyQixFQUFVLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxFQUFlO1FBQXBJLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVB2SixtQkFBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdEMsaUJBQVks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O2FBRXREOzs7O1lBYlEsY0FBYztZQU1kLGVBQWU7WUFDZixhQUFhO1lBTkYsV0FBVzs7O3NCQWM1QixLQUFLOzs7O0lBQU4sK0NBQWlCOztJQUVqQiwwQ0FBVzs7SUFDWCxpREFBa0I7O0lBQ2xCLHNEQUF3Qzs7SUFDeEMsMkRBQXVDOztJQUN2Qyw2REFBc0M7O0lBQ3RDLG9EQUE0Qjs7SUFDNUIsbURBQXVCOztJQUN2Qiw2Q0FBYzs7SUFFRixtREFBa0M7Ozs7O0lBQUUsdURBQXdDOzs7OztJQUFFLHFEQUFvQzs7Ozs7SUFBRSwwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNUQVRFQ0hPSUNFUyB9IGZyb20gJy4uLy4uL2Nob2ljZXMvY2hvaWNlcyc7XHJcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvYWRkcmVzcyc7XHJcbmltcG9ydCB7IENsYWltYW50U08gfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBVcGRhdGVDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL3VwZGF0ZS1jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IENsYWltYW50U2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9jbGFpbWFudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9wb3J0YWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29wdC1lZGl0LWNsYWltYW50LWFkZHJlc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDbGFpbWFudEFkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGFkZHJlc3M7XHJcblxyXG4gIGlkOiBudW1iZXI7XHJcbiAgYWRkcmVzc0lkOiBudW1iZXI7XHJcbiAgdXBkYXRlQ2xhaW1hbnQgPSBuZXcgVXBkYXRlQ2xhaW1hbnRTTygpO1xyXG4gIGNsYWltYW50UHJvZmlsZUNvcHkgPSBuZXcgQ2xhaW1hbnRTTygpO1xyXG4gIHVwZGF0ZUNsYWltYW50QWRkcmVzcyA9IG5ldyBBZGRyZXNzKCk7XHJcbiAgc3RhdGVDaG9pY2VzID0gU1RBVEVDSE9JQ0VTO1xyXG4gIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XHJcbiAgZGVidWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCwgcHJpdmF0ZSBjbGFpbWFudFNlcnZpY2U6IENsYWltYW50U2VydmljZSwgcHJpdmF0ZSBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5ID0ge1xyXG4gICAgLy8gICBjbGFpbWFudElkOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5jbGFpbWFudElkLFxyXG4gICAgLy8gICBzc246IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLnNzbixcclxuICAgIC8vICAgZGF0ZU9mQmlydGg6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmRhdGVPZkJpcnRoLFxyXG4gICAgLy8gICBmaXJzdE5hbWU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmZpcnN0TmFtZSxcclxuICAgIC8vICAgbWlkZGxlSW5pdGlhbDogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ubWlkZGxlSW5pdGlhbCxcclxuICAgIC8vICAgbGFzdE5hbWU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmxhc3ROYW1lLFxyXG4gICAgLy8gICBob21lUGhvbmU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmhvbWVQaG9uZSxcclxuICAgIC8vICAgbW9iaWxlUGhvbmU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLm1vYmlsZVBob25lLFxyXG4gICAgLy8gICBsYW5ndWFnZVByZWZlcmVuY2U6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmxhbmd1YWdlUHJlZmVyZW5jZSxcclxuICAgIC8vICAgZWR1Y2F0aW9uTGV2ZWw6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmVkdWNhdGlvbkxldmVsLFxyXG4gICAgLy8gICBnZW5kZXI6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmdlbmRlcixcclxuICAgIC8vICAgcmFjZTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ucmFjZSxcclxuICAgIC8vICAgZXRobmljaXR5OiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5ldGhuaWNpdHksXHJcbiAgICAvLyAgIGxhc3RJbnNlcnRVcGRhdGVUUzogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08ubGFzdEluc2VydFVwZGF0ZVRTLFxyXG4gICAgLy8gICBsYXN0SW5zZXJ0VXBkYXRlQnk6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmxhc3RJbnNlcnRVcGRhdGVCeSxcclxuICAgIC8vICAgaXZyUGluOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5pdnJQaW4sXHJcbiAgICAvLyAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5kb2N1bWVudERlbGl2ZXJ5UHJlZmVyZW5jZSxcclxuICAgIC8vICAgYWRkcmVzczogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzcyxcclxuICAgIC8vICAgZW1haWw6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmVtYWlsLFxyXG4gICAgLy8gICBwcmVmZXJyZWRPY2N1cGF0aW9uOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5wcmVmZXJyZWRPY2N1cGF0aW9uLFxyXG4gICAgLy8gICBhbHRlcm5hdGVDbGFpbWFudElkOiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hbHRlcm5hdGVDbGFpbWFudElkXHJcbiAgICAvLyB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudEFkZHJlc3MgPSB7XHJcbiAgICAgIGFkZHJlc3NMaW5lMTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS5hZGRyZXNzTGluZTEsXHJcbiAgICAgIGFkZHJlc3NMaW5lMjogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS5hZGRyZXNzTGluZTIsXHJcbiAgICAgIGNpdHk6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uY2l0eSxcclxuICAgICAgc3RhdGU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uc3RhdGUsXHJcbiAgICAgIHppcENvZGU6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uemlwQ29kZSxcclxuICAgICAgemlwRXh0OiB0aGlzLnBvcnRhbFNlcnZpY2UuY2xhaW1hbnRTTy5hZGRyZXNzWzBdLnppcEV4dCxcclxuICAgICAgaWQ6IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmFkZHJlc3NbMF0uaWQsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS5sYXN0SW5zZXJ0VXBkYXRlQnksXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uYWRkcmVzc1swXS5sYXN0SW5zZXJ0VXBkYXRlVFNcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHtcclxuICAgICAgbWlkZGxlSW5pdGlhbDogbnVsbCxcclxuICAgICAgaG9tZVBob25lOiBudWxsLFxyXG4gICAgICBtb2JpbGVQaG9uZTogbnVsbCxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogbnVsbCxcclxuICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICByYWNlOiBudWxsLFxyXG4gICAgICBldGhuaWNpdHk6IG51bGwsXHJcbiAgICAgIGl2clBpbjogbnVsbCxcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBhZGRyZXNzOiBbdGhpcy51cGRhdGVDbGFpbWFudEFkZHJlc3NdLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnByb2ZpbGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgYWRkcmVzc0xpbmUxOiBbbnVsbF0sXHJcbiAgICAgICAgYWRkcmVzc0xpbmUyOiBbbnVsbF0sXHJcbiAgICAgICAgY2l0eTogW251bGxdLFxyXG4gICAgICAgIHN0YXRlOiBbbnVsbF0sXHJcbiAgICAgICAgemlwQ29kZTogW251bGxdLFxyXG4gICAgICAgIHppcEV4dDogW251bGxdLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCdDbG9zZSBjbGljaycpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xhaW1hbnREZXRhaWxzKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy51cGRhdGVDbGFpbWFudCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwZGF0ZUNsYWltYW50QWRkcmVzcyk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHtcclxuICAgICAgbWlkZGxlSW5pdGlhbDogbnVsbCxcclxuICAgICAgaG9tZVBob25lOiBudWxsLFxyXG4gICAgICBtb2JpbGVQaG9uZTogbnVsbCxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogbnVsbCxcclxuICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICByYWNlOiBudWxsLFxyXG4gICAgICBldGhuaWNpdHk6IG51bGwsXHJcbiAgICAgIGl2clBpbjogbnVsbCxcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBhZGRyZXNzOiBbdGhpcy51cGRhdGVDbGFpbWFudEFkZHJlc3NdLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmlkID0gdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uY2xhaW1hbnRJZDtcclxuICAgIHRoaXMuY2xhaW1hbnRTZXJ2aWNlLnVwZGF0ZUNsYWltYW50KHRoaXMuaWQsIHRoaXMudXBkYXRlQ2xhaW1hbnQpXHJcbiAgICAgIC5zdWJzY3JpYmUodXBkYXRlQ2xhaW1hbnQgPT4geyB0aGlzLnVwZGF0ZUNsYWltYW50ID0gdXBkYXRlQ2xhaW1hbnQgfSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlRm4oYzE6IGFueSwgYzI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGMxICYmIGMyID8gYzEuaWQgPT09IGMyLmlkIDogYzEgPT09IGMyO1xyXG4gIH1cclxufVxyXG4iXX0=