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
                    template: "<div class=\"container\">\r\n  <div *ngIf=\"debug==true\">\r\n    <h4> Optimum-text-input component</h4>\r\n  </div>\r\n  <form [formGroup]=\"profileForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"textInput\"> {{labelName}}:\r\n        <input type=\"text\" class=\"form-control\" id=\"textInput\" [(ngModel)]=\"userProfileModel.textInput\"\r\n          formControlName=\"textInput\">\r\n      </label>\r\n      <div *ngIf=\"debug==true\">\r\n        <br>\r\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n        <br>\r\n        DEBUG: profileForm status: {{profileForm.status}}\r\n        <br>\r\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n        <br>\r\n        DEBUG: profileForm touched: {{profileForm.touched}}\r\n        <br>\r\n        DEBUG: model content: {{ userProfileModel | json }}\r\n        <br>\r\n      </div>\r\n      <div\r\n        *ngIf=\"profileForm.controls['textInput'].invalid && (profileForm.controls['textInput'].dirty || profileForm.controls['textInput'].touched)\"\r\n        class=\"alert alert-danger\">\r\n        <div *ngIf=\"profileForm.controls['textInput'].errors.required\">\r\n          This is required.\r\n        </div>\r\n        <div *ngIf=\"profileForm.controls['textInput'].invalid\">\r\n          Error in input.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\r\n\r\n  </form>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcHRpbXVtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTFDO0lBWUU7UUFNQSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVBGLENBQUM7Ozs7SUFJakIscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUlELHFDQUFROzs7SUFBUixjQUFhLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBckJ0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsdytDQUEwQzs2QkFDakMsc0VBQXNFO2lCQUNoRjs7Ozs7NEJBR0UsS0FBSzttQ0FDTCxLQUFLOzhCQUNMLEtBQUs7O0lBY1IseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWxCWSxrQkFBa0I7OztJQUU3Qix1Q0FBMkI7O0lBQzNCLDhDQUE0Qzs7SUFDNUMseUNBQWdDOztJQVNoQyxtQ0FBYzs7SUFDZCx1Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2RlbCB9IGZyb20gJy4uL3VzZXItcHJvZmlsZS1tb2RlbCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLXRleHQtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFsnaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkICB7Ym9yZGVyOiAycHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovIH0nXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdXNlclByb2ZpbGVNb2RlbDogVXNlclByb2ZpbGVNb2RlbDtcclxuICBASW5wdXQoKSBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuICBkZWJ1ZyA9IGZhbHNlO1xyXG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICBvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XHJcblxyXG59XHJcbiJdfQ==