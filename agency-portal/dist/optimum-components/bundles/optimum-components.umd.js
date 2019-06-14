(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('optimum-components', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['optimum-components'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, function (exports, core, forms, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OptimumComponentsService = /** @class */ (function () {
        function OptimumComponentsService() {
        }
        OptimumComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OptimumComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ OptimumComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function OptimumComponentsService_Factory() { return new OptimumComponentsService(); }, token: OptimumComponentsService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
        // userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
        // profileForm = this.fb.group({
        //   //textInput: ['', Validators.compose([Validators.required])],
        //   textAreaInput: ['', Validators.compose([Validators.required])],
        //   //phone: ['', Validators.compose([Validators.required])],
        //   //select: ['', Validators.compose([Validators.required])],
        //   //radio: ['', Validators.compose([Validators.required])],
        //   //dropdown: ['', Validators.compose([Validators.required])],
        // },{updateOn: 'blur'});
        function TextAreaInputComponent(fb) {
            this.fb = fb;
            this.debug = true;
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
            { type: core.Component, args: [{
                        selector: 'optimum-text-area-input',
                        template: "<div class=\"container\">\n    <div *ngIf=\"debug==true\">\n      <h4> Optimum-text-area-input component</h4>\n    </div>\n    <form [formGroup]=\"profileForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"textAreaInput\"> {{labelName}}:\n          <textarea class=\"form-control\" id=\"textAreaInput\" [(ngModel)]=\"userProfileModel.textAreaInput\"\n            formControlName=\"textAreaInput\"> </textarea>\n        </label>\n        <div *ngIf=\"debug==true\">\n          <br>\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\n          <br>\n          DEBUG: profileForm status: {{profileForm.status}}\n          <br>\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\n          <br>\n          DEBUG: profileForm touched: {{profileForm.touched}}\n          <br>\n          DEBUG: model content: {{ userProfileModel | json }}\n          <br>\n        </div>\n        <div\n          *ngIf=\"profileForm.controls['textAreaInput'].invalid && (profileForm.controls['textAreaInput'].dirty || profileForm.controls['textAreaInput'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"profileForm.controls['textAreaInput'].errors.required\">\n            This is required.\n          </div>\n          <div *ngIf=\"profileForm.controls['textAreaInput'].invalid\">\n            Error in input.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n  \n    </form>\n  </div>",
                        styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                    }] }
        ];
        /** @nocollapse */
        TextAreaInputComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        TextAreaInputComponent.propDecorators = {
            labelName: [{ type: core.Input }],
            userProfileModel: [{ type: core.Input }],
            profileForm: [{ type: core.Input }]
        };
        return TextAreaInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextInputComponent = /** @class */ (function () {
        //userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
        // profileForm = this.fb.group({
        //   textInput: ['', Validators.compose([Validators.required])],
        //   //textAreaInput: ['', Validators.compose([Validators.required])],
        //   //phone: ['', Validators.compose([Validators.required])],
        //   //select: ['', Validators.compose([Validators.required])],
        //   //radio: ['', Validators.compose([Validators.required])],
        //   //dropdown: ['', Validators.compose([Validators.required])],
        // });
        function TextInputComponent(fb) {
            this.fb = fb;
            this.debug = true;
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
            { type: core.Component, args: [{
                        selector: 'optimum-text-input',
                        template: "<div class=\"container\">\n  <div *ngIf=\"debug==true\">\n    <h4> Optimum-text-input component</h4>\n  </div>\n  <form [formGroup]=\"profileForm\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"textInput\"> {{labelName}}:\n        <input type=\"text\" class=\"form-control\" id=\"textInput\" [(ngModel)]=\"userProfileModel.textInput\"\n          formControlName=\"textInput\">\n      </label>\n      <div *ngIf=\"debug==true\">\n        <br>\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\n        <br>\n        DEBUG: profileForm status: {{profileForm.status}}\n        <br>\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\n        <br>\n        DEBUG: profileForm touched: {{profileForm.touched}}\n        <br>\n        DEBUG: model content: {{ userProfileModel | json }}\n        <br>\n      </div>\n      <div\n        *ngIf=\"profileForm.controls['textInput'].invalid && (profileForm.controls['textInput'].dirty || profileForm.controls['textInput'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"profileForm.controls['textInput'].errors.required\">\n          This is required.\n        </div>\n        <div *ngIf=\"profileForm.controls['textInput'].invalid\">\n          Error in input.\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n\n  </form>\n</div>",
                        styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                    }] }
        ];
        /** @nocollapse */
        TextInputComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        TextInputComponent.propDecorators = {
            labelName: [{ type: core.Input }],
            userProfileModel: [{ type: core.Input }],
            profileForm: [{ type: core.Input }]
        };
        return TextInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PhoneInputComponent = /** @class */ (function () {
        // userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
        // profileForm = this.fb.group({
        //   //textInput: ['', Validators.compose([Validators.required])],
        //   //textAreaInput: ['', Validators.compose([Validators.required])],
        //   phone: ['', Validators.compose([Validators.required])],
        //   //select: ['', Validators.compose([Validators.required])],
        //   //radio: ['', Validators.compose([Validators.required])],
        //   //dropdown: ['', Validators.compose([Validators.required])],
        // },{updateOn: 'blur'});
        function PhoneInputComponent(fb) {
            this.fb = fb;
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
            { type: core.Component, args: [{
                        selector: 'optimum-phone-input',
                        template: "<div class=\"container\">\n    <div *ngIf=\"debug==true\">\n      <h4> Optimum-phone-input component</h4>\n    </div>\n    <form [formGroup]=\"profileForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"phone\"> {{labelName}}: XXX-XXX-XXXX\n          <input  type=\"tel\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"userProfileModel.phone\"\n            formControlName=\"phone\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" >\n        </label>\n        <div *ngIf=\"debug==true\">\n          <br>\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\n          <br>\n          DEBUG: profileForm status: {{profileForm.status}}\n          <br>\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\n          <br>\n          DEBUG: profileForm touched: {{profileForm.touched}}\n          <br>\n          DEBUG: model content: {{ userProfileModel | json }}\n          <br>\n        </div>\n        <div\n          *ngIf=\"profileForm.controls['phone'].invalid && (profileForm.controls['phone'].dirty || profileForm.controls['phone'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"profileForm.controls['phone'].errors.required\">\n            This is required.\n          </div>\n          <div *ngIf=\"profileForm.controls['phone'].invalid\">\n            Error in input.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" onclick=\"onSubmit()\">Submit</button>\n  \n    </form>\n  </div>",
                        styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                    }] }
        ];
        /** @nocollapse */
        PhoneInputComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        PhoneInputComponent.propDecorators = {
            labelName: [{ type: core.Input }],
            userProfileModel: [{ type: core.Input }],
            profileForm: [{ type: core.Input }]
        };
        return PhoneInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'optimum-radio-input',
                        template: "<div class=\"container\">\n  <div *ngIf=\"debug==true\">\n    <h4> Optimum-radio-input component</h4>\n  </div>\n  <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n    <div class=\"form-group\">\n      <label for=\"radio\"> {{labelName}}:\n      </label>\n\n      <div *ngFor=\"let choice of radioChoices\" >\n      <input type=\"radio\" class=\"form-control\" id=\"radio\"\n        [(ngModel)]=\"userProfileModel.radio\" formControlName=\"radio\" [value]=\"choice\"> {{choice}}\n      </div>\n      <div *ngIf=\"debug==true\">\n        <br>\n        DEBUG: model.textInput content: {{userProfileModel.textInput}}\n        <br>\n        DEBUG: profileForm status: {{profileForm.status}}\n        <br>\n        DEBUG: profileForm dirty: {{profileForm.dirty}}\n        <br>\n        DEBUG: profileForm touched: {{profileForm.touched}}\n        <br>\n        DEBUG: model content: {{ userProfileModel | json }}\n        <br>\n      </div>\n      <div\n        *ngIf=\"profileForm.controls['radio'].invalid && (profileForm.controls['radio'].dirty || profileForm.controls['radio'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"profileForm.controls['radio'].errors.required\">\n          This is required.\n        </div>\n        <div *ngIf=\"profileForm.controls['radio'].invalid\">\n          Error in input.\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form >\n\n</div>",
                        styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                    }] }
        ];
        /** @nocollapse */
        RadioInputComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        RadioInputComponent.propDecorators = {
            labelName: [{ type: core.Input }],
            radioChoices: [{ type: core.Input }],
            userProfileModel: [{ type: core.Input }],
            profileForm: [{ type: core.Input }]
        };
        return RadioInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownInputComponent = /** @class */ (function () {
        // userProfileModel = new UserProfileModel('default', 'default', 'default', 'default', 'default', 'default')
        // profileForm = this.fb.group({
        //   //textInput: ['', Validators.compose([Validators.required])],
        //   //textAreaInput: ['', Validators.compose([Validators.required])],
        //   //phone: ['', Validators.compose([Validators.required])],
        //   //select: ['', Validators.compose([Validators.required])],
        //   //radio: ['', Validators.compose([Validators.required])],
        //   dropdown: ['', Validators.compose([Validators.required])],
        // },{updateOn: 'blur'});
        //dropdownChoices = ['male', 'female', 'pride'];
        function DropdownInputComponent(fb) {
            this.fb = fb;
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
            { type: core.Component, args: [{
                        selector: 'optimum-dropdown-input',
                        template: "<div class=\"container\">\n    <div *ngIf=\"debug==true\">\n      <h4> Optimum-dropdown-input component</h4>\n    </div>\n    <form [formGroup]=\"profileForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"  novalidate>\n      <div class=\"form-group\">\n        <label for=\"dropdown\"> {{labelName}}:\n        </label>\n        <select  id=\"dropdown\" class=\"form-control\" [(ngModel)]=\"userProfileModel.dropdown\" formControlName=\"dropdown\" >\n        <option *ngFor=\"let choice of dropdownChoices\" [ngValue]=\"choice\"> {{choice}} </option>\n        </select>\n        <div *ngIf=\"debug==true\">\n          <br>\n          DEBUG: model.textInput content: {{userProfileModel.textInput}}\n          <br>\n          DEBUG: profileForm status: {{profileForm.status}}\n          <br>\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\n          <br>\n          DEBUG: profileForm touched: {{profileForm.touched}}\n          <br>\n          DEBUG: model content: {{ userProfileModel | json }}\n          <br>\n        </div>\n        <div\n          *ngIf=\"profileForm.controls['dropdown'].invalid && (profileForm.controls['dropdown'].dirty || profileForm.controls['dropdown'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"profileForm.controls['dropdown'].errors.required\">\n            This is required.\n          </div>\n          <div *ngIf=\"profileForm.controls['dropdown'].invalid\">\n            Error in input.\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form >\n  \n  </div>",
                        styles: ['input.ng-invalid.ng-touched  {border: 2px solid #a94442; /* red */ }']
                    }] }
        ];
        /** @nocollapse */
        DropdownInputComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        DropdownInputComponent.propDecorators = {
            labelName: [{ type: core.Input }],
            dropdownChoices: [{ type: core.Input }],
            userProfileModel: [{ type: core.Input }],
            profileForm: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [OptimumComponentsComponent, TextAreaInputComponent, TextInputComponent, PhoneInputComponent, RadioInputComponent, DropdownInputComponent],
                        imports: [forms.FormsModule, common.CommonModule, forms.ReactiveFormsModule
                        ],
                        exports: [OptimumComponentsComponent, TextAreaInputComponent, TextInputComponent, PhoneInputComponent, RadioInputComponent, DropdownInputComponent]
                    },] }
        ];
        return OptimumComponentsModule;
    }());

    exports.OptimumComponentsComponent = OptimumComponentsComponent;
    exports.OptimumComponentsModule = OptimumComponentsModule;
    exports.OptimumComponentsService = OptimumComponentsService;
    exports.ɵa = TextAreaInputComponent;
    exports.ɵb = TextInputComponent;
    exports.ɵc = PhoneInputComponent;
    exports.ɵd = RadioInputComponent;
    exports.ɵe = DropdownInputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=optimum-components.umd.js.map
