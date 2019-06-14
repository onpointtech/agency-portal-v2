/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
export class TextAreaInputComponent {
    // userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
    // profileForm = this.fb.group({
    //   //textInput: ['', Validators.compose([Validators.required])],
    //   textAreaInput: ['', Validators.compose([Validators.required])],
    //   //phone: ['', Validators.compose([Validators.required])],
    //   //select: ['', Validators.compose([Validators.required])],
    //   //radio: ['', Validators.compose([Validators.required])],
    //   //dropdown: ['', Validators.compose([Validators.required])],
    // },{updateOn: 'blur'});
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
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
TextAreaInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-text-area-input',
                template: "<div class=\"container\">\n    <div *ngIf=\"debug==true\">\n      <h4> Optimum-text-area-input component</h4>\n    </div>\n    <form [formGroup]=\"profileForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"textAreaInput\"> {{labelName}}:\n          <textarea class=\"form-control\" id=\"textAreaInput\" [(ngModel)]=\"userProfileModel.textAreaInput\"\n            formControlName=\"textAreaInput\"> </textarea>\n        </label>\n        <div *ngIf=\"debug==true\">\n          <br>\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\n          <br>\n          DEBUG: profileForm status: {{profileForm.status}}\n          <br>\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\n          <br>\n          DEBUG: profileForm touched: {{profileForm.touched}}\n          <br>\n          DEBUG: model content: {{ userProfileModel | json }}\n          <br>\n        </div>\n        <div\n          *ngIf=\"profileForm.controls['textAreaInput'].invalid && (profileForm.controls['textAreaInput'].dirty || profileForm.controls['textAreaInput'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"profileForm.controls['textAreaInput'].errors.required\">\n            This is required.\n          </div>\n          <div *ngIf=\"profileForm.controls['textAreaInput'].invalid\">\n            Error in input.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n  \n    </form>\n  </div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
TextAreaInputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
TextAreaInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdGltdW0tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LWFyZWEtaW5wdXQvdGV4dC1hcmVhLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFlLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVFyRSxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7Ozs7O0lBY2pDLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBS25DLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTnFCLENBQUM7Ozs7SUFFeEMsUUFBUTtJQUNSLENBQUM7Ozs7SUFLRCxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7WUEzQnRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxraERBQStDO3lCQUN0QyxzRUFBc0U7YUFDaEY7Ozs7WUFQZ0MsV0FBVzs7O3dCQVN6QyxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUZOLDJDQUEyQjs7SUFDM0Isa0RBQTRDOztJQUM1Qyw2Q0FBZ0M7O0lBZ0JoQyx1Q0FBYTs7SUFDYiwyQ0FBa0I7Ozs7O0lBTk4sb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1vZGVsIH0gZnJvbSAnLi4vdXNlci1wcm9maWxlLW1vZGVsJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW11bS10ZXh0LWFyZWEtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1hcmVhLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJ2lucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCAge2JvcmRlcjogMnB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqLyB9J11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dEFyZWFJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB1c2VyUHJvZmlsZU1vZGVsOiBVc2VyUHJvZmlsZU1vZGVsO1xuICBASW5wdXQoKSBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xuICAvLyB1c2VyUHJvZmlsZU1vZGVsID0gbmV3IFVzZXJQcm9maWxlTW9kZWwoJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JylcbiAgLy8gcHJvZmlsZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgLy8gICAvL3RleHRJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgdGV4dEFyZWFJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy9waG9uZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy9zZWxlY3Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vcmFkaW86IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vZHJvcGRvd246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyB9LHt1cGRhdGVPbjogJ2JsdXInfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGVidWcgPSB0cnVlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICBvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XG59XG4iXX0=