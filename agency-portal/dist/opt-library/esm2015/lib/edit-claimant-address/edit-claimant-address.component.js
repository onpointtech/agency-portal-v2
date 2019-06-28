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
                template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n\n\n\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <!-- Address Line 1 -->\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"col-xs-12 col-md-12\">\n          <label for=\"addressLine1\" class=\"col-xs-12 head control-label\">Address Line 1:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].addressLine1\"\n              formControlName=\"addressLine1\" placeholder=\"{{claimantProfileCopy.address[0].addressLine1}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.addressLine1 content: {{claimantProfileCopy.address[0].addressLine1}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n      </div>\n\n      <!-- Address Line 2 -->\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"col-xs-12 col-md-12\">\n          <label for=\"addressLine2\" class=\"col-xs-12 head control-label\">Address Line 2:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].addressLine2\"\n              formControlName=\"addressLine2\" placeholder=\"{{claimantProfileCopy.address[0].addressLine2}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.addressLine2 content: {{claimantProfileCopy.address[0].addressLine2}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n      </div>\n\n      <!-- City and State -->\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label for=\"city\" class=\"col-xs-12 head control-label\">City:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].city\"\n              formControlName=\"city\" placeholder=\"{{claimantProfileCopy.address[0].city}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.city content: {{claimantProfileCopy.address[0].city}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-6\">\n          <label class=\"col-xs-12 head control-label\">\n            State:\n          </label>\n          <div\n            [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\n            <!-- FORM INPUT -->\n            <select\n              [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'edit_field error': 'edit_field'\"\n              formControlName=\"state\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.address[0].state\">\n              <option value=\"\" disabled=true>{{claimantProfileCopy.address[0].state}}</option>\n              <option [value]=\"choice\" *ngFor=\"let choice of stateChoices\">{{choice}}</option>\n            </select>\n\n            <!-- ERROR   -->\n            <span *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\n            <div *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\n              class=\"text-danger\">\n\n              <!-- ERROR LIST -->\n\n              <p *ngIf=\"profileForm.controls['state'].invalid\" class=\"ng-scope\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n                Please enter a valid State.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Zip Code and Zip Code Extension -->\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"col-xs-12 col-md-6\">\n          <label for=\"zipCode\" class=\"col-xs-12 head control-label\">Zip Code:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].zipCode\"\n              formControlName=\"zipCode\" placeholder=\"{{claimantProfileCopy.address[0].zipCode}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.zipCode content: {{claimantProfileCopy.address[0].zipCode}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-6\">\n          <label for=\"zipExt\" class=\"col-xs-12 head control-label\">Zip Code Extension:\n          </label>\n          <div class=\"col-xs-12 has-feedback\">\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"claimantProfileCopy.address[0].zipExt\"\n              formControlName=\"zipExt\" placeholder=\"{{claimantProfileCopy.address[0].zipExt}}\">\n          </div>\n          <div *ngIf=\"debug==true\">\n            <br>\n            DEBUG: model.zipExt content: {{claimantProfileCopy.address[0].zipExt}}\n            <br>\n            DEBUG: profileForm status: {{profileForm.status}}\n            <br>\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\n            <br>\n            DEBUG: profileForm touched: {{profileForm.touched}}\n            <br>\n            DEBUG: model content: {{ claimantProfileCopy | json }}\n            <br>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </form>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2VkaXQtY2xhaW1hbnQtYWRkcmVzcy9lZGl0LWNsYWltYW50LWFkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPckUsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7OztJQVl2QyxZQUFtQixXQUEyQixFQUFVLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxFQUFlO1FBQXBJLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVB2SixtQkFBYyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdEMsaUJBQVks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SUFDdkIsNkNBQWM7O0lBRUYsbURBQWtDOzs7OztJQUFFLHVEQUF3Qzs7Ozs7SUFBRSxxREFBb0M7Ozs7O0lBQUUsMENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTVEFURUNIT0lDRVMgfSBmcm9tICcuLi8uLi9jaG9pY2VzL2Nob2ljZXMnO1xyXG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL2FkZHJlc3MnO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNPIH0gZnJvbSAnLi4vLi4vc2VydmljZS1vYmplY3RzL2NsYWltYW50LXNvJztcclxuaW1wb3J0IHsgVXBkYXRlQ2xhaW1hbnRTTyB9IGZyb20gJy4uLy4uL3NlcnZpY2Utb2JqZWN0cy91cGRhdGUtY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBDbGFpbWFudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3J0YWwtc2VydmljZXMvY2xhaW1hbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3J0YWwtc2VydmljZXMvcG9ydGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcHQtZWRpdC1jbGFpbWFudC1hZGRyZXNzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Q2xhaW1hbnRBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBhZGRyZXNzO1xyXG5cclxuICBpZDogbnVtYmVyO1xyXG4gIGFkZHJlc3NJZDogbnVtYmVyO1xyXG4gIHVwZGF0ZUNsYWltYW50ID0gbmV3IFVwZGF0ZUNsYWltYW50U08oKTtcclxuICBjbGFpbWFudFByb2ZpbGVDb3B5ID0gbmV3IENsYWltYW50U08oKTtcclxuICB1cGRhdGVDbGFpbWFudEFkZHJlc3MgPSBuZXcgQWRkcmVzcygpO1xyXG4gIHN0YXRlQ2hvaWNlcyA9IFNUQVRFQ0hPSUNFUztcclxuICBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG4gIGRlYnVnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgY2xhaW1hbnRTZXJ2aWNlOiBDbGFpbWFudFNlcnZpY2UsIHByaXZhdGUgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2xhaW1hbnRQcm9maWxlQ29weSA9IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzID0ge1xyXG4gICAgICBhZGRyZXNzTGluZTE6IG51bGwsXHJcbiAgICAgIGFkZHJlc3NMaW5lMjogbnVsbCxcclxuICAgICAgY2l0eTogbnVsbCxcclxuICAgICAgc3RhdGU6IG51bGwsXHJcbiAgICAgIHppcENvZGU6IG51bGwsXHJcbiAgICAgIHppcEV4dDogbnVsbCxcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgbGFzdEluc2VydFVwZGF0ZVRTOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2xhaW1hbnQgPSB7XHJcbiAgICAgIG1pZGRsZUluaXRpYWw6IG51bGwsXHJcbiAgICAgIGhvbWVQaG9uZTogbnVsbCxcclxuICAgICAgbW9iaWxlUGhvbmU6IG51bGwsXHJcbiAgICAgIGxhbmd1YWdlUHJlZmVyZW5jZTogbnVsbCxcclxuICAgICAgZWR1Y2F0aW9uTGV2ZWw6IG51bGwsXHJcbiAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgcmFjZTogbnVsbCxcclxuICAgICAgZXRobmljaXR5OiBudWxsLFxyXG4gICAgICBpdnJQaW46IG51bGwsXHJcbiAgICAgIGRvY3VtZW50RGVsaXZlcnlQcmVmZXJlbmNlOiBudWxsLFxyXG4gICAgICBsYXN0SW5zZXJ0VXBkYXRlVFM6IG51bGwsXHJcbiAgICAgIGxhc3RJbnNlcnRVcGRhdGVCeTogbnVsbCxcclxuICAgICAgYWRkcmVzczogW3RoaXMudXBkYXRlQ2xhaW1hbnRBZGRyZXNzXSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBhZGRyZXNzTGluZTE6IFtudWxsXSxcclxuICAgICAgYWRkcmVzc0xpbmUyOiBbbnVsbF0sXHJcbiAgICAgIGNpdHk6IFtudWxsXSxcclxuICAgICAgc3RhdGU6IFtudWxsXSxcclxuICAgICAgemlwQ29kZTogW251bGxdLFxyXG4gICAgICB6aXBFeHQ6IFtudWxsXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCdDbG9zZSBjbGljaycpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xhaW1hbnREZXRhaWxzKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy51cGRhdGVDbGFpbWFudCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwZGF0ZUNsYWltYW50QWRkcmVzcyk7XHJcblxyXG4gICAgdGhpcy5pZCA9IHRoaXMucG9ydGFsU2VydmljZS5jbGFpbWFudFNPLmNsYWltYW50SWQ7XHJcbiAgICB0aGlzLmNsYWltYW50U2VydmljZS51cGRhdGVDbGFpbWFudCh0aGlzLmlkLCB0aGlzLnVwZGF0ZUNsYWltYW50KVxyXG4gICAgICAuc3Vic2NyaWJlKHVwZGF0ZUNsYWltYW50ID0+IHsgdGhpcy51cGRhdGVDbGFpbWFudCA9IHVwZGF0ZUNsYWltYW50IH0pO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgY29tcGFyZUZuKGMxOiBhbnksIGMyOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjMSAmJiBjMiA/IGMxLmlkID09PSBjMi5pZCA6IGMxID09PSBjMjtcclxuICB9XHJcbn1cclxuIl19