/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
export class RadioInputComponent {
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
RadioInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-radio-input',
                template: "<div class=\"container\">\r\n  <div *ngIf=\"debug==true\">\r\n    <h4> Optimum-radio-input component</h4>\r\n  </div>\r\n  <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"radio\"> {{labelName}}:\r\n      </label>\r\n\r\n      <div *ngFor=\"let choice of radioChoices\" >\r\n      <input type=\"radio\" class=\"form-control\" id=\"radio\"\r\n        [(ngModel)]=\"userProfileModel.radio\" formControlName=\"radio\" [value]=\"choice\"> {{choice}}\r\n      </div>\r\n      <div *ngIf=\"debug==true\">\r\n        <br>\r\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n        <br>\r\n        DEBUG: profileForm status: {{profileForm.status}}\r\n        <br>\r\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n        <br>\r\n        DEBUG: profileForm touched: {{profileForm.touched}}\r\n        <br>\r\n        DEBUG: model content: {{ userProfileModel | json }}\r\n        <br>\r\n      </div>\r\n      <div\r\n        *ngIf=\"profileForm.controls['radio'].invalid && (profileForm.controls['radio'].dirty || profileForm.controls['radio'].touched)\"\r\n        class=\"alert alert-danger\">\r\n        <div *ngIf=\"profileForm.controls['radio'].errors.required\">\r\n          This is required.\r\n        </div>\r\n        <div *ngIf=\"profileForm.controls['radio'].invalid\">\r\n          Error in input.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n  </form >\r\n\r\n</div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
RadioInputComponent.ctorParameters = () => [];
RadioInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    radioChoices: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioInputComponent.prototype.labelName;
    /** @type {?} */
    RadioInputComponent.prototype.radioChoices;
    /** @type {?} */
    RadioInputComponent.prototype.userProfileModel;
    /** @type {?} */
    RadioInputComponent.prototype.profileForm;
    /** @type {?} */
    RadioInputComponent.prototype.debug;
    /** @type {?} */
    RadioInputComponent.prototype.submitted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBUzFDLE1BQU0sT0FBTyxtQkFBbUI7SUFNOUI7UUFLQSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5GLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFLRCxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7WUFwQnRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw2akRBQTJDO3lCQUNsQyxzRUFBc0U7YUFDaEY7Ozs7O3dCQUdFLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFITix3Q0FBMkI7O0lBQzNCLDJDQUFnQzs7SUFDaEMsK0NBQTRDOztJQUM1QywwQ0FBZ0M7O0lBT2hDLG9DQUFjOztJQUNkLHdDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1vZGVsIH0gZnJvbSAnLi4vdXNlci1wcm9maWxlLW1vZGVsJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLXJhZGlvLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmFkaW9JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmFkaW9DaG9pY2VzOiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSB1c2VyUHJvZmlsZU1vZGVsOiBVc2VyUHJvZmlsZU1vZGVsO1xyXG4gIEBJbnB1dCgpIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgZGVidWcgPSBmYWxzZTtcclxuICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxyXG59XHJcbiJdfQ==