/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class TextInputComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.userProfileModelChange = new EventEmitter();
        this.debug = true;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    emitCity() {
        this.userProfileModelChange.emit(this.userProfileModel);
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
                template: "<div class=\"container\">\r\n  <div *ngIf=\"debug==true\">\r\n    <h4> Optimum-text-input component</h4>\r\n  </div>\r\n  <form [formGroup]=\"profileForm\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"textInput\"> {{labelName}}:\r\n        <input type=\"text\" class=\"form-control\" id=\"textInput\" \r\n        [(ngModel)]=\"userProfileModel\"\r\n        (ngModelChange)=\"userProfileModelChange.emit(userProfileModel)\"\r\n          formControlName=\"textInput\">\r\n      </label>\r\n      <button (click)=\"emitCity()\"> Update </button>\r\n      <div *ngIf=\"debug==true\">\r\n        <br>\r\n        DEBUG: model.textInput content: {{userProfileModel | json}}\r\n        <br>\r\n        DEBUG: profileForm status: {{profileForm.status}}\r\n        <br>\r\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n        <br>\r\n        DEBUG: profileForm touched: {{profileForm.touched}}\r\n        <br>\r\n        DEBUG: model content: {{ userProfileModel | json }}\r\n        <br>\r\n      </div>\r\n      <div\r\n        *ngIf=\"profileForm.controls['textInput'].invalid && (profileForm.controls['textInput'].dirty || profileForm.controls['textInput'].touched)\"\r\n        class=\"alert alert-danger\">\r\n        <div *ngIf=\"profileForm.controls['textInput'].errors.required\">\r\n          This is required.\r\n        </div>\r\n        <div *ngIf=\"profileForm.controls['textInput'].invalid\">\r\n          Error in input.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
TextInputComponent.ctorParameters = () => [
    { type: Renderer2 }
];
TextInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }],
    formInput: [{ type: Input }],
    userProfileModelChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcHRpbXVtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFckcsT0FBTyxFQUFFLFNBQVMsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQztBQU9oRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBWTdCLFlBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFMOUIsMkJBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVczRCxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVAwQixDQUFDOzs7O0lBSjdDLFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFNTCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUlELFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7OztZQTFCdEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDBnREFBMEM7eUJBQ2pDLHNFQUFzRTthQUNoRjs7OztZQVJ3RCxTQUFTOzs7d0JBWS9ELEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUNBQ0wsTUFBTTs7OztJQUpQLHVDQUEyQjs7SUFDM0IsOENBQStCOztJQUMvQix5Q0FBZ0M7O0lBQ2hDLHVDQUEyQjs7SUFDM0Isb0RBQTJEOztJQVczRCxtQ0FBYTs7SUFDYix1Q0FBa0I7Ozs7O0lBUE4sc0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlTW9kZWwgfSBmcm9tICcuLi91c2VyLXByb2ZpbGUtbW9kZWwnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLXRleHQtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogWydpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgIHtib3JkZXI6IDJweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi8gfSddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBASW5wdXQoKSBsYWJlbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdXNlclByb2ZpbGVNb2RlbDogYW55O1xuICBASW5wdXQoKSBwcm9maWxlRm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBmb3JtSW5wdXQ6IHN0cmluZztcbiAgQE91dHB1dCgpIHVzZXJQcm9maWxlTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgZW1pdENpdHkoKSB7XG4gICAgdGhpcy51c2VyUHJvZmlsZU1vZGVsQ2hhbmdlLmVtaXQodGhpcy51c2VyUHJvZmlsZU1vZGVsKTtcbiAgICAgIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyIDogUmVuZGVyZXIyKSB7IH1cblxuICBcblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBkZWJ1ZyA9IHRydWU7XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gIG9uU3VibWl0KCkgeyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IH1cblxufVxuIl19