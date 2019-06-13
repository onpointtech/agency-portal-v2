/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
var DropdownInputComponent = /** @class */ (function () {
    //dropdownChoices = ['male', 'female', 'pride'];
    function DropdownInputComponent(fb) {
        this.fb = fb;
        this.userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default');
        this.profileForm = this.fb.group({
            //textInput: ['', Validators.compose([Validators.required])],
            //textAreaInput: ['', Validators.compose([Validators.required])],
            //phone: ['', Validators.compose([Validators.required])],
            //select: ['', Validators.compose([Validators.required])],
            //radio: ['', Validators.compose([Validators.required])],
            dropdown: ['', Validators.compose([Validators.required])],
        }, { updateOn: 'blur' });
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
        dropdownChoices: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUEwQixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUM7SUFrQkUsZ0RBQWdEO0lBRWhELGdDQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVpuQyxxQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDekcsZ0JBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs7Ozs7O1lBTTFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDMUQsRUFBQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBU3RCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTnFCLENBQUM7Ozs7SUFFeEMseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUtELHlDQUFROzs7SUFBUixjQUFhLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBNUJ0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsb2xEQUE4Qzs2QkFDckMsc0VBQXNFO2lCQUNoRjs7OztnQkFQZ0MsV0FBVzs7OzRCQVN6QyxLQUFLO2tDQUNMLEtBQUs7O0lBc0JSLDZCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0F4Qlksc0JBQXNCOzs7SUFDakMsMkNBQTJCOztJQUMzQixpREFBbUM7O0lBQ25DLGtEQUF5Rzs7SUFDekcsNkNBT3NCOztJQVN0Qix1Q0FBYTs7SUFDYiwyQ0FBa0I7Ozs7O0lBTk4sb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1vZGVsIH0gZnJvbSAnLi4vdXNlci1wcm9maWxlLW1vZGVsJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW11bS1kcm9wZG93bi1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZHJvcGRvd25DaG9pY2VzOiBzdHJpbmdbXTtcbiAgdXNlclByb2ZpbGVNb2RlbCA9IG5ldyBVc2VyUHJvZmlsZU1vZGVsKCdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcpXG4gIHByb2ZpbGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgLy90ZXh0SW5wdXQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIC8vdGV4dEFyZWFJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgLy9waG9uZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgLy9zZWxlY3Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIC8vcmFkaW86IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIGRyb3Bkb3duOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgfSx7dXBkYXRlT246ICdibHVyJ30pO1xuXG4gIC8vZHJvcGRvd25DaG9pY2VzID0gWydtYWxlJywgJ2ZlbWFsZScsICdwcmlkZSddO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGRlYnVnID0gdHJ1ZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxufVxuIl19