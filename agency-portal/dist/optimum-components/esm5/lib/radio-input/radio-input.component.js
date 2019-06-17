/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
var RadioInputComponent = /** @class */ (function () {
    function RadioInputComponent() {
        this.debug = false;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    RadioInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    RadioInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    RadioInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-radio-input',
                    template: "<div class=\"container\">\r\n  <div *ngIf=\"debug==true\">\r\n    <h4> Optimum-radio-input component</h4>\r\n  </div>\r\n  <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"radio\"> {{labelName}}:\r\n      </label>\r\n\r\n      <div *ngFor=\"let choice of radioChoices\" >\r\n      <input type=\"radio\" class=\"form-control\" id=\"radio\"\r\n        [(ngModel)]=\"userProfileModel.radio\" formControlName=\"radio\" [value]=\"choice\"> {{choice}}\r\n      </div>\r\n      <div *ngIf=\"debug==true\">\r\n        <br>\r\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n        <br>\r\n        DEBUG: profileForm status: {{profileForm.status}}\r\n        <br>\r\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n        <br>\r\n        DEBUG: profileForm touched: {{profileForm.touched}}\r\n        <br>\r\n        DEBUG: model content: {{ userProfileModel | json }}\r\n        <br>\r\n      </div>\r\n      <div\r\n        *ngIf=\"profileForm.controls['radio'].invalid && (profileForm.controls['radio'].dirty || profileForm.controls['radio'].touched)\"\r\n        class=\"alert alert-danger\">\r\n        <div *ngIf=\"profileForm.controls['radio'].errors.required\">\r\n          This is required.\r\n        </div>\r\n        <div *ngIf=\"profileForm.controls['radio'].invalid\">\r\n          Error in input.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form >\r\n\r\n</div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    RadioInputComponent.ctorParameters = function () { return []; };
    RadioInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        radioChoices: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return RadioInputComponent;
}());
export { RadioInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzFDO0lBWUU7UUFLQSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5GLENBQUM7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUtELHNDQUFROzs7SUFBUixjQUFhLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBcEJ0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isby9DQUEyQzs2QkFDbEMsc0VBQXNFO2lCQUNoRjs7Ozs7NEJBR0UsS0FBSzsrQkFDTCxLQUFLO21DQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFXUiwwQkFBQztDQUFBLEFBckJELElBcUJDO1NBZlksbUJBQW1COzs7SUFDOUIsd0NBQTJCOztJQUMzQiwyQ0FBZ0M7O0lBQ2hDLCtDQUE0Qzs7SUFDNUMsMENBQWdDOztJQU9oQyxvQ0FBYzs7SUFDZCx3Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2RlbCB9IGZyb20gJy4uL3VzZXItcHJvZmlsZS1tb2RlbCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3B0aW11bS1yYWRpby1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFsnaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkICB7Ym9yZGVyOiAycHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovIH0nXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlvSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJhZGlvQ2hvaWNlczogc3RyaW5nW107XHJcbiAgQElucHV0KCkgdXNlclByb2ZpbGVNb2RlbDogVXNlclByb2ZpbGVNb2RlbDtcclxuICBASW5wdXQoKSBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGRlYnVnID0gZmFsc2U7XHJcbiAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cclxufVxyXG4iXX0=