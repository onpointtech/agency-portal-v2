/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
var RadioInputComponent = /** @class */ (function () {
    // userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
    // profileForm = this.fb.group({
    //   //textInput: ['', Validators.compose([Validators.required])],
    //   //textAreaInput: ['', Validators.compose([Validators.required])],
    //   //phone: ['', Validators.compose([Validators.required])],
    //   //select: ['', Validators.compose([Validators.required])],
    //   radio: ['', Validators.compose([Validators.required])],
    //   //dropdown: ['', Validators.compose([Validators.required])],
    // },{updateOn: 'blur'});
    //radioChoices = ['yes', 'no', 'unsure'];
    function RadioInputComponent(fb) {
        this.fb = fb;
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
    /**
     * @type {?}
     * @private
     */
    RadioInputComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFlLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyRTtJQVlFLDRHQUE0RztJQUM1RyxnQ0FBZ0M7SUFDaEMsa0VBQWtFO0lBQ2xFLHNFQUFzRTtJQUN0RSw4REFBOEQ7SUFDOUQsK0RBQStEO0lBQy9ELDREQUE0RDtJQUM1RCxpRUFBaUU7SUFDakUseUJBQXlCO0lBRXpCLHlDQUF5QztJQUV6Qyw2QkFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFLbkMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFOcUIsQ0FBQzs7OztJQUV4QyxzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBS0Qsc0NBQVE7OztJQUFSLGNBQWEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkFoQ3RDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw2K0NBQTJDOzZCQUNsQyxzRUFBc0U7aUJBQ2hGOzs7O2dCQVJnQyxXQUFXOzs7NEJBV3pDLEtBQUs7K0JBQ0wsS0FBSzttQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBdUJSLDBCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0EzQlksbUJBQW1COzs7SUFDOUIsd0NBQTJCOztJQUMzQiwyQ0FBZ0M7O0lBQ2hDLCtDQUE0Qzs7SUFDNUMsMENBQWdDOztJQW1CaEMsb0NBQWE7O0lBQ2Isd0NBQWtCOzs7OztJQU5OLGlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2RlbCB9IGZyb20gJy4uL3VzZXItcHJvZmlsZS1tb2RlbCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW11bS1yYWRpby1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXG59KVxuXG5leHBvcnQgY2xhc3MgUmFkaW9JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSByYWRpb0Nob2ljZXM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSB1c2VyUHJvZmlsZU1vZGVsOiBVc2VyUHJvZmlsZU1vZGVsO1xuICBASW5wdXQoKSBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xuXG4gIC8vIHVzZXJQcm9maWxlTW9kZWwgPSBuZXcgVXNlclByb2ZpbGVNb2RlbCgnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnKVxuICAvLyBwcm9maWxlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAvLyAgIC8vdGV4dElucHV0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL3RleHRBcmVhSW5wdXQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vc2VsZWN0OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICByYWRpbzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy9kcm9wZG93bjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vIH0se3VwZGF0ZU9uOiAnYmx1cid9KTtcblxuICAvL3JhZGlvQ2hvaWNlcyA9IFsneWVzJywgJ25vJywgJ3Vuc3VyZSddO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGRlYnVnID0gdHJ1ZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxufVxuIl19