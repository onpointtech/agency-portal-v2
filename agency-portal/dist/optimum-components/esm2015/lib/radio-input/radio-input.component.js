/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
export class RadioInputComponent {
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
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.debug = true;
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
                template: "<div class=\"container\">\n  <div *ngIf=\"debug==true\">\n    <h4> Optimum-radio-input component</h4>\n  </div>\n  <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n    <div class=\"form-group\">\n      <label for=\"radio\"> {{labelName}}:\n      </label>\n\n      <div *ngFor=\"let choice of radioChoices\" >\n      <input type=\"radio\" class=\"form-control\" id=\"radio\"\n        [(ngModel)]=\"userProfileModel.radio\" formControlName=\"radio\" [value]=\"choice\"> {{choice}}\n      </div>\n      <div *ngIf=\"debug==true\">\n        <br>\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\n        <br>\n        DEBUG: profileForm status: {{profileForm.status}}\n        <br>\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\n        <br>\n        DEBUG: profileForm touched: {{profileForm.touched}}\n        <br>\n        DEBUG: model content: {{ userProfileModel | json }}\n        <br>\n      </div>\n      <div\n        *ngIf=\"profileForm.controls['radio'].invalid && (profileForm.controls['radio'].dirty || profileForm.controls['radio'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"profileForm.controls['radio'].errors.required\">\n          This is required.\n        </div>\n        <div *ngIf=\"profileForm.controls['radio'].invalid\">\n          Error in input.\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form >\n\n</div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
RadioInputComponent.ctorParameters = () => [
    { type: FormBuilder }
];
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
    /**
     * @type {?}
     * @private
     */
    RadioInputComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0aW11bS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFlLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVVyRSxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7Ozs7OztJQWtCOUIsWUFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFLbkMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFOcUIsQ0FBQzs7OztJQUV4QyxRQUFRO0lBQ1IsQ0FBQzs7OztJQUtELFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7OztZQWhDdEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDYrQ0FBMkM7eUJBQ2xDLHNFQUFzRTthQUNoRjs7OztZQVJnQyxXQUFXOzs7d0JBV3pDLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFITix3Q0FBMkI7O0lBQzNCLDJDQUFnQzs7SUFDaEMsK0NBQTRDOztJQUM1QywwQ0FBZ0M7O0lBbUJoQyxvQ0FBYTs7SUFDYix3Q0FBa0I7Ozs7O0lBTk4saUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZU1vZGVsIH0gZnJvbSAnLi4vdXNlci1wcm9maWxlLW1vZGVsJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcHRpbXVtLXJhZGlvLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJ2lucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCAge2JvcmRlcjogMnB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqLyB9J11cbn0pXG5cbmV4cG9ydCBjbGFzcyBSYWRpb0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFiZWxOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJhZGlvQ2hvaWNlczogc3RyaW5nW107XG4gIEBJbnB1dCgpIHVzZXJQcm9maWxlTW9kZWw6IFVzZXJQcm9maWxlTW9kZWw7XG4gIEBJbnB1dCgpIHByb2ZpbGVGb3JtOiBGb3JtR3JvdXA7XG5cbiAgLy8gdXNlclByb2ZpbGVNb2RlbCA9IG5ldyBVc2VyUHJvZmlsZU1vZGVsKCdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcsICdkZWZhdWx0JywgJ2RlZmF1bHQnLCAnZGVmYXVsdCcpXG4gIC8vIHByb2ZpbGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gIC8vICAgLy90ZXh0SW5wdXQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIC8vdGV4dEFyZWFJbnB1dDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy9waG9uZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gIC8vICAgLy9zZWxlY3Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAvLyAgIHJhZGlvOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gICAvL2Ryb3Bkb3duOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgLy8gfSx7dXBkYXRlT246ICdibHVyJ30pO1xuXG4gIC8vcmFkaW9DaG9pY2VzID0gWyd5ZXMnLCAnbm8nLCAndW5zdXJlJ107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGVidWcgPSB0cnVlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICBvblN1Ym1pdCgpIHsgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyB9XG59XG4iXX0=