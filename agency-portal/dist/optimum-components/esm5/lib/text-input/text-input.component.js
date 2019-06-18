/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
var TextInputComponent = /** @class */ (function () {
    function TextInputComponent(renderer) {
        this.renderer = renderer;
        this.userProfileModelChange = new EventEmitter();
        this.debug = true;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    TextInputComponent.prototype.emitCity = /**
     * @return {?}
     */
    function () {
        this.userProfileModelChange.emit(this.userProfileModel);
    };
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
                    template: "<div class=\"container\">\r\n  <div *ngIf=\"debug==true\">\r\n    <h4> Optimum-text-input component</h4>\r\n  </div>\r\n  <form [formGroup]=\"profileForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"textInput\"> {{labelName}}:\r\n        <input type=\"text\" class=\"form-control\" id=\"textInput\" \r\n        [(ngModel)]=\"userProfileModel\"\r\n        (ngModelChange)=\"userProfileModelChange.emit(userProfileModel)\"\r\n          formControlName=\"textInput\">\r\n      </label>\r\n      <button (click)=\"emitCity()\"> Update </button>\r\n      <div *ngIf=\"debug==true\">\r\n        <br>\r\n        DEBUG: model.textInput content: {{userProfileModel | json}}\r\n        <br>\r\n        DEBUG: profileForm status: {{profileForm.status}}\r\n        <br>\r\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n        <br>\r\n        DEBUG: profileForm touched: {{profileForm.touched}}\r\n        <br>\r\n        DEBUG: model content: {{ userProfileModel | json }}\r\n        <br>\r\n      </div>\r\n      <div\r\n        *ngIf=\"profileForm.controls['textInput'].invalid && (profileForm.controls['textInput'].dirty || profileForm.controls['textInput'].touched)\"\r\n        class=\"alert alert-danger\">\r\n        <div *ngIf=\"profileForm.controls['textInput'].errors.required\">\r\n          This is required.\r\n        </div>\r\n        <div *ngIf=\"profileForm.controls['textInput'].invalid\">\r\n          Error in input.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    TextInputComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    TextInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }],
        formInput: [{ type: Input }],
        userProfileModelChange: [{ type: Output }]
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
    TextInputComponent.prototype.formInput;
    /** @type {?} */
    TextInputComponent.prototype.userProfileModelChange;
    /** @type {?} */
    TextInputComponent.prototype.debug;
    /** @type {?} */
    TextInputComponent.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    TextInputComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcHRpbXVtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFckcsT0FBTyxFQUFFLFNBQVMsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRTtJQWlCRSw0QkFBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUw5QiwyQkFBc0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBVzNELFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBUDBCLENBQUM7Ozs7SUFKN0MscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBTUwscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUlELHFDQUFROzs7SUFBUixjQUFhLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBMUJ0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsMGdEQUEwQzs2QkFDakMsc0VBQXNFO2lCQUNoRjs7OztnQkFSd0QsU0FBUzs7OzRCQVkvRCxLQUFLO21DQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lDQUNMLE1BQU07O0lBZ0JULHlCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F2Qlksa0JBQWtCOzs7SUFHN0IsdUNBQTJCOztJQUMzQiw4Q0FBK0I7O0lBQy9CLHlDQUFnQzs7SUFDaEMsdUNBQTJCOztJQUMzQixvREFBMkQ7O0lBVzNELG1DQUFhOztJQUNiLHVDQUFrQjs7Ozs7SUFQTixzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2RlbCB9IGZyb20gJy4uL3VzZXItcHJvZmlsZS1tb2RlbCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29wdGltdW0tdGV4dC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJ2lucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCAge2JvcmRlcjogMnB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqLyB9J11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIEBJbnB1dCgpIGxhYmVsTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB1c2VyUHJvZmlsZU1vZGVsOiBhbnk7XG4gIEBJbnB1dCgpIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGZvcm1JbnB1dDogc3RyaW5nO1xuICBAT3V0cHV0KCkgdXNlclByb2ZpbGVNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBlbWl0Q2l0eSgpIHtcbiAgICB0aGlzLnVzZXJQcm9maWxlTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnVzZXJQcm9maWxlTW9kZWwpO1xuICAgICAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXIgOiBSZW5kZXJlcjIpIHsgfVxuXG4gIFxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGRlYnVnID0gdHJ1ZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgb25TdWJtaXQoKSB7IHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgfVxuXG59XG4iXX0=