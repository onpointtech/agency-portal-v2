/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
export class TextAreaInputComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default');
        this.profileForm = this.fb.group({
            //textInput: ['', Validators.compose([Validators.required])],
            textAreaInput: ['', Validators.compose([Validators.required])],
        }, { updateOn: 'blur' });
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
    labelName: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdGltdW0tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LWFyZWEtaW5wdXQvdGV4dC1hcmVhLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUEwQixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPNUMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVlqQyxZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVZuQyxxQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDekcsZ0JBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs7WUFFMUIsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUsvRCxFQUFDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFPdEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFOcUIsQ0FBQzs7OztJQUV4QyxRQUFRO0lBQ1IsQ0FBQzs7OztJQUtELFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7OztZQXpCdEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGtoREFBK0M7eUJBQ3RDLHNFQUFzRTthQUNoRjs7OztZQVBnQyxXQUFXOzs7d0JBU3pDLEtBQUs7Ozs7SUFBTiwyQ0FBMkI7O0lBQzNCLGtEQUF5Rzs7SUFDekcsNkNBT3NCOztJQU90Qix1Q0FBYTs7SUFDYiwyQ0FBa0I7Ozs7O0lBTk4sb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1vZGVsIH0gZnJvbSAnLi4vdXNlci1wcm9maWxlLW1vZGVsJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW11bS10ZXh0LWFyZWEtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1hcmVhLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJ2lucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCAge2JvcmRlcjogMnB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqLyB9J11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dEFyZWFJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xuICB1c2VyUHJvZmlsZU1vZGVsID0gbmV3IFVzZXJQcm9maWxlTW9kZWwoJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JylcbiAgcHJvZmlsZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAvL3RleHRJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgdGV4dEFyZWFJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgLy9waG9uZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgLy9zZWxlY3Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIC8vcmFkaW86IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIC8vZHJvcGRvd246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICB9LHt1cGRhdGVPbjogJ2JsdXInfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGVidWcgPSB0cnVlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICBvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XG59XG4iXX0=