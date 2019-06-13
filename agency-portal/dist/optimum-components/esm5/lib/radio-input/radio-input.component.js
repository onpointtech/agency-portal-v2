/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
var RadioInputComponent = /** @class */ (function () {
    //radioChoices = ['yes', 'no', 'unsure'];
    function RadioInputComponent(fb) {
        this.fb = fb;
        this.userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default');
        this.profileForm = this.fb.group({
            //textInput: ['', Validators.compose([Validators.required])],
            //textAreaInput: ['', Validators.compose([Validators.required])],
            //phone: ['', Validators.compose([Validators.required])],
            //select: ['', Validators.compose([Validators.required])],
            radio: ['', Validators.compose([Validators.required])],
        }, { updateOn: 'blur' });
        this.debug = true;
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
                    template: "<div class=\"container\">\n  <div *ngIf=\"debug==true\">\n    <h4> Optimum-radio-input component</h4>\n  </div>\n  <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n    <div class=\"form-group\">\n      <label for=\"radio\"> {{labelName}}:\n      </label>\n\n      <div *ngFor=\"let choice of radioChoices\" >\n      <input type=\"radio\" class=\"form-control\" id=\"radio\"\n        [(ngModel)]=\"userProfileModel.radio\" formControlName=\"radio\" [value]=\"choice\"> {{choice}}\n      </div>\n      <div *ngIf=\"debug==true\">\n        <br>\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\n        <br>\n        DEBUG: profileForm status: {{profileForm.status}}\n        <br>\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\n        <br>\n        DEBUG: profileForm touched: {{profileForm.touched}}\n        <br>\n        DEBUG: model content: {{ userProfileModel | json }}\n        <br>\n      </div>\n      <div\n        *ngIf=\"profileForm.controls['radio'].invalid && (profileForm.controls['radio'].dirty || profileForm.controls['radio'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"profileForm.controls['radio'].errors.required\">\n          This is required.\n        </div>\n        <div *ngIf=\"profileForm.controls['radio'].invalid\">\n          Error in input.\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form >\n\n</div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    RadioInputComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    RadioInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        radioChoices: [{ type: Input }]
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
    /**
     * @type {?}
     * @private
     */
    RadioInputComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUEwQixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUM7SUFvQkUseUNBQXlDO0lBRXpDLDZCQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVpuQyxxQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDekcsZ0JBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs7Ozs7WUFLMUIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUV2RCxFQUFDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFTdEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFOcUIsQ0FBQzs7OztJQUV4QyxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBS0Qsc0NBQVE7OztJQUFSLGNBQWEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkE5QnRDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw2K0NBQTJDOzZCQUNsQyxzRUFBc0U7aUJBQ2hGOzs7O2dCQVJnQyxXQUFXOzs7NEJBV3pDLEtBQUs7K0JBQ0wsS0FBSzs7SUF1QlIsMEJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQXpCWSxtQkFBbUI7OztJQUM5Qix3Q0FBMkI7O0lBQzNCLDJDQUFnQzs7SUFFaEMsK0NBQXlHOztJQUN6RywwQ0FPc0I7O0lBU3RCLG9DQUFhOztJQUNiLHdDQUFrQjs7Ozs7SUFOTixpQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICcuLi91c2VyLXByb2ZpbGUtbW9kZWwnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29wdGltdW0tcmFkaW8taW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFsnaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkICB7Ym9yZGVyOiAycHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovIH0nXVxufSlcblxuZXhwb3J0IGNsYXNzIFJhZGlvSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcmFkaW9DaG9pY2VzOiBzdHJpbmdbXTtcblxuICB1c2VyUHJvZmlsZU1vZGVsID0gbmV3IFVzZXJQcm9maWxlTW9kZWwoJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JylcbiAgcHJvZmlsZUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAvL3RleHRJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgLy90ZXh0QXJlYUlucHV0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgICAvL3Bob25lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgICAvL3NlbGVjdDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgcmFkaW86IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIC8vZHJvcGRvd246IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICB9LHt1cGRhdGVPbjogJ2JsdXInfSk7XG5cbiAgLy9yYWRpb0Nob2ljZXMgPSBbJ3llcycsICdubycsICd1bnN1cmUnXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBkZWJ1ZyA9IHRydWU7XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cbn1cbiJdfQ==