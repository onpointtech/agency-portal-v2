/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
var DropdownInputComponent = /** @class */ (function () {
    function DropdownInputComponent() {
        this.debug = true;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    DropdownInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DropdownInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    DropdownInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-dropdown-input',
                    template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-dropdown-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"dropdown\"> {{labelName}}:\r\n        </label>\r\n        <select  id=\"dropdown\" class=\"form-control\" [(ngModel)]=\"userProfileModel.dropdown\" formControlName=\"dropdown\" >\r\n        <option *ngFor=\"let choice of dropdownChoices; let i=index\" [ngValue]=\"choice\"> {{choice}}</option>\r\n        </select>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['dropdown'].invalid && (profileForm.controls['dropdown'].dirty || profileForm.controls['dropdown'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['dropdown'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['dropdown'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n    </form >\r\n  \r\n  </div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    DropdownInputComponent.ctorParameters = function () { return []; };
    DropdownInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        dropdownChoices: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return DropdownInputComponent;
}());
export { DropdownInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTFDO0lBV0U7UUFLQSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5GLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUtELHlDQUFROzs7SUFBUixjQUFhLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBbkJ0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsNHFEQUE4Qzs2QkFDckMsc0VBQXNFO2lCQUNoRjs7Ozs7NEJBRUUsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFXUiw2QkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlksc0JBQXNCOzs7SUFDakMsMkNBQTJCOztJQUMzQixpREFBbUM7O0lBQ25DLGtEQUE0Qzs7SUFDNUMsNkNBQWdDOztJQU9oQyx1Q0FBYTs7SUFDYiwyQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2RlbCB9IGZyb20gJy4uL3VzZXItcHJvZmlsZS1tb2RlbCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLWRyb3Bkb3duLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBkcm9wZG93bkNob2ljZXM6IHN0cmluZ1tdO1xyXG4gIEBJbnB1dCgpIHVzZXJQcm9maWxlTW9kZWw6IFVzZXJQcm9maWxlTW9kZWw7XHJcbiAgQElucHV0KCkgcHJvZmlsZUZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBkZWJ1ZyA9IHRydWU7XHJcbiAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cclxufVxyXG4iXX0=