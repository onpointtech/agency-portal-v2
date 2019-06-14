/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
var DropdownInputComponent = /** @class */ (function () {
    // userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
    // profileForm = this.fb.group({
    //   //textInput: ['', Validators.compose([Validators.required])],
    //   //textAreaInput: ['', Validators.compose([Validators.required])],
    //   //phone: ['', Validators.compose([Validators.required])],
    //   //select: ['', Validators.compose([Validators.required])],
    //   //radio: ['', Validators.compose([Validators.required])],
    //   dropdown: ['', Validators.compose([Validators.required])],
    // },{updateOn: 'blur'});
    //dropdownChoices = ['male', 'female', 'pride'];
    function DropdownInputComponent(fb) {
        this.fb = fb;
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
                    template: "<div class=\"container\">\n    <div *ngIf=\"debug==true\">\n      <h4> Optimum-dropdown-input component</h4>\n    </div>\n    <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n      <div class=\"form-group\">\n        <label for=\"dropdown\"> {{labelName}}:\n        </label>\n        <select  id=\"dropdown\" class=\"form-control\" [(ngModel)]=\"userProfileModel.dropdown\" formControlName=\"dropdown\" >\n        <option *ngFor=\"let choice of dropdownChoices\" [ngValue]=\"choice\"> {{choice}} </option>\n        </select>\n        <div *ngIf=\"debug==true\">\n          <br>\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\n          <br>\n          DEBUG: profileForm status: {{profileForm.status}}\n          <br>\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\n          <br>\n          DEBUG: profileForm touched: {{profileForm.touched}}\n          <br>\n          DEBUG: model content: {{ userProfileModel | json }}\n          <br>\n        </div>\n        <div\n          *ngIf=\"profileForm.controls['dropdown'].invalid && (profileForm.controls['dropdown'].dirty || profileForm.controls['dropdown'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"profileForm.controls['dropdown'].errors.required\">\n            This is required.\n          </div>\n          <div *ngIf=\"profileForm.controls['dropdown'].invalid\">\n            Error in input.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form >\n  \n  </div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    DropdownInputComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
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
    /**
     * @type {?}
     * @private
     */
    DropdownInputComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFlLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyRTtJQVdFLDRHQUE0RztJQUM1RyxnQ0FBZ0M7SUFDaEMsa0VBQWtFO0lBQ2xFLHNFQUFzRTtJQUN0RSw4REFBOEQ7SUFDOUQsK0RBQStEO0lBQy9ELDhEQUE4RDtJQUM5RCwrREFBK0Q7SUFDL0QseUJBQXlCO0lBRXpCLGdEQUFnRDtJQUVoRCxnQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFLbkMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFOcUIsQ0FBQzs7OztJQUV4Qyx5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBS0QseUNBQVE7OztJQUFSLGNBQWEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkEvQnRDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxvbERBQThDOzZCQUNyQyxzRUFBc0U7aUJBQ2hGOzs7O2dCQVBnQyxXQUFXOzs7NEJBU3pDLEtBQUs7a0NBQ0wsS0FBSzttQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBdUJSLDZCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlksc0JBQXNCOzs7SUFDakMsMkNBQTJCOztJQUMzQixpREFBbUM7O0lBQ25DLGtEQUE0Qzs7SUFDNUMsNkNBQWdDOztJQW1CaEMsdUNBQWE7O0lBQ2IsMkNBQWtCOzs7OztJQU5OLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2RlbCB9IGZyb20gJy4uL3VzZXItcHJvZmlsZS1tb2RlbCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29wdGltdW0tZHJvcGRvd24taW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFsnaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkICB7Ym9yZGVyOiAycHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovIH0nXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2hvaWNlczogc3RyaW5nW107XG4gIEBJbnB1dCgpIHVzZXJQcm9maWxlTW9kZWw6IFVzZXJQcm9maWxlTW9kZWw7XG4gIEBJbnB1dCgpIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XG4gXG4gIC8vIHVzZXJQcm9maWxlTW9kZWwgPSBuZXcgVXNlclByb2ZpbGVNb2RlbCgnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnKVxuICAvLyBwcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAvLyAgIC8vdGV4dElucHV0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL3RleHRBcmVhSW5wdXQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vc2VsZWN0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL3JhZGlvOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICBkcm9wZG93bjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vIH0se3VwZGF0ZU9uOiAnYmx1cid9KTtcblxuICAvL2Ryb3Bkb3duQ2hvaWNlcyA9IFsnbWFsZScsICdmZW1hbGUnLCAncHJpZGUnXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBkZWJ1ZyA9IHRydWU7XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cbn1cbiJdfQ==