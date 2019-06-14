/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
export class PhoneInputComponent {
    constructor() {
        this.debug = false;
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
PhoneInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-phone-input',
                template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-phone-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"phone\"> {{labelName}}: XXX-XXX-XXXX\r\n          <input  type=\"tel\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"userProfileModel.phone\"\r\n            formControlName=\"phone\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" >\r\n        </label>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['phone'].invalid && (profileForm.controls['phone'].dirty || profileForm.controls['phone'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['phone'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['phone'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </form>\r\n  </div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
PhoneInputComponent.ctorParameters = () => [];
PhoneInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }]
};
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Bob25lLWlucHV0L3Bob25lLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBVTFDLE1BQU0sT0FBTyxtQkFBbUI7SUFLOUI7UUFLQSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5GLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFLRCxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7WUFsQnRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixrK0NBQTJDO3lCQUNsQyxzRUFBc0U7YUFDaEY7Ozs7O3dCQUVFLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBRk4sd0NBQTJCOztJQUMzQiwrQ0FBNEM7O0lBQzVDLDBDQUFnQzs7SUFPaEMsb0NBQWM7O0lBQ2Qsd0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICcuLi91c2VyLXByb2ZpbGUtbW9kZWwnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3B0aW11bS1waG9uZS1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Bob25lLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFsnaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkICB7Ym9yZGVyOiAycHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovIH0nXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdXNlclByb2ZpbGVNb2RlbDogVXNlclByb2ZpbGVNb2RlbDtcclxuICBASW5wdXQoKSBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGRlYnVnID0gZmFsc2U7XHJcbiAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cclxufVxyXG4iXX0=