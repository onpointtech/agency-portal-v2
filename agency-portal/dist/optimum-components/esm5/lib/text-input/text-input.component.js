/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
var TextInputComponent = /** @class */ (function () {
    //userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
    // profileForm = this.fb.group({
    //   textInput: ['', Validators.compose([Validators.required])],
    //   //textAreaInput: ['', Validators.compose([Validators.required])],
    //   //phone: ['', Validators.compose([Validators.required])],
    //   //select: ['', Validators.compose([Validators.required])],
    //   //radio: ['', Validators.compose([Validators.required])],
    //   //dropdown: ['', Validators.compose([Validators.required])],
    // });
    function TextInputComponent(fb) {
        this.fb = fb;
        this.debug = true;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    TextInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    TextInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-text-input',
                    template: "<div class=\"container\">\n  <div *ngIf=\"debug==true\">\n    <h4> Optimum-text-input component</h4>\n  </div>\n  <form [formGroup]=\"profileForm\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"textInput\"> {{labelName}}:\n        <input type=\"text\" class=\"form-control\" id=\"textInput\" [(ngModel)]=\"userProfileModel.textInput\"\n          formControlName=\"textInput\">\n      </label>\n      <div *ngIf=\"debug==true\">\n        <br>\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\n        <br>\n        DEBUG: profileForm status: {{profileForm.status}}\n        <br>\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\n        <br>\n        DEBUG: profileForm touched: {{profileForm.touched}}\n        <br>\n        DEBUG: model content: {{ userProfileModel | json }}\n        <br>\n      </div>\n      <div\n        *ngIf=\"profileForm.controls['textInput'].invalid && (profileForm.controls['textInput'].dirty || profileForm.controls['textInput'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"profileForm.controls['textInput'].errors.required\">\n          This is required.\n        </div>\n        <div *ngIf=\"profileForm.controls['textInput'].invalid\">\n          Error in input.\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n\n  </form>\n</div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    TextInputComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    TextInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return TextInputComponent;
}());
export { TextInputComponent };
if (false) {
    /** @type {?} */
    TextInputComponent.prototype.labelName;
    /** @type {?} */
    TextInputComponent.prototype.userProfileModel;
    /** @type {?} */
    TextInputComponent.prototype.profileForm;
    /** @type {?} */
    TextInputComponent.prototype.debug;
    /** @type {?} */
    TextInputComponent.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    TextInputComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcHRpbXVtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFlLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyRTtJQVVFLDJHQUEyRztJQUMzRyxnQ0FBZ0M7SUFDaEMsZ0VBQWdFO0lBQ2hFLHNFQUFzRTtJQUN0RSw4REFBOEQ7SUFDOUQsK0RBQStEO0lBQy9ELDhEQUE4RDtJQUM5RCxpRUFBaUU7SUFDakUsTUFBTTtJQUVOLDRCQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQU1uQyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVBxQixDQUFDOzs7O0lBSXhDLHFDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFJRCxxQ0FBUTs7O0lBQVIsY0FBYSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQTdCdEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDg1Q0FBMEM7NkJBQ2pDLHNFQUFzRTtpQkFDaEY7Ozs7Z0JBUGdDLFdBQVc7Ozs0QkFVekMsS0FBSzttQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBc0JSLHlCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0ExQlksa0JBQWtCOzs7SUFFN0IsdUNBQTJCOztJQUMzQiw4Q0FBNEM7O0lBQzVDLHlDQUFnQzs7SUFpQmhDLG1DQUFhOztJQUNiLHVDQUFrQjs7Ozs7SUFQTixnQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICcuLi91c2VyLXByb2ZpbGUtbW9kZWwnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLXRleHQtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXJQcm9maWxlTW9kZWw6IFVzZXJQcm9maWxlTW9kZWw7XG4gIEBJbnB1dCgpIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XG4gIC8vdXNlclByb2ZpbGVNb2RlbCA9IG5ldyBVc2VyUHJvZmlsZU1vZGVsKCdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcpXG4gIC8vIHByb2ZpbGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gIC8vICAgdGV4dElucHV0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL3RleHRBcmVhSW5wdXQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vc2VsZWN0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL3JhZGlvOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL2Ryb3Bkb3duOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIFxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGRlYnVnID0gdHJ1ZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxuXG59XG4iXX0=