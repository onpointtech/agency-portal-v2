/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
var TextInputComponent = /** @class */ (function () {
    function TextInputComponent() {
        this.debug = false;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    TextInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TextInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    TextInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-text-input',
                    template: "<div class=\"container\">\n  <div *ngIf=\"debug==true\">\n    <h4> Optimum-text-input component</h4>\n  </div>\n  <form [formGroup]=\"profileForm\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"textInput\"> {{labelName}}:\n        <input type=\"text\" class=\"form-control\" id=\"textInput\" [(ngModel)]=\"userProfileModel.textInput\"\n          formControlName=\"textInput\">\n      </label>\n      <div *ngIf=\"debug==true\">\n        <br>\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\n        <br>\n        DEBUG: profileForm status: {{profileForm.status}}\n        <br>\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\n        <br>\n        DEBUG: profileForm touched: {{profileForm.touched}}\n        <br>\n        DEBUG: model content: {{ userProfileModel | json }}\n        <br>\n      </div>\n      <div\n        *ngIf=\"profileForm.controls['textInput'].invalid && (profileForm.controls['textInput'].dirty || profileForm.controls['textInput'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"profileForm.controls['textInput'].errors.required\">\n          This is required.\n        </div>\n        <div *ngIf=\"profileForm.controls['textInput'].invalid\">\n          Error in input.\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n\n  </form>\n</div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    TextInputComponent.ctorParameters = function () { return []; };
    TextInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return TextInputComponent;
}());
export { TextInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcHRpbXVtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTFDO0lBWUU7UUFNQSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVBGLENBQUM7Ozs7SUFJakIscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUlELHFDQUFROzs7SUFBUixjQUFhLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBckJ0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsODVDQUEwQzs2QkFDakMsc0VBQXNFO2lCQUNoRjs7Ozs7NEJBR0UsS0FBSzttQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBY1IseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWxCWSxrQkFBa0I7OztJQUU3Qix1Q0FBMkI7O0lBQzNCLDhDQUE0Qzs7SUFDNUMseUNBQWdDOztJQVNoQyxtQ0FBYzs7SUFDZCx1Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICcuLi91c2VyLXByb2ZpbGUtbW9kZWwnO1xuaW1wb3J0IHsgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29wdGltdW0tdGV4dC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJ2lucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCAge2JvcmRlcjogMnB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqLyB9J11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdXNlclByb2ZpbGVNb2RlbDogVXNlclByb2ZpbGVNb2RlbDtcbiAgQElucHV0KCkgcHJvZmlsZUZvcm06IEZvcm1Hcm91cDtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgXG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgZGVidWcgPSBmYWxzZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxuXG59XG4iXX0=