/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
var PhoneInputComponent = /** @class */ (function () {
    // userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
    // profileForm = this.fb.group({
    //   //textInput: ['', Validators.compose([Validators.required])],
    //   //textAreaInput: ['', Validators.compose([Validators.required])],
    //   phone: ['', Validators.compose([Validators.required])],
    //   //select: ['', Validators.compose([Validators.required])],
    //   //radio: ['', Validators.compose([Validators.required])],
    //   //dropdown: ['', Validators.compose([Validators.required])],
    // },{updateOn: 'blur'});
    function PhoneInputComponent(fb) {
        this.fb = fb;
        this.debug = false;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    PhoneInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PhoneInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    PhoneInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-phone-input',
                    template: "<div class=\"container\">\n    <div *ngIf=\"debug==true\">\n      <h4> Optimum-phone-input component</h4>\n    </div>\n    <form [formGroup]=\"profileForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"phone\"> {{labelName}}: XXX-XXX-XXXX\n          <input  type=\"tel\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"userProfileModel.phone\"\n            formControlName=\"phone\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" >\n        </label>\n        <div *ngIf=\"debug==true\">\n          <br>\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\n          <br>\n          DEBUG: profileForm status: {{profileForm.status}}\n          <br>\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\n          <br>\n          DEBUG: profileForm touched: {{profileForm.touched}}\n          <br>\n          DEBUG: model content: {{ userProfileModel | json }}\n          <br>\n        </div>\n        <div\n          *ngIf=\"profileForm.controls['phone'].invalid && (profileForm.controls['phone'].dirty || profileForm.controls['phone'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"profileForm.controls['phone'].errors.required\">\n            This is required.\n          </div>\n          <div *ngIf=\"profileForm.controls['phone'].invalid\">\n            Error in input.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n  \n    </form>\n  </div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    PhoneInputComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    PhoneInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return PhoneInputComponent;
}());
export { PhoneInputComponent };
if (false) {
    /** @type {?} */
    PhoneInputComponent.prototype.labelName;
    /** @type {?} */
    PhoneInputComponent.prototype.userProfileModel;
    /** @type {?} */
    PhoneInputComponent.prototype.profileForm;
    /** @type {?} */
    PhoneInputComponent.prototype.debug;
    /** @type {?} */
    PhoneInputComponent.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    PhoneInputComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bob25lLWlucHV0L3Bob25lLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFlLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtyRTtJQVVFLDRHQUE0RztJQUM1RyxnQ0FBZ0M7SUFDaEMsa0VBQWtFO0lBQ2xFLHNFQUFzRTtJQUN0RSw0REFBNEQ7SUFDNUQsK0RBQStEO0lBQy9ELDhEQUE4RDtJQUM5RCxpRUFBaUU7SUFDakUseUJBQXlCO0lBRXpCLDZCQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUtuQyxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5xQixDQUFDOzs7O0lBRXhDLHNDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFLRCxzQ0FBUTs7O0lBQVIsY0FBYSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQTVCdEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDAvQ0FBMkM7NkJBQ2xDLHNFQUFzRTtpQkFDaEY7Ozs7Z0JBVGdDLFdBQVc7Ozs0QkFXekMsS0FBSzttQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBcUJSLDBCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0F4QlksbUJBQW1COzs7SUFDOUIsd0NBQTJCOztJQUMzQiwrQ0FBNEM7O0lBQzVDLDBDQUFnQzs7SUFpQmhDLG9DQUFjOztJQUNkLHdDQUFrQjs7Ozs7SUFOTixpQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICcuLi91c2VyLXByb2ZpbGUtbW9kZWwnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW11bS1waG9uZS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9waG9uZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXG59KVxuZXhwb3J0IGNsYXNzIFBob25lSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdXNlclByb2ZpbGVNb2RlbDogVXNlclByb2ZpbGVNb2RlbDtcbiAgQElucHV0KCkgcHJvZmlsZUZvcm06IEZvcm1Hcm91cDtcblxuICAvLyB1c2VyUHJvZmlsZU1vZGVsID0gbmV3IFVzZXJQcm9maWxlTW9kZWwoJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JylcbiAgLy8gcHJvZmlsZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgLy8gICAvL3RleHRJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy90ZXh0QXJlYUlucHV0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy9zZWxlY3Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vcmFkaW86IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vZHJvcGRvd246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyB9LHt1cGRhdGVPbjogJ2JsdXInfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGVidWcgPSBmYWxzZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxufVxuIl19