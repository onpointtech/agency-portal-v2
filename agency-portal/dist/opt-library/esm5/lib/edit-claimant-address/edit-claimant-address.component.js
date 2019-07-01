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
        this.claimantProfileCopy = this.portalService.claimantSO;
        this.updateClaimantAddress = {
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zipCode: null,
            zipExt: null,
            id: null,
            lastInsertUpdateBy: null,
            lastInsertUpdateTS: null
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
                    template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n\n\n\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <!-- Address Line 1 -->\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"col-xs-12 col-md-12\">\n          <label for=\"addressLine1\" class=\"col-xs-12 head control-label\">Address Line 1:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].addressLine1\"\n              formControlName=\"addressLine1\" placeholder=\"{{claimantProfileCopy.address[0].addressLine1}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.addressLine1 content: {{claimantProfileCopy.address[0].addressLine1}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n      </div>\n\n      <!-- Address Line 2 -->\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"col-xs-12 col-md-12\">\n          <label for=\"addressLine2\" class=\"col-xs-12 head control-label\">Address Line 2:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].addressLine2\"\n              formControlName=\"addressLine2\" placeholder=\"{{claimantProfileCopy.address[0].addressLine2}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.addressLine2 content: {{claimantProfileCopy.address[0].addressLine2}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n      </div>\n\n      <!-- City and State -->\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label for=\"city\" class=\"col-xs-12 head control-label\">City:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].city\"\n              formControlName=\"city\" placeholder=\"{{claimantProfileCopy.address[0].city}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.city content: {{claimantProfileCopy.address[0].city}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            State:\n          </label>\n          <div\n            [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\n            <!-- FORM INPUT -->\n            <select\n              [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'edit_field error': 'edit_field'\"\n              formControlName=\"state\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.address[0].state\">\n              <option value=\"\" disabled=true>{{claimantProfileCopy.address[0].state}}</option>\n              <option [value]=\"choice\" *ngFor=\"let choice of stateChoices\">{{choice}}</option>\n            </select>\n\n            <!-- ERROR   -->\n            <span *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\n            <div *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\n              class=\"text-danger\">\n\n              <!-- ERROR LIST -->\n\n              <p *ngIf=\"profileForm.controls['state'].invalid\" class=\"ng-scope\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n                Please enter a valid State.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Zip Code and Zip Code Extension -->\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label for=\"zipCode\" class=\"col-xs-12 head control-label\">Zip Code:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].zipCode\"\n              formControlName=\"zipCode\" placeholder=\"{{claimantProfileCopy.address[0].zipCode}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.zipCode content: {{claimantProfileCopy.address[0].zipCode}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-6\">\n          <label for=\"zipExt\" class=\"col-xs-12 head control-label\">Zip Code Extension:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].zipExt\"\n              formControlName=\"zipExt\" placeholder=\"{{claimantProfileCopy.address[0].zipExt}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.zipExt content: {{claimantProfileCopy.address[0].zipExt}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </form>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtYWRkcmVzcy9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFckU7SUFpQkUsc0NBQW1CLFdBQTJCLEVBQVUsZUFBZ0MsRUFBVSxhQUE0QixFQUFVLEVBQWU7UUFBcEksZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUHZKLG1CQUFjLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLHdCQUFtQixHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDdkMsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUU1QixV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LHNEQUF3Qzs7SUFDeEMsMkRBQXVDOztJQUN2Qyw2REFBc0M7O0lBQ3RDLG9EQUE0Qjs7SUFDNUIsbURBQXVCOztJQUN2Qiw2Q0FBYzs7SUFFRixtREFBa0M7Ozs7O0lBQUUsdURBQXdDOzs7OztJQUFFLHFEQUFvQzs7Ozs7SUFBRSwwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNUQVRFQ0hPSUNFUyB9IGZyb20gJy4uLy4uL2Nob2ljZXMvY2hvaWNlcyc7XHJcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvYWRkcmVzcyc7XHJcbmltcG9ydCB7IENsYWltYW50U08gfSBmcm9tICcuLi8uLi9zZXJ2aWNlLW9iamVjdHMvY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBVcGRhdGVDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL3VwZGF0ZS1jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IENsYWltYW50U2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9jbGFpbWFudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcnRhbC1zZXJ2aWNlcy9wb3J0YWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29wdC1lZGl0LWNsYWltYW50LWFkZHJlc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRDbGFpbWFudEFkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGFkZHJlc3M7XHJcblxyXG4gIGlkOiBudW1iZXI7XHJcbiAgYWRkcmVzc0lkOiBudW1iZXI7XHJcbiAgdXBkYXRlQ2xhaW1hbnQgPSBuZXcgVXBkYXRlQ2xhaW1hbnRTTygpO1xyXG4gIGNsYWltYW50UHJvZmlsZUNvcHkgPSBuZXcgQ2xhaW1hbnRTTygpO1xyXG4gIHVwZGF0ZUNsYWltYW50QWRkcmVzcyA9IG5ldyBBZGRyZXNzKCk7XHJcbiAgc3RhdGVDaG9pY2VzID0gU1RBVEVDSE9JQ0VTO1xyXG4gIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XHJcbiAgZGVidWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCwgcHJpdmF0ZSBjbGFpbWFudFNlcnZpY2U6IENsYWltYW50U2VydmljZSwgcHJpdmF0ZSBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jbGFpbWFudFByb2ZpbGVDb3B5ID0gdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U087XHJcblxyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudEFkZHJlc3MgPSB7XHJcbiAgICAgIGFkZHJlc3NMaW5lMTogbnVsbCxcclxuICAgICAgYWRkcmVzc0xpbmUyOiBudWxsLFxyXG4gICAgICBjaXR5OiBudWxsLFxyXG4gICAgICBzdGF0ZTogbnVsbCxcclxuICAgICAgemlwQ29kZTogbnVsbCxcclxuICAgICAgemlwRXh0OiBudWxsLFxyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51cGRhdGVDbGFpbWFudCA9IHtcclxuICAgICAgbWlkZGxlSW5pdGlhbDogbnVsbCxcclxuICAgICAgaG9tZVBob25lOiBudWxsLFxyXG4gICAgICBtb2JpbGVQaG9uZTogbnVsbCxcclxuICAgICAgbGFuZ3VhZ2VQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBlZHVjYXRpb25MZXZlbDogbnVsbCxcclxuICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICByYWNlOiBudWxsLFxyXG4gICAgICBldGhuaWNpdHk6IG51bGwsXHJcbiAgICAgIGl2clBpbjogbnVsbCxcclxuICAgICAgZG9jdW1lbnREZWxpdmVyeVByZWZlcmVuY2U6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVUUzogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZUJ5OiBudWxsLFxyXG4gICAgICBhZGRyZXNzOiBbdGhpcy51cGRhdGVDbGFpbWFudEFkZHJlc3NdLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnByb2ZpbGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGFkZHJlc3NMaW5lMTogW251bGxdLFxyXG4gICAgICBhZGRyZXNzTGluZTI6IFtudWxsXSxcclxuICAgICAgY2l0eTogW251bGxdLFxyXG4gICAgICBzdGF0ZTogW251bGxdLFxyXG4gICAgICB6aXBDb2RlOiBbbnVsbF0sXHJcbiAgICAgIHppcEV4dDogW251bGxdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoJ0Nsb3NlIGNsaWNrJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDbGFpbWFudERldGFpbHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwZGF0ZUNsYWltYW50KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzKTtcclxuXHJcbiAgICB0aGlzLmlkID0gdGhpcy5wb3J0YWxTZXJ2aWNlLmNsYWltYW50U08uY2xhaW1hbnRJZDtcclxuICAgIHRoaXMuY2xhaW1hbnRTZXJ2aWNlLnVwZGF0ZUNsYWltYW50KHRoaXMuaWQsIHRoaXMudXBkYXRlQ2xhaW1hbnQpXHJcbiAgICAgIC5zdWJzY3JpYmUodXBkYXRlQ2xhaW1hbnQgPT4geyB0aGlzLnVwZGF0ZUNsYWltYW50ID0gdXBkYXRlQ2xhaW1hbnQgfSk7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlRm4oYzE6IGFueSwgYzI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGMxICYmIGMyID8gYzEuaWQgPT09IGMyLmlkIDogYzEgPT09IGMyO1xyXG4gIH1cclxufVxyXG4iXX0=