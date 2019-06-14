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
                template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-dropdown-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"dropdown\"> {{labelName}}:\r\n        </label>\r\n        <select  id=\"dropdown\" class=\"form-control\" [(ngModel)]=\"userProfileModel.dropdown\" formControlName=\"dropdown\" >\r\n        <option *ngFor=\"let choice of dropdownChoices; let i=index\" [ngValue]=\"choice\"> {{choice}}</option>\r\n        </select>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['dropdown'].invalid && (profileForm.controls['dropdown'].dirty || profileForm.controls['dropdown'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['dropdown'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['dropdown'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n    </form >\r\n  \r\n  </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTzFDLE1BQU0sT0FBTyxzQkFBc0I7SUFNakM7UUFLQSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5GLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFLRCxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7WUFuQnRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyw0cURBQThDO3lCQUNyQyxzRUFBc0U7YUFDaEY7Ozs7O3dCQUVFLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFITiwyQ0FBMkI7O0lBQzNCLGlEQUFtQzs7SUFDbkMsa0RBQTRDOztJQUM1Qyw2Q0FBZ0M7O0lBT2hDLHVDQUFhOztJQUNiLDJDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1vZGVsIH0gZnJvbSAnLi4vdXNlci1wcm9maWxlLW1vZGVsJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29wdGltdW0tZHJvcGRvd24taW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbJ2lucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCAge2JvcmRlcjogMnB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqLyB9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2hvaWNlczogc3RyaW5nW107XHJcbiAgQElucHV0KCkgdXNlclByb2ZpbGVNb2RlbDogVXNlclByb2ZpbGVNb2RlbDtcclxuICBASW5wdXQoKSBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGRlYnVnID0gdHJ1ZTtcclxuICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxyXG59XHJcbiJdfQ==