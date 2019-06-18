import { Injectable, ɵɵdefineInjectable, Component, Input, EventEmitter, Renderer2, Output, NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptimumComponentsService {
    constructor() { }
}
OptimumComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OptimumComponentsService.ctorParameters = () => [];
/** @nocollapse */ OptimumComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OptimumComponentsService_Factory() { return new OptimumComponentsService(); }, token: OptimumComponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptimumComponentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
OptimumComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-optimum-components',
                template: `
    <p>
      optimum-components works!
    </p>
  `
            }] }
];
/** @nocollapse */
OptimumComponentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextAreaInputComponent {
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
TextAreaInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-text-area-input',
                template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-text-area-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"textAreaInput\"> {{labelName}}:\r\n          <textarea class=\"form-control\" id=\"textAreaInput\" [(ngModel)]=\"userProfileModel.textAreaInput\"\r\n            formControlName=\"textAreaInput\"> </textarea>\r\n        </label>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['textAreaInput'].invalid && (profileForm.controls['textAreaInput'].dirty || profileForm.controls['textAreaInput'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['textAreaInput'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['textAreaInput'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
TextAreaInputComponent.ctorParameters = () => [];
TextAreaInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextInputComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PhoneInputComponent {
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
PhoneInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-phone-input',
                template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-phone-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"phone\"> {{labelName}}: XXX-XXX-XXXX\r\n          <input  type=\"tel\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"userProfileModel.phone\"\r\n            formControlName=\"phone\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" >\r\n        </label>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['phone'].invalid && (profileForm.controls['phone'].dirty || profileForm.controls['phone'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['phone'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['phone'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </form>\r\n  </div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
PhoneInputComponent.ctorParameters = () => [];
PhoneInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioInputComponent {
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
                template: "<div class=\"container\">\r\n  <div *ngIf=\"debug==true\">\r\n    <h4> Optimum-radio-input component</h4>\r\n  </div>\r\n  <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"radio\"> {{labelName}}:\r\n      </label>\r\n\r\n      <div *ngFor=\"let choice of radioChoices\" >\r\n      <input type=\"radio\" class=\"form-control\" id=\"radio\"\r\n        [(ngModel)]=\"userProfileModel.radio\" formControlName=\"radio\" [value]=\"choice\"> {{choice}}\r\n      </div>\r\n      <div *ngIf=\"debug==true\">\r\n        <br>\r\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n        <br>\r\n        DEBUG: profileForm status: {{profileForm.status}}\r\n        <br>\r\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n        <br>\r\n        DEBUG: profileForm touched: {{profileForm.touched}}\r\n        <br>\r\n        DEBUG: model content: {{ userProfileModel | json }}\r\n        <br>\r\n      </div>\r\n      <div\r\n        *ngIf=\"profileForm.controls['radio'].invalid && (profileForm.controls['radio'].dirty || profileForm.controls['radio'].touched)\"\r\n        class=\"alert alert-danger\">\r\n        <div *ngIf=\"profileForm.controls['radio'].errors.required\">\r\n          This is required.\r\n        </div>\r\n        <div *ngIf=\"profileForm.controls['radio'].invalid\">\r\n          Error in input.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form >\r\n\r\n</div>",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownInputComponent {
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
DropdownInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-dropdown-input',
                template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-dropdown-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"dropdown\"> {{labelName}}:\r\n        </label>\r\n        <select  id=\"dropdown\" class=\"form-control\" [(ngModel)]=\"userProfileModel.dropdown\" formControlName=\"dropdown\" >\r\n        <option *ngFor=\"let choice of dropdownChoices; let i=index\" [ngValue]=\"choice\"> {{choice}}</option>\r\n        </select>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['dropdown'].invalid && (profileForm.controls['dropdown'].dirty || profileForm.controls['dropdown'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['dropdown'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['dropdown'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form >\r\n  \r\n  </div>",
                styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
            }] }
];
/** @nocollapse */
DropdownInputComponent.ctorParameters = () => [];
DropdownInputComponent.propDecorators = {
    labelName: [{ type: Input }],
    dropdownChoices: [{ type: Input }],
    userProfileModel: [{ type: Input }],
    profileForm: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptimumSubmitComponent {
    constructor() {
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
OptimumSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-optimum-submit',
                template: "<form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n  <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n</form >"
            }] }
];
/** @nocollapse */
OptimumSubmitComponent.ctorParameters = () => [];
OptimumSubmitComponent.propDecorators = {
    profileForm: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormTextInputComponent {
    constructor() {
        this.modelChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.model.currentValue == changes.model.previousValue) {
            console.log("No change is detected");
        }
        else {
            console.log("Change is detected");
        }
    }
    /**
     * @return {?}
     */
    modelChanged() {
        console.log("trigger child component");
        this.modelChange.emit(this.model);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = new FormControl('');
    }
}
FormTextInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'optimum-form-text-input',
                template: "\n<label>\n  {{label}}\n  <input type=\"text\" [formControl]=\"form\" [(ngModel)]=\"model\" (change)=\"modelChanged()\">\n</label>\n<p> \n inside input component  \n  {{model | json }}\n</p>"
            }] }
];
/** @nocollapse */
FormTextInputComponent.ctorParameters = () => [];
FormTextInputComponent.propDecorators = {
    label: [{ type: Input }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptimumComponentsModule {
}
OptimumComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    OptimumComponentsComponent,
                    TextAreaInputComponent,
                    TextInputComponent,
                    PhoneInputComponent,
                    RadioInputComponent,
                    DropdownInputComponent,
                    OptimumSubmitComponent,
                    FormTextInputComponent
                ],
                imports: [
                    FormsModule,
                    CommonModule,
                    ReactiveFormsModule
                ],
                exports: [
                    OptimumComponentsComponent,
                    TextAreaInputComponent,
                    TextInputComponent,
                    PhoneInputComponent,
                    RadioInputComponent,
                    DropdownInputComponent,
                    OptimumSubmitComponent,
                    FormTextInputComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OptimumComponentsComponent, OptimumComponentsModule, OptimumComponentsService, TextAreaInputComponent as ɵa, TextInputComponent as ɵb, PhoneInputComponent as ɵc, RadioInputComponent as ɵd, DropdownInputComponent as ɵe, OptimumSubmitComponent as ɵf, FormTextInputComponent as ɵg };
//# sourceMappingURL=optimum-components.js.map
