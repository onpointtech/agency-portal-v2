/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
var PhoneInputComponent = /** @class */ (function () {
    function PhoneInputComponent(fb) {
        this.fb = fb;
        this.userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default');
        this.profileForm = this.fb.group({
            //textInput: ['', Validators.compose([Validators.required])],
            //textAreaInput: ['', Validators.compose([Validators.required])],
            phone: ['', Validators.compose([Validators.required])],
        }, { updateOn: 'blur' });
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
        labelName: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bob25lLWlucHV0L3Bob25lLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUEwQixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJNUM7SUFpQkUsNkJBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBVm5DLHFCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUN6RyxnQkFBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzs7WUFHMUIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUl2RCxFQUFDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFPdEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFOcUIsQ0FBQzs7OztJQUV4QyxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBS0Qsc0NBQVE7OztJQUFSLGNBQWEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkF6QnRDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiwwL0NBQTJDOzZCQUNsQyxzRUFBc0U7aUJBQ2hGOzs7O2dCQVRnQyxXQUFXOzs7NEJBV3pDLEtBQUs7O0lBb0JSLDBCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksbUJBQW1COzs7SUFDOUIsd0NBQTJCOztJQUMzQiwrQ0FBeUc7O0lBQ3pHLDBDQU9zQjs7SUFPdEIsb0NBQWM7O0lBQ2Qsd0NBQWtCOzs7OztJQU5OLGlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2RlbCB9IGZyb20gJy4uL3VzZXItcHJvZmlsZS1tb2RlbCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLXBob25lLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bob25lLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJ2lucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCAge2JvcmRlcjogMnB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqLyB9J11cbn0pXG5leHBvcnQgY2xhc3MgUGhvbmVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xuICB1c2VyUHJvZmlsZU1vZGVsID0gbmV3IFVzZXJQcm9maWxlTW9kZWwoJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JylcbiAgcHJvZmlsZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAvL3RleHRJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgLy90ZXh0QXJlYUlucHV0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgLy9zZWxlY3Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIC8vcmFkaW86IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIC8vZHJvcGRvd246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICB9LHt1cGRhdGVPbjogJ2JsdXInfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGVidWcgPSBmYWxzZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxufVxuIl19