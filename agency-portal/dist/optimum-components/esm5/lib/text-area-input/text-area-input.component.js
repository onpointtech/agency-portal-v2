/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
var TextAreaInputComponent = /** @class */ (function () {
    // userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
    // profileForm = this.fb.group({
    //   //textInput: ['', Validators.compose([Validators.required])],
    //   textAreaInput: ['', Validators.compose([Validators.required])],
    //   //phone: ['', Validators.compose([Validators.required])],
    //   //select: ['', Validators.compose([Validators.required])],
    //   //radio: ['', Validators.compose([Validators.required])],
    //   //dropdown: ['', Validators.compose([Validators.required])],
    // },{updateOn: 'blur'});
    function TextAreaInputComponent(fb) {
        this.fb = fb;
        this.debug = true;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    TextAreaInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TextAreaInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    TextAreaInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-text-area-input',
                    template: "<div class=\"container\">\n    <div *ngIf=\"debug==true\">\n      <h4> Optimum-text-area-input component</h4>\n    </div>\n    <form [formGroup]=\"profileForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"textAreaInput\"> {{labelName}}:\n          <textarea class=\"form-control\" id=\"textAreaInput\" [(ngModel)]=\"userProfileModel.textAreaInput\"\n            formControlName=\"textAreaInput\"> </textarea>\n        </label>\n        <div *ngIf=\"debug==true\">\n          <br>\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\n          <br>\n          DEBUG: profileForm status: {{profileForm.status}}\n          <br>\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\n          <br>\n          DEBUG: profileForm touched: {{profileForm.touched}}\n          <br>\n          DEBUG: model content: {{ userProfileModel | json }}\n          <br>\n        </div>\n        <div\n          *ngIf=\"profileForm.controls['textAreaInput'].invalid && (profileForm.controls['textAreaInput'].dirty || profileForm.controls['textAreaInput'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"profileForm.controls['textAreaInput'].errors.required\">\n            This is required.\n          </div>\n          <div *ngIf=\"profileForm.controls['textAreaInput'].invalid\">\n            Error in input.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n  \n    </form>\n  </div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    TextAreaInputComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    TextAreaInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return TextAreaInputComponent;
}());
export { TextAreaInputComponent };
if (false) {
    /** @type {?} */
    TextAreaInputComponent.prototype.labelName;
    /** @type {?} */
    TextAreaInputComponent.prototype.userProfileModel;
    /** @type {?} */
    TextAreaInputComponent.prototype.profileForm;
    /** @type {?} */
    TextAreaInputComponent.prototype.debug;
    /** @type {?} */
    TextAreaInputComponent.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    TextAreaInputComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdGltdW0tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LWFyZWEtaW5wdXQvdGV4dC1hcmVhLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFlLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyRTtJQVNFLDRHQUE0RztJQUM1RyxnQ0FBZ0M7SUFDaEMsa0VBQWtFO0lBQ2xFLG9FQUFvRTtJQUNwRSw4REFBOEQ7SUFDOUQsK0RBQStEO0lBQy9ELDhEQUE4RDtJQUM5RCxpRUFBaUU7SUFDakUseUJBQXlCO0lBRXpCLGdDQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUtuQyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5xQixDQUFDOzs7O0lBRXhDLHlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFLRCx5Q0FBUTs7O0lBQVIsY0FBYSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQTNCdEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLGtoREFBK0M7NkJBQ3RDLHNFQUFzRTtpQkFDaEY7Ozs7Z0JBUGdDLFdBQVc7Ozs0QkFTekMsS0FBSzttQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBb0JSLDZCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F2Qlksc0JBQXNCOzs7SUFDakMsMkNBQTJCOztJQUMzQixrREFBNEM7O0lBQzVDLDZDQUFnQzs7SUFnQmhDLHVDQUFhOztJQUNiLDJDQUFrQjs7Ozs7SUFOTixvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICcuLi91c2VyLXByb2ZpbGUtbW9kZWwnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLXRleHQtYXJlYS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWFyZWEtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFsnaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkICB7Ym9yZGVyOiAycHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovIH0nXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0QXJlYUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXJQcm9maWxlTW9kZWw6IFVzZXJQcm9maWxlTW9kZWw7XG4gIEBJbnB1dCgpIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XG4gIC8vIHVzZXJQcm9maWxlTW9kZWwgPSBuZXcgVXNlclByb2ZpbGVNb2RlbCgnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnKVxuICAvLyBwcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAvLyAgIC8vdGV4dElucHV0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICB0ZXh0QXJlYUlucHV0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL3Bob25lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL3NlbGVjdDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy9yYWRpbzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy9kcm9wZG93bjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vIH0se3VwZGF0ZU9uOiAnYmx1cid9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBkZWJ1ZyA9IHRydWU7XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cbn1cbiJdfQ==