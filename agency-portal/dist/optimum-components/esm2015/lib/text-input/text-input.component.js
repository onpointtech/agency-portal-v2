/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
export class TextInputComponent {
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
TextInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-text-input',
                template: "<div class=\"container\">\n  <div *ngIf=\"debug==true\">\n    <h4> Optimum-text-input component</h4>\n  </div>\n  <form [formGroup]=\"profileForm\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"textInput\"> {{labelName}}:\n        <input type=\"text\" class=\"form-control\" id=\"textInput\" [(ngModel)]=\"userProfileModel.textInput\"\n          formControlName=\"textInput\">\n      </label>\n      <div *ngIf=\"debug==true\">\n        <br>\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\n        <br>\n        DEBUG: profileForm status: {{profileForm.status}}\n        <br>\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\n        <br>\n        DEBUG: profileForm touched: {{profileForm.touched}}\n        <br>\n        DEBUG: model content: {{ userProfileModel | json }}\n        <br>\n      </div>\n      <div\n        *ngIf=\"profileForm.controls['textInput'].invalid && (profileForm.controls['textInput'].dirty || profileForm.controls['textInput'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"profileForm.controls['textInput'].errors.required\">\n          This is required.\n        </div>\n        <div *ngIf=\"profileForm.controls['textInput'].invalid\">\n          Error in input.\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n\n  </form>\n</div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
TextInputComponent.ctorParameters = () => [];
TextInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }]
};
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcHRpbXVtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTzFDLE1BQU0sT0FBTyxrQkFBa0I7SUFPN0I7UUFNQSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVBGLENBQUM7Ozs7SUFJakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFJRCxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7WUFyQnRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw4NUNBQTBDO3lCQUNqQyxzRUFBc0U7YUFDaEY7Ozs7O3dCQUdFLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBRk4sdUNBQTJCOztJQUMzQiw4Q0FBNEM7O0lBQzVDLHlDQUFnQzs7SUFTaEMsbUNBQWM7O0lBQ2QsdUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1vZGVsIH0gZnJvbSAnLi4vdXNlci1wcm9maWxlLW1vZGVsJztcbmltcG9ydCB7IEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLXRleHQtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVzZXJQcm9maWxlTW9kZWw6IFVzZXJQcm9maWxlTW9kZWw7XG4gIEBJbnB1dCgpIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIFxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGRlYnVnID0gZmFsc2U7XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cblxufVxuIl19