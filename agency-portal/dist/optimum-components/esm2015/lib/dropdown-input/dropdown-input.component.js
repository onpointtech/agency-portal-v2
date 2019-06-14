/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
export class DropdownInputComponent {
    constructor() {
        this.debug = true;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onSubmit() { this.submitted = true; }
}
DropdownInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-dropdown-input',
                template: "<div class=\"container\">\n    <div *ngIf=\"debug==true\">\n      <h4> Optimum-dropdown-input component</h4>\n    </div>\n    <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n      <div class=\"form-group\">\n        <label for=\"dropdown\"> {{labelName}}:\n        </label>\n        <select  id=\"dropdown\" class=\"form-control\" [(ngModel)]=\"userProfileModel.dropdown\" formControlName=\"dropdown\" >\n        <option *ngFor=\"let choice of dropdownChoices; let i=index\" [ngValue]=\"choice\"> {{choice}}</option>\n        </select>\n        <div *ngIf=\"debug==true\">\n          <br>\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\n          <br>\n          DEBUG: profileForm status: {{profileForm.status}}\n          <br>\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\n          <br>\n          DEBUG: profileForm touched: {{profileForm.touched}}\n          <br>\n          DEBUG: model content: {{ userProfileModel | json }}\n          <br>\n        </div>\n        <div\n          *ngIf=\"profileForm.controls['dropdown'].invalid && (profileForm.controls['dropdown'].dirty || profileForm.controls['dropdown'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"profileForm.controls['dropdown'].errors.required\">\n            This is required.\n          </div>\n          <div *ngIf=\"profileForm.controls['dropdown'].invalid\">\n            Error in input.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form >\n  \n  </div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
DropdownInputComponent.ctorParameters = () => [];
DropdownInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    dropdownChoices: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DropdownInputComponent.prototype.labelName;
    /** @type {?} */
    DropdownInputComponent.prototype.dropdownChoices;
    /** @type {?} */
    DropdownInputComponent.prototype.userProfileModel;
    /** @type {?} */
    DropdownInputComponent.prototype.profileForm;
    /** @type {?} */
    DropdownInputComponent.prototype.debug;
    /** @type {?} */
    DropdownInputComponent.prototype.submitted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTzFDLE1BQU0sT0FBTyxzQkFBc0I7SUFNakM7UUFLQSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5GLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFLRCxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7WUFuQnRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxnbURBQThDO3lCQUNyQyxzRUFBc0U7YUFDaEY7Ozs7O3dCQUVFLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFITiwyQ0FBMkI7O0lBQzNCLGlEQUFtQzs7SUFDbkMsa0RBQTRDOztJQUM1Qyw2Q0FBZ0M7O0lBT2hDLHVDQUFhOztJQUNiLDJDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2RlbCB9IGZyb20gJy4uL3VzZXItcHJvZmlsZS1tb2RlbCc7XG5pbXBvcnQgeyBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW11bS1kcm9wZG93bi1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZHJvcGRvd25DaG9pY2VzOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgdXNlclByb2ZpbGVNb2RlbDogVXNlclByb2ZpbGVNb2RlbDtcbiAgQElucHV0KCkgcHJvZmlsZUZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGVidWcgPSB0cnVlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICBvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XG59XG4iXX0=