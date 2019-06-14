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
                    template: "<div class=\"container\">\n  <div *ngIf=\"debug==true\">\n    <h4> Optimum-radio-input component</h4>\n  </div>\n  <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n    <div class=\"form-group\">\n      <label for=\"radio\"> {{labelName}}:\n      </label>\n\n      <div *ngFor=\"let choice of radioChoices\" >\n      <input type=\"radio\" class=\"form-control\" id=\"radio\"\n        [(ngModel)]=\"userProfileModel.radio\" formControlName=\"radio\" [value]=\"choice\"> {{choice}}\n      </div>\n      <div *ngIf=\"debug==true\">\n        <br>\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\n        <br>\n        DEBUG: profileForm status: {{profileForm.status}}\n        <br>\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\n        <br>\n        DEBUG: profileForm touched: {{profileForm.touched}}\n        <br>\n        DEBUG: model content: {{ userProfileModel | json }}\n        <br>\n      </div>\n      <div\n        *ngIf=\"profileForm.controls['radio'].invalid && (profileForm.controls['radio'].dirty || profileForm.controls['radio'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"profileForm.controls['radio'].errors.required\">\n          This is required.\n        </div>\n        <div *ngIf=\"profileForm.controls['radio'].invalid\">\n          Error in input.\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form >\n\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzFDO0lBWUU7UUFLQSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU5GLENBQUM7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUtELHNDQUFROzs7SUFBUixjQUFhLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBcEJ0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNitDQUEyQzs2QkFDbEMsc0VBQXNFO2lCQUNoRjs7Ozs7NEJBR0UsS0FBSzsrQkFDTCxLQUFLO21DQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFXUiwwQkFBQztDQUFBLEFBckJELElBcUJDO1NBZlksbUJBQW1COzs7SUFDOUIsd0NBQTJCOztJQUMzQiwyQ0FBZ0M7O0lBQ2hDLCtDQUE0Qzs7SUFDNUMsMENBQWdDOztJQU9oQyxvQ0FBYzs7SUFDZCx3Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICcuLi91c2VyLXByb2ZpbGUtbW9kZWwnO1xuaW1wb3J0IHsgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW11bS1yYWRpby1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXG59KVxuXG5leHBvcnQgY2xhc3MgUmFkaW9JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSByYWRpb0Nob2ljZXM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSB1c2VyUHJvZmlsZU1vZGVsOiBVc2VyUHJvZmlsZU1vZGVsO1xuICBASW5wdXQoKSBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBkZWJ1ZyA9IGZhbHNlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICBvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XG59XG4iXX0=