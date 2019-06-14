import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OptimumComponentsService = /** @class */ (function () {
    function OptimumComponentsService() {
    }
    OptimumComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OptimumComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ OptimumComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OptimumComponentsService_Factory() { return new OptimumComponentsService(); }, token: OptimumComponentsService, providedIn: "root" });
    return OptimumComponentsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OptimumComponentsComponent = /** @class */ (function () {
    function OptimumComponentsComponent() {
    }
    /**
     * @return {?}
     */
    OptimumComponentsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    OptimumComponentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-optimum-components',
                    template: "\n    <p>\n      optimum-components works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    OptimumComponentsComponent.ctorParameters = function () { return []; };
    return OptimumComponentsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextAreaInputComponent = /** @class */ (function () {
    function TextAreaInputComponent() {
        this.debug = false;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    TextAreaInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TextAreaInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    TextAreaInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-text-area-input',
                    template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-text-area-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"textAreaInput\"> {{labelName}}:\r\n          <textarea class=\"form-control\" id=\"textAreaInput\" [(ngModel)]=\"userProfileModel.textAreaInput\"\r\n            formControlName=\"textAreaInput\"> </textarea>\r\n        </label>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['textAreaInput'].invalid && (profileForm.controls['textAreaInput'].dirty || profileForm.controls['textAreaInput'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['textAreaInput'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['textAreaInput'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\r\n  \r\n    </form>\r\n  </div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    TextAreaInputComponent.ctorParameters = function () { return []; };
    TextAreaInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return TextAreaInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PhoneInputComponent = /** @class */ (function () {
    function PhoneInputComponent() {
        this.debug = false;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    PhoneInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PhoneInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    PhoneInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-phone-input',
                    template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-phone-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"phone\"> {{labelName}}: XXX-XXX-XXXX\r\n          <input  type=\"tel\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"userProfileModel.phone\"\r\n            formControlName=\"phone\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" >\r\n        </label>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['phone'].invalid && (profileForm.controls['phone'].dirty || profileForm.controls['phone'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['phone'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['phone'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\r\n  \r\n    </form>\r\n  </div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    PhoneInputComponent.ctorParameters = function () { return []; };
    PhoneInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return PhoneInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    template: "<div class=\"container\">\r\n  <div *ngIf=\"debug==true\">\r\n    <h4> Optimum-radio-input component</h4>\r\n  </div>\r\n  <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"radio\"> {{labelName}}:\r\n      </label>\r\n\r\n      <div *ngFor=\"let choice of radioChoices\" >\r\n      <input type=\"radio\" class=\"form-control\" id=\"radio\"\r\n        [(ngModel)]=\"userProfileModel.radio\" formControlName=\"radio\" [value]=\"choice\"> {{choice}}\r\n      </div>\r\n      <div *ngIf=\"debug==true\">\r\n        <br>\r\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n        <br>\r\n        DEBUG: profileForm status: {{profileForm.status}}\r\n        <br>\r\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n        <br>\r\n        DEBUG: profileForm touched: {{profileForm.touched}}\r\n        <br>\r\n        DEBUG: model content: {{ userProfileModel | json }}\r\n        <br>\r\n      </div>\r\n      <div\r\n        *ngIf=\"profileForm.controls['radio'].invalid && (profileForm.controls['radio'].dirty || profileForm.controls['radio'].touched)\"\r\n        class=\"alert alert-danger\">\r\n        <div *ngIf=\"profileForm.controls['radio'].errors.required\">\r\n          This is required.\r\n        </div>\r\n        <div *ngIf=\"profileForm.controls['radio'].invalid\">\r\n          Error in input.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n  </form >\r\n\r\n</div>",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownInputComponent = /** @class */ (function () {
    function DropdownInputComponent() {
        this.debug = true;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    DropdownInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DropdownInputComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () { this.submitted = true; };
    DropdownInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'optimum-dropdown-input',
                    template: "<div class=\"container\">\r\n    <div *ngIf=\"debug==true\">\r\n      <h4> Optimum-dropdown-input component</h4>\r\n    </div>\r\n    <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"dropdown\"> {{labelName}}:\r\n        </label>\r\n        <select  id=\"dropdown\" class=\"form-control\" [(ngModel)]=\"userProfileModel.dropdown\" formControlName=\"dropdown\" >\r\n        <option *ngFor=\"let choice of dropdownChoices; let i=index\" [ngValue]=\"choice\"> {{choice}}</option>\r\n        </select>\r\n        <div *ngIf=\"debug==true\">\r\n          <br>\r\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n        <div\r\n          *ngIf=\"profileForm.controls['dropdown'].invalid && (profileForm.controls['dropdown'].dirty || profileForm.controls['dropdown'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"profileForm.controls['dropdown'].errors.required\">\r\n            This is required.\r\n          </div>\r\n          <div *ngIf=\"profileForm.controls['dropdown'].invalid\">\r\n            Error in input.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n    </form >\r\n  \r\n  </div>",
                    styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                }] }
    ];
    /** @nocollapse */
    DropdownInputComponent.ctorParameters = function () { return []; };
    DropdownInputComponent.propDecorators = {
        labelName: [{ type: Input }],
        dropdownChoices: [{ type: Input }],
        userProfileModel: [{ type: Input }],
        profileForm: [{ type: Input }]
    };
    return DropdownInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OptimumComponentsModule = /** @class */ (function () {
    function OptimumComponentsModule() {
    }
    OptimumComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [OptimumComponentsComponent, TextAreaInputComponent, TextInputComponent, PhoneInputComponent, RadioInputComponent, DropdownInputComponent],
                    imports: [FormsModule, CommonModule, ReactiveFormsModule
                    ],
                    exports: [OptimumComponentsComponent, TextAreaInputComponent, TextInputComponent, PhoneInputComponent, RadioInputComponent, DropdownInputComponent]
                },] }
    ];
    return OptimumComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OptimumComponentsComponent, OptimumComponentsModule, OptimumComponentsService, TextAreaInputComponent as ɵa, TextInputComponent as ɵb, PhoneInputComponent as ɵc, RadioInputComponent as ɵd, DropdownInputComponent as ɵe };
//# sourceMappingURL=optimum-components.js.map
