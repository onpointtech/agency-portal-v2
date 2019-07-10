(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n\r\n\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <!-- Address Line 1 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine1\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Address Line 1:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['addressLine1'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.addressLine1\"\r\n            formControlName = \"addressLine1\">\r\n\r\n            <span *ngIf = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched\"\r\n          class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n          aria-hidden = \"true\">\r\n        </span>\r\n\r\n        <div class = \"text-danger\">\r\n          <val-errors controlName = \"addressLine1\">\r\n            <ng-template valError = \"required\">\r\n              <p class = \"ng-scope\">\r\n                <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Address Line 1.\r\n              </p>\r\n            </ng-template>\r\n          </val-errors>\r\n        </div>\r\n\r\n          </div>\r\n      </div>\r\n\r\n      <!-- Address Line 2 -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n          <label for=\"addressLine2\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Address Line 2:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['addressLine2'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.addressLine2\"\r\n            formControlName = \"addressLine2\">\r\n\r\n            <span *ngIf = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched\"\r\n          class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n          aria-hidden = \"true\">\r\n        </span>\r\n\r\n        <div class = \"text-danger\">\r\n          <val-errors controlName = \"addressLine2\">\r\n            <ng-template valError = \"required\">\r\n              <p class = \"ng-scope\">\r\n                <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Address Line 2.\r\n              </p>\r\n            </ng-template>\r\n          </val-errors>\r\n        </div>\r\n\r\n          </div>\r\n      </div>\r\n\r\n      <!-- City and State -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"city\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>City:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['city'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.city\" \r\n            formControlName = \"city\">\r\n\r\n            <span *ngIf = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"city\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid City.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n          \r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>State:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"state\" [compareWith]=\"compareFn\" [(ngModel)]=\"updateClaimantAddress.state\">\r\n              <option value=\"\" disabled=true>{{updateClaimantAddress.state}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of stateChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['state'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid State.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Zip Code and Zip Code Extension -->\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipCode\" class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Zip Code:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['zipCode'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"updateClaimantAddress.zipCode\"\r\n            formControlName = \"zipCode\">\r\n\r\n            <span *ngIf = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"zipCode\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid Zip Code.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"zipExt\" class=\"col-xs-12 head control-label\">Zip Code Extension:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type=\"text\" class=\"form-control edit_field\" [(ngModel)]=\"updateClaimantAddress.zipExt\"\r\n              formControlName=\"zipExt\" placeholder=\"{{updateClaimantAddress.zipExt}}\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Claimant Details</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"profileForm\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n\r\n      <!-- SSN and Alternate ClaimantID -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            SSN:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.ssn\" formControlName=\"ssn\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.ssn}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.ssn content: {{claimantProfileCopy.ssn}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Alternate ClaimantID:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.alternateClaimantId\"\r\n              formControlName=\"alternateClaimantId\" readonly=\"readonly\"\r\n              placeholder=\"{{claimantProfileCopy.alternateClaimantId}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.alternateClaimantId content: {{claimantProfileCopy.alternateClaimantId}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- First Name and Last Name -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            First Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.firstName\" formControlName=\"firstName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.firstName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.firstName content: {{claimantProfileCopy.firstName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n            Last Name:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <!-- FORM INPUT -->\r\n            <input class=\"field\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.lastName\" formControlName=\"lastName\"\r\n              readonly=\"readonly\" placeholder=\"{{claimantProfileCopy.lastName}}\">\r\n          </div>\r\n          <div *ngIf=\"debug==true\">\r\n            <br>\r\n            DEBUG: model.lastName content: {{claimantProfileCopy.lastName}}\r\n            <br>\r\n            DEBUG: profileForm status: {{profileForm.status}}\r\n            <br>\r\n            DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n            <br>\r\n            DEBUG: profileForm touched: {{profileForm.touched}}\r\n            <br>\r\n            DEBUG: model content: {{ claimantProfileCopy | json }}\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Middle Initial and Home Phone -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Middle Initial:\r\n          </label>\r\n          <div [class]=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <input [class]=\"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched ? 'edit_field error': 'edit_field'\" type=\"text\" [(ngModel)]=\"claimantProfileCopy.middleInitial\"\r\n              formControlName=\"middleInitial\" [placeholder] = \"profileForm.controls['middleInitial'].invalid? '(Required)' : '' \">\r\n\r\n            <span *ngIf = \"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched\"\r\n              class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n              aria-hidden = \"true\">\r\n            </span>\r\n\r\n              <div class = \"text-danger\">\r\n                  <val-errors controlName = \"middleInitial\">\r\n                    <ng-template valError = \"maxlength\">\r\n                      <p class = \"ng-scope\">\r\n                        <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                        Middle Initial can only have a maximum of 1 letter\r\n                      </p>\r\n                    </ng-template>\r\n      \r\n                    <ng-template valError = \"pattern\">\r\n                      <p class = \"ng-scope\">\r\n                        <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                        Only a letter can be entered as a middle initial\r\n                      </p>\r\n                    </ng-template>\r\n                  </val-errors>\r\n                </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"homePhone\" class=\"col-xs-12 head control-label\">\r\n            <span class = \"text-danger\">*</span>Home Phone:\r\n          </label>\r\n          <div [class] = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <input [class] = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['homePhone'].invalid? '(000) 000-000 (Required)' : '' \"\r\n            [(ngModel)] = \"claimantProfileCopy.homePhone\"\r\n            formControlName = \"homePhone\"\r\n            mask = \"(000) 000-0000\">\r\n          </div>\r\n\r\n          <div class = \"text-danger\">\r\n              <val-errors controlName = \"homePhone\">\r\n                <ng-template valError = \"pattern\">\r\n                  <p class = \"ng-scope\">\r\n                    <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                    Only numbers are allowed to be inputted in this field.\r\n                  </p>\r\n                </ng-template>\r\n              </val-errors>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Mobile Phone  & Language Preference div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label for=\"mobilePhone\" class=\"col-xs-12 head control-label\">Mobile Phone:\r\n          </label>\r\n          <div class=\"col-xs-12 has-feedback\">\r\n            <input type = \"text\"\r\n            class = \"form-control edit_field\"\r\n            [(ngModel)] = \"claimantProfileCopy.mobilePhone\"\r\n            formControlName = \"mobilePhone\"\r\n            placeholder = \"(000) 000-000\"\r\n            mask = \"(000) 000-0000\">\r\n          </div>\r\n\r\n          <div class = \"text-danger\">\r\n              <val-errors controlName = \"mobilePhone\">\r\n                <ng-template valError = \"pattern\">\r\n                  <p class = \"ng-scope\">\r\n                    <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                    Only numbers are allowed to be inputted in this field.\r\n                  </p>\r\n                </ng-template>\r\n              </val-errors>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Language Preference:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"languagePreference\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.languagePreference\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.languagePreference}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of languagePreferenceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['languagePreference'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Language Preference.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Education Level & Gender div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Education Level:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"educationLevel\" [compareWith]=\"compareFn\"\r\n              [(ngModel)]=\"claimantProfileCopy.educationLevel\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.educationLevel}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of educationLevelChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div\r\n              *ngIf=\"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['educationLevel'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Education Level.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Gender:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"gender\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.gender\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.gender}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of genderChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['gender'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Gender.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Race & Ethnicity div -->\r\n      <div class=\"col-xs-12 no-padding\">\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Race:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"race\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.race\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.race}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of raceChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['race'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Race.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-6\">\r\n          <label class=\"col-xs-12 head control-label\">\r\n              <span class = \"text-danger\">*</span>Ethnicity:\r\n          </label>\r\n          <div\r\n            [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n            <!-- FORM INPUT -->\r\n            <select\r\n              [class]=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'edit_field error': 'edit_field'\"\r\n              formControlName=\"ethnicity\" [compareWith]=\"compareFn\" [(ngModel)]=\"claimantProfileCopy.ethnicity\">\r\n              <option value=\"\" disabled=true>{{claimantProfileCopy.ethnicity}}</option>\r\n              <option [value]=\"choice\" *ngFor=\"let choice of ethnicityChoices\">{{choice}}</option>\r\n            </select>\r\n\r\n            <!-- ERROR   -->\r\n            <span *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n              class=\"text-danger\">\r\n\r\n              <!-- ERROR LIST -->\r\n\r\n              <p *ngIf=\"profileForm.controls['ethnicity'].invalid\" class=\"ng-scope\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Ethnicity.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type = \"submit\" class=\"btn btn-primary\"  (click)=\"updateClaimantDetails()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"close()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Section (grey column container)-->\r\n<div class=\"col-xs-12 footer-section\" style=\"padding-right: 0px; padding-left: 0px;\">\r\n  <div class=\"bg-primary no-padding\" style=\"height: 8px;\"></div>\r\n    <div class=\"bg-white text-dark text-center p-1 footer-bottom\">\r\n      <div class=\"col-xs-12 col-sm-12 text-center footer-section\">\r\n        <img class=\"img-responsive\" src=\"https://agency-portal.opt-dev.optimumui.com/agency-portal/optimum-ui-customizations/image/AmericanJobCenter_logo_horizontal.jpg\" alt=\"logo\" width=\"400px\">\r\n      </div>\r\n  </div>\r\n</div>\r\n        <!--End Footer-->\r\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jsquery-test/jsquery-test.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jsquery-test/jsquery-test.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  jsquery-test works!\n</p>\n\n<p class=\"test\">\n  jsquery-test works but should be hidden!\n</p>\n\n<button>This will hide the text</button>\n\n<table class=\"table\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th data-breakpoints=\"xs\">ID</th>\n\t\t\t<th>First Name</th>\n\t\t\t<th>Last Name</th>\n\t\t\t<th data-breakpoints=\"xs\">Job Title</th>\n\t\t\t<th data-breakpoints=\"xs sm\">Started On</th>\n\t\t\t<th data-breakpoints=\"xs sm md\" data-title=\"DOB\">Date of Birth</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr data-expanded=\"true\">\n\t\t\t<td>1</td>\n\t\t\t<td>Dennise</td>\n\t\t\t<td>Fuhrman</td>\n\t\t\t<td>High School History Teacher</td>\n\t\t\t<td>November 8th 2011</td>\n\t\t\t<td>July 25th 1960</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>2</td>\n\t\t\t<td>Elodia</td>\n\t\t\t<td>Weisz</td>\n\t\t\t<td>Wallpaperer Helper</td>\n\t\t\t<td>October 15th 2010</td>\n\t\t\t<td>March 30th 1982</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>3</td>\n\t\t\t<td>Raeann</td>\n\t\t\t<td>Haner</td>\n\t\t\t<td>Internal Medicine Nurse Practitioner</td>\n\t\t\t<td>November 28th 2013</td>\n\t\t\t<td>February 26th 1966</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>4</td>\n\t\t\t<td>Junie</td>\n\t\t\t<td>Landa</td>\n\t\t\t<td>Offbearer</td>\n\t\t\t<td>October 31st 2010</td>\n\t\t\t<td>March 29th 1966</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>5</td>\n\t\t\t<td>Solomon</td>\n\t\t\t<td>Bittinger</td>\n\t\t\t<td>Roller Skater</td>\n\t\t\t<td>December 29th 2011</td>\n\t\t\t<td>September 22nd 1964</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>6</td>\n\t\t\t<td>Bar</td>\n\t\t\t<td>Lewis</td>\n\t\t\t<td>Clown</td>\n\t\t\t<td>November 12th 2012</td>\n\t\t\t<td>August 4th 1991</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>7</td>\n\t\t\t<td>Usha</td>\n\t\t\t<td>Leak</td>\n\t\t\t<td>Ships Electronic Warfare Officer</td>\n\t\t\t<td>August 14th 2012</td>\n\t\t\t<td>November 20th 1979</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>8</td>\n\t\t\t<td>Lorriane</td>\n\t\t\t<td>Cooke</td>\n\t\t\t<td>Technical Services Librarian</td>\n\t\t\t<td>September 21st 2010</td>\n\t\t\t<td>April 7th 1969</td>\n\t\t</tr>\n\t</tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center loginscreen animated fadeInDown\">\r\n  <div class=\"ibox-content\">\r\n\r\n    <div class=\"text-center loginscreen animated fadeInDown\">\r\n        <h2><em><b>Please click on the sign in button below to access the agency portal</b></em></h2>\r\n\r\n        <button class=\"btn btn-primary\">\r\n            <a [routerLink]=\"['/main']\"><b>Sign In</b></a>\r\n        </button>\r\n\r\n        <!-- <button class=\"btn btn-primary\">\r\n            <a [routerLink]=\"['/main']\"><b>Bypass Login</b> </a>\r\n          </button> -->\r\n      <p class=\"m-t\">\r\n        <strong>© On Point Technology, LLC.</strong>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/claim/claim.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/claim/claim.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\" id=\"surveyContainer\"></div>\r\n\r\n<div *ngIf=\"debug==true\">\r\n  <h5>Survey Definition Title</h5>\r\n  <p>{{ this.surveyDefinition | json }}</p>\r\n\r\n  <h5>Survey Responses</h5>\r\n  <p>{{ this.surveyResponses | json }}</p>\r\n\r\n\r\n  <h5>Survey Response SO</h5>\r\n  <p>{{ this.surveyResponseSO | json }}</p>\r\n</div>\r\n\r\n<div *ngIf=\"this.surveyObject!=null\">\r\n  <div class=\"col-xs-12 col-md-12 padding-12 padding-top\">\r\n    <button *ngIf=\"(this.surveyObject.currentPageNo > 0) && (this.completeLastPage == false)\" type=\"button\"\r\n      class=\"btn btn-primary\" (click)=\"prevButton()\">\r\n      Previous\r\n    </button>\r\n    <button *ngIf=\"this.surveyObject.currentPageNo < this.surveyObject.visiblePageCount - 1\" type=\"button\"\r\n      class=\"btn btn-primary\" (click)=\"nextButton()\">\r\n      Next\r\n    </button>\r\n    <button\r\n      *ngIf=\"(this.surveyObject.currentPageNo == this.surveyObject.visiblePageCount - 1) && (this.completeLastPage == false)\"\r\n      type=\"button\" class=\"btn btn-primary\" (click)=\"completeButton()\">\r\n      Complete\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-md-12 padding-top text-right\">\r\n\r\n  <button *ngIf=\"this.completeLastPage == false\" type=\"button\" class=\"btn btn-info margin-right\"\r\n    (click)=\"resetButton()\">\r\n    <!-- routerLink=\"/main/claimant-overview/{{claimantId}}\" -->\r\n    Reset\r\n  </button>\r\n\r\n  <button *ngIf=\"this.completeLastPage == false\" type=\"button\" class=\"btn btn-primary\" (click)=\"saveAndExitButton()\"\r\n    routerLink=\"/main/claimant-overview/{{claimantId}}\">\r\n    Save and Exit\r\n  </button>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/claimant-overview/claimant-overview.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/claimant-overview/claimant-overview.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf = \"claimantSO\">\r\n  <div class = \"col-xs-12 no-padding\">\r\n    <h4 class = \"p-2\">Claimant Overview</h4>\r\n\r\n  </div>\r\n\r\n  <div class = \"col-xs-12\">\r\n    <div class = \"col-xs-12 col-lg-6 overview-text\">\r\n      <h2 class = \"m-5\">{{claimantSO.firstName}} {{claimantSO.lastName}}</h2>\r\n      <h4 class = \"no-margin\">\r\n        <strong class = \"\">{{claimantSO.ssn | optSsnPipe}}</strong>\r\n      </h4>\r\n      <ul class = \"list-unstyled\">\r\n        <li>\r\n          <div style = \"white-space: pre-wrap\">\r\n            <p>{{claimantSO.address | optAddressPipe}}</p>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class = \"col-xs-12 col-lg-6 no-padding\">\r\n      <div class = \"col-xs-12 no-padding\">\r\n        <div class = \"col-lg-6 overview-subheading\">\r\n          <p>\r\n            <strong>Username:</strong>\r\n          </p>\r\n        </div>\r\n        <div class = \"col-lg-6 overview-text\">\r\n          <p>Placeholder username</p>\r\n        </div>\r\n      </div>\r\n      <div class = \"col-xs-12 no-padding\">\r\n        <div class = \"col-lg-6 overview-subheading\">\r\n          <p>\r\n            <strong>Email Address:</strong>\r\n          </p>\r\n        </div>\r\n        <div class = \"col-lg-6 overview-text\">\r\n          <p>{{claimantSO.email}}</p>\r\n        </div>\r\n      </div>\r\n      <div class = \"col-xs-12 no-padding\">\r\n        <div class = \"col-lg-6 overview-subheading\">\r\n          <p>\r\n            <strong>Date of Birth:</strong>\r\n          </p>\r\n        </div>\r\n        <div class = \"col-lg-6 overview-text\">\r\n          <p>{{claimantSO.dateOfBirth | optDatePipe}}</p>\r\n        </div>\r\n      </div>\r\n      <div class = \"col-xs-12 no-padding\">\r\n        <div class = \"col-lg-6 overview-subheading\">\r\n          <p>\r\n            <strong>Alternate Claimant ID:</strong>\r\n          </p>\r\n        </div>\r\n        <div class = \"col-lg-6 overview-text\">\r\n          <p>{{claimantSO.alternateClaimantId}}</p>\r\n        </div>\r\n      </div>\r\n      <div class = \"col-xs-12 no-padding\">\r\n        <div class = \"col-lg-6 overview-subheading\">\r\n          <p>\r\n            <strong>Mobile Phone:</strong>\r\n          </p>\r\n        </div>\r\n        <div class = \"col-lg-6 overview-text\">\r\n          <p>{{claimantSO.mobilePhone | optPhonePipe}}</p>\r\n        </div>\r\n      </div>\r\n      <div class = \"col-xs-12 no-padding\">\r\n        <div class = \"col-lg-6 overview-subheading\">\r\n          <p>\r\n            <strong>Preferred Payment:</strong>\r\n          </p>\r\n        </div>\r\n        <div class = \"col-lg-6 overview-text\">\r\n          <p class = \"capitalize\">Placeholder preferred payment</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class = \"col-xs-12 btn_margin\">\r\n    <button type = \"button\"\r\n      class = \"btn btn-primary\"\r\n      [routerLink]=\"['/main/claimant-profile']\">\r\n      <b>View Profile</b>\r\n    </button>\r\n  </div>\r\n  <div class = \"col-xs-12 no-padding\">\r\n    <h4 class = \"p-2\">Claims</h4>\r\n  </div>\r\n\r\n  <div class =\"col-xs-12 no-padding\">\r\n\r\n      <!-- New Claim Button -->\r\n      <div class = \"col-xs-12 btn_margin\">\r\n        <button type = \"button\"\r\n          class = \"btn btn-primary\"\r\n          routerLink=\"/main/claim/{{claimantId}}\">\r\n          <b>New Claim</b>\r\n        </button>\r\n      </div>\r\n\r\n\r\n</div>\r\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/claimant-profile/claimant-profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/claimant-profile/claimant-profile.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n    <h4 class = \"p-2\">\r\n        Claimant Profile\r\n    </h4>\r\n\r\n    <form [formGroup] = \"profileForm\">\r\n        <div class = \"form-group\">\r\n\r\n            <!-- SSN and CONFIRM SSN div -->\r\n            <div class = \"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        SSN:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <!-- FORM INPUT -->\r\n                        <input class = \"field\"\r\n                            type = \"text\" \r\n                            placeholder = {{claimantSO.ssn}}\r\n                            [(ngModel)] = \"claimantSO.ssn\" \r\n                            formControlName = \"ssn\" \r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Alternate SSN:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <!-- FORM INPUT -->\r\n                        <input class = \"field\"\r\n                            type = \"text\" \r\n                            placeholder = {{claimantSO.alternateClaimantId}} \r\n                            [(ngModel)] = \"claimantSO.alternateClaimantId\" \r\n                            formControlName = \"alternateClaimantId\" \r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- First Name and Last Name div -->\r\n            <div class=\"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        First Name:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <!-- FORM INPUT -->\r\n                        <input class = \"field\"\r\n                            type = \"text\" \r\n                            placeholder = {{claimantSO.firstName}} \r\n                            [(ngModel)] = \"claimantSO.firstName\" \r\n                            formControlName = \"firstName\" \r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Name:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <!-- FORM INPUT -->\r\n                        <input class = \"field\"\r\n                            type = \"text\" \r\n                            placeholder = {{claimantSO.lastName}} \r\n                            [(ngModel)] = \"claimantSO.lastName\" \r\n                            formControlName = \"lastName\" \r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Middle Initial and Date of Birth div -->\r\n            <div class=\"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Middle Initial:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <!-- FORM INPUT -->\r\n                        <input class = \"field\"\r\n                            type = \"text\" \r\n                            placeholder = {{claimantSO.middleInitial}} \r\n                            [(ngModel)] = \"claimantSO.middleInitial\" \r\n                            formControlName = \"middleInitial\" \r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Date of Birth:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input class = \"field\"\r\n                            type = \"text\" \r\n                            placeholder = {{claimantSO.dateOfBirth}} \r\n                            [(ngModel)] = \"claimantSO.dateOfBirth\" \r\n                            formControlName = \"dateOfBirth\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Home Phone and Mobile Phone div -->\r\n            <div class=\"col-xs-12 no-padding\">\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <label class=\"col-xs-12 head control-label\">\r\n                        Home Phone:\r\n                    </label>\r\n                    <div class=\"col-xs-12 has-feedback\">\r\n                        <!-- FORM INPUT -->\r\n                        <input class=\"field\"\r\n                            type=\"text\" \r\n                            placeholder= {{claimantSO.homePhone}}\r\n                            [(ngModel)]=\"claimantSO.homePhone\" \r\n                            formControlName=\"homePhone\" \r\n                            mask=\"(000) 000-0000\" \r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">Mobile Phone:</label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.mobilePhone}} \r\n                            [(ngModel)] = \"claimantSO.mobilePhone\" \r\n                            formControlName = \"mobilePhone\"\r\n                            mask = \"(000) 000-0000\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Preferred Occupation and Language Preference div -->\r\n            <div class=\"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">Preferred Occupation:</label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.preferredOccupation}} \r\n                            [(ngModel)] = \"claimantSO.preferredOccupation\" \r\n                            formControlName = \"preferredOccupation\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Language Preference:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.languagePreference}} \r\n                            [(ngModel)] = \"claimantSO.languagePreference\" \r\n                            formControlName = \"languagePreference\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Gender and education Level div -->\r\n            <div class = \"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Gender:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.gender}} \r\n                            [(ngModel)] = \"claimantSO.gender\" \r\n                            formControlName = \"gender\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Educational Level:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.educationLevel}} \r\n                            [(ngModel)] = \"claimantSO.educationLevel\" \r\n                            formControlName = \"educationLevel\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Race and Ethnicity div -->\r\n            <div class = \"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Race:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                                class = \"field\" \r\n                                placeholder = {{claimantSO.race}} \r\n                                [(ngModel)] = \"claimantSO.race\" \r\n                                formControlName = \"race\"\r\n                                readonly = \"readonly\"\r\n                                disabled>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Ethnicity:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.ethnicity}} \r\n                            [(ngModel)] = \"claimantSO.ethnicity\" \r\n                            formControlName = \"ethnicity\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Edit Claimant Details Button -->\r\n            <div class = \"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <button type = \"button\" \r\n                        class = \"btn btn-primary\" \r\n                        (click) = \"openEditClaimantDetails(claimantSO)\">\r\n                            <b>Edit Claimant Details</b>\r\n                    </button>\r\n                </div>\r\n                <br>\r\n                <br>\r\n            </div>\r\n\r\n            <!-- Address fields -->\r\n            <h4 class = \"p-2\">\r\n                Claimant Address\r\n            </h4>\r\n\r\n            <!-- Address Line 1 -->\r\n            <div class = \"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Address Line 1:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.address[0].addressLine1}} \r\n                            [(ngModel)] = \"claimantSO.address[0].addressLine1\" \r\n                            formControlName = \"addressLine1\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Address Line 2 -->\r\n            <div class = \"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Address Line 2:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.address[0].addressLine2}} \r\n                            [(ngModel)] = \"claimantSO.address[0].addressLine2\" \r\n                            formControlName = \"addressLine2\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- City and State div -->\r\n            <div class = \"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        City:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.address[0].city}} \r\n                            [(ngModel)] = \"claimantSO.address[0].city\" \r\n                            formControlName = \"city\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        State:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.address[0].state}} \r\n                            [(ngModel)] = \"claimantSO.address[0].state\" \r\n                            formControlName = \"state\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Zip code and Zip code extension -->\r\n            <div class=\"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Zip Code:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.address[0].zipCode}} \r\n                            [(ngModel)] = \"claimantSO.address[0].zipCode\" \r\n                            formControlName = \"zipCode\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <label class = \"col-xs-12 head control-label\">\r\n                        Zip Code Extension:\r\n                    </label>\r\n                    <div class = \"col-xs-12 has-feedback\">\r\n                        <input type = \"text\" \r\n                            class = \"field\" \r\n                            placeholder = {{claimantSO.address[0].zipExt}} \r\n                            [(ngModel)] = \"claimantSO.address[0].zipExt\" \r\n                            formControlName = \"zipExt\"\r\n                            readonly = \"readonly\"\r\n                            disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Edit Claimant Address Button -->\r\n            <div class =\"col-xs-12 no-padding\">\r\n                <div class = \"col-xs-12 col-md-6\">\r\n                    <button type = \"button\" \r\n                        class = \"btn btn-primary\" \r\n                        (click) = \"openEditClaimantAddresses(claimantSO.address)\">\r\n                        <b>Edit Claimant Address</b>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/claimant-registration/claimant-registration.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/claimant-registration/claimant-registration.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class = \"p-2\">\r\n  Claimant Registration\r\n</h4>\r\n\r\n\r\n\r\n<form [formGroup] = \"profileForm\">\r\n  <div class = \"form-group\">\r\n\r\n    <!-- SSN and CONFIRM SSN div -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span>SSN:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['ssn'].invalid && profileForm.controls['ssn'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input\r\n            [class] = \"profileForm.controls['ssn'].invalid && profileForm.controls['ssn'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['ssn'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"userProfileModel.ssn\"\r\n            formControlName = \"ssn\"\r\n            [hiddenInput] = \"true\"\r\n            mask = \"XXX-XX0-000\"\r\n            [showMaskTyped] = \"true\">\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['ssn'].invalid && profileForm.controls['ssn'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"ssn\"\r\n              label = \"SSN\">\r\n\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter an SSN.\r\n                </p>\r\n              </ng-template>\r\n\r\n              <ng-template valError = \"minlength\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Minimum length is 9 digits. Please enter a SSN that is 9-digits in length.\r\n                </p>\r\n              </ng-template>\r\n\r\n              <ng-template valError = \"maxlength\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Maximum length is 9 digits. Please enter a SSN that is 9-digits in length.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf = \"debug==true\">\r\n          <br>\r\n          DEBUG: model.ssn content: {{userProfileModel.ssn}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n\r\n      </div>\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span>Confirm SSN:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['confirmSsn'].invalid && profileForm.controls['confirmSsn'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input\r\n            [class] = \"profileForm.controls['confirmSsn'].invalid && profileForm.controls['confirmSsn'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['confirmSsn'].invalid? '(Required)' : '' \"\r\n            formControlName = \"confirmSsn\"\r\n            [hiddenInput] = \"true\"\r\n            mask = \"XXX-XX0-000\"\r\n            [showMaskTyped] = \"true\">\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['confirmSsn'].invalid && profileForm.controls['confirmSsn'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"confirmSsn\" label = \"Confirm SSN\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please confirm your SSN.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n\r\n            <!-- Not possible in ngx-valdemort -->\r\n            <p *ngIf = \"profileForm.controls['ssn'].value != profileForm.controls['confirmSsn'].value && profileForm.controls['confirmSsn'].touched\"\r\n              class = \"ng-scope\">\r\n              <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n              Confirm SSN does not match SSN.\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf = \"debug==true\">\r\n          <br>\r\n          DEBUG: model.ssn content: {{userProfileModel.ssn}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- First Name and Last Name div -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> First Name:\r\n        </label>\r\n        <div\r\n          [class] = \"profileForm.controls['firstName'].invalid && profileForm.controls['firstName'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input\r\n            [class] = \"profileForm.controls['firstName'].invalid && profileForm.controls['firstName'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['firstName'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"userProfileModel.firstName\"\r\n            formControlName = \"firstName\" \r\n            required>\r\n\r\n          <!-- ERROR -->\r\n          <span *ngIf = \"profileForm.controls['firstName'].invalid && profileForm.controls['firstName'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\" \r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"firstName\"\r\n              label = \"The first name\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid first name.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf = \"debug==true\">\r\n          <br>\r\n          DEBUG: model.firstName content: {{userProfileModel.firstName}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n\r\n      </div>\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Last Name:\r\n        </label>\r\n        <div\r\n          [class] = \"profileForm.controls['lastName'].invalid && profileForm.controls['lastName'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input [class] = \"profileForm.controls['lastName'].invalid && profileForm.controls['lastName'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['lastName'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"userProfileModel.lastName\"\r\n            formControlName = \"lastName\">\r\n\r\n\r\n          <!-- ERROR -->\r\n          <span *ngIf = \"profileForm.controls['lastName'].invalid && profileForm.controls['lastName'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"lastName\"\r\n              label = \"The last name\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid last name.\r\n                </p>\r\n              </ng-template>\r\n\r\n            </val-errors>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div *ngIf = \"debug==true\">\r\n          <br>\r\n          DEBUG: model.lastName content: {{userProfileModel.lastName}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Middle Initial and Date of Birth div -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          Middle Initial:\r\n        </label>\r\n        <div class = \"col-xs-12 has-feedback\">\r\n          <!-- FORM INPUT -->\r\n          <input class = \"edit_field\"\r\n            type = \"text\"\r\n            [(ngModel)] = \"userProfileModel.middleInitial\"\r\n            formControlName = \"middleInitial\">\r\n\r\n          <!-- ERROR -->\r\n          <span *ngIf = \"profileForm.controls['middleInitial'].invalid && profileForm.controls['middleInitial'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"middleInitial\">\r\n              <ng-template valError = \"maxlength\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Middle Initial can only have a maximum of 1 letter\r\n                </p>\r\n              </ng-template>\r\n\r\n              <ng-template valError = \"pattern\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Only a letter can be entered as a middle initial\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n\r\n        </div>\r\n        <div *ngIf = \"debug==true\">\r\n          <br>\r\n          DEBUG: model.middleInitial content: {{userProfileModel.middleInitial}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label for = \"dateOfBirth\"\r\n          class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span>\r\n          Date of Birth:\r\n        </label>\r\n        <div\r\n          [class] = \"profileForm.controls['dateOfBirth'].invalid && profileForm.controls['dateOfBirth'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <input type = \"text\"\r\n            [class] = \"profileForm.controls['dateOfBirth'].invalid && profileForm.controls['dateOfBirth'].touched ? 'edit_field error': 'edit_field'\"\r\n            [(ngModel)] = \"userProfileModel.dateOfBirth\"\r\n            formControlName = \"dateOfBirth\"\r\n            ngbDatepicker #d = \"ngbDatepicker\"\r\n            (click) = \"d.toggle()\">\r\n\r\n\r\n          <!-- ERROR -->\r\n          <span *ngIf = \"profileForm.controls['dateOfBirth'].invalid && profileForm.controls['dateOfBirth'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"dateOfBirth\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid date of birth.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n        <div *ngIf = \"debug==true\">\r\n          <br>\r\n          DEBUG: model.dateOfBirth content: {{userProfileModel.dateOfBirth | json}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Home Phone and Mobile Phone div -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span>Home Phone:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input\r\n            [class] = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['homePhone'].invalid? '(000) 000-000 (Required)' : '' \"\r\n            [(ngModel)] = \"userProfileModel.homePhone\"\r\n            formControlName = \"homePhone\"\r\n            mask = \"(000) 000-0000\">\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['homePhone'].invalid && profileForm.controls['homePhone'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"homePhone\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid home phone.\r\n                </p>\r\n              </ng-template>\r\n\r\n              <ng-template valError = \"pattern\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Only numbers are allowed to be inputted in this field.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf = \"debug==true\">\r\n          <br>\r\n          DEBUG: model.homePhone content: {{userProfileModel.homePhone}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n\r\n      </div>\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label for = \"mobilePhone\"\r\n          class = \"col-xs-12 head control-label\">Mobile Phone:\r\n        </label>\r\n        <div class = \"col-xs-12 has-feedback\">\r\n          <input type = \"text\"\r\n            class = \"form-control edit_field\"\r\n            [(ngModel)] = \"userProfileModel.mobilePhone\"\r\n            formControlName = \"mobilePhone\"\r\n            placeholder = \"(000) 000-000\"\r\n            mask = \"(000) 000-0000\">\r\n          <!-- ERROR   -->\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"mobilePhone\">\r\n              <ng-template valError = \"pattern\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Only numbers are allowed to be inputted in this field.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n        <div *ngIf = \"debug==true\">\r\n          <br>\r\n          DEBUG: model.mobilePhone content: {{userProfileModel.mobilePhone}}\r\n          <br>\r\n          DEBUG: profileForm status: {{profileForm.status}}\r\n          <br>\r\n          DEBUG: profileForm dirty: {{profileForm.dirty}}\r\n          <br>\r\n          DEBUG: profileForm touched: {{profileForm.touched}}\r\n          <br>\r\n          DEBUG: model content: {{ userProfileModel | json }}\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Preferred Occupation and Language Preference div -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Preferred Occupation:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['preferredOccupation'].invalid && profileForm.controls['preferredOccupation'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input [class] = \"profileForm.controls['preferredOccupation'].invalid && profileForm.controls['preferredOccupation'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['preferredOccupation'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"userProfileModel.preferredOccupation\"\r\n            formControlName = \"preferredOccupation\">\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['preferredOccupation'].invalid && profileForm.controls['preferredOccupation'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"preferredOccupation\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid preferred occupation.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Language Preference:\r\n        </label>\r\n        <div [class]=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <select [class] = \"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched ? 'edit_field error': 'edit_field'\"\r\n            formControlName = \"languagePreference\"\r\n            [compareWith] = \"compareFn\">\r\n            <option value = \"\"\r\n              disabled=true>\r\n              (Required)\r\n            </option>\r\n            <option [value]=\"choice\"\r\n              *ngFor=\"let choice of languagePreferenceChoices\">\r\n              {{choice}}\r\n            </option>\r\n          </select>\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf=\"profileForm.controls['languagePreference'].invalid && profileForm.controls['languagePreference'].touched\"\r\n            class=\"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden=\"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"languagePreference\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please choose a valid language preference.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Gender and education Level div -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Gender:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <select\r\n            [class] = \"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched ? 'edit_field error': 'edit_field'\"\r\n            formControlName = \"gender\"\r\n            [compareWith] = \"compareFn\">\r\n            <option value = \"\" \r\n              disabled = true>\r\n              (Required)\r\n            </option>\r\n            <option [value] = \"choice\"\r\n              *ngFor = \"let choice of genderChoices\">\r\n              {{choice}}\r\n            </option>\r\n          </select>\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['gender'].invalid && profileForm.controls['gender'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"gender\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please choose a valid gender.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Education Level:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <select\r\n            [class] = \"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched ? 'edit_field error': 'edit_field'\"\r\n            formControlName = \"educationLevel\"\r\n            [compareWith] = \"compareFn\" \r\n            required>\r\n            <option value = \"\" \r\n              disabled = true>\r\n              (Required)\r\n            </option>\r\n            <option [value] = \"choice\"\r\n              *ngFor = \"let choice of educationLevelChoices\">\r\n              {{choice}}\r\n            </option>\r\n          </select>\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['educationLevel'].invalid && profileForm.controls['educationLevel'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"educationLevel\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please choose a valid Education Level.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Race and Ethnicity div -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Race:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <select\r\n            [class] = \"profileForm.controls['race'].invalid && profileForm.controls['race'].touched ? 'edit_field error': 'edit_field'\"\r\n            formControlName = \"race\"\r\n            [compareWith] = \"compareFn\">\r\n            <option value = \"\"\r\n              disabled = true>\r\n              (Required)\r\n            </option>\r\n            <option [value] = \"choice\"\r\n              *ngFor = \"let choice of raceChoices\">\r\n              {{choice}}\r\n            </option>\r\n          </select>\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['race'].invalid && profileForm.controls['race'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"race\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please choose a valid Race.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Ethnicity:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <select [class] = \"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched ? 'edit_field error': 'edit_field'\"\r\n            formControlName = \"ethnicity\"\r\n            [compareWith] = \"compareFn\">\r\n            <option value = \"\"\r\n              disabled = true>\r\n              (Required)\r\n            </option>\r\n            <option [value] = \"choice\"\r\n              *ngFor = \"let choice of ethnicityChoices\">\r\n              {{choice}}\r\n            </option>\r\n          </select>\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['ethnicity'].invalid && profileForm.controls['ethnicity'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"ethnicity\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please choose a valid Ethnicity.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Address fields -->\r\n    <h4 class = \"p-2\">\r\n      Claimant Address\r\n    </h4>\r\n\r\n    <!-- Address Line 1 -->\r\n    <div class = \"col-xs-12 col-md-12\">\r\n      <label class = \"col-xs-12 head control-label\">\r\n        <span class = \"text-danger\">*</span> Address Line 1:\r\n      </label>\r\n      <div [class] = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n        <!-- FORM INPUT -->\r\n        <input\r\n          [class] = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched ? 'edit_field error': 'edit_field'\"\r\n          type = \"text\"\r\n          [placeholder] = \"profileForm.controls['addressLine1'].invalid? '(Required)' : '' \"\r\n          [(ngModel)] = \"userProfileModel.address[0].addressLine1\"\r\n          formControlName = \"addressLine1\">\r\n\r\n        <!-- ERROR   -->\r\n        <span *ngIf = \"profileForm.controls['addressLine1'].invalid && profileForm.controls['addressLine1'].touched\"\r\n          class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n          aria-hidden = \"true\">\r\n        </span>\r\n\r\n        <div class = \"text-danger\">\r\n          <val-errors controlName = \"addressLine1\">\r\n            <ng-template valError = \"required\">\r\n              <p class = \"ng-scope\">\r\n                <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Address Line 1.\r\n              </p>\r\n            </ng-template>\r\n          </val-errors>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Address Line 2 -->\r\n    <div class = \"col-xs-12 col-md-12\">\r\n      <label class = \"col-xs-12 head control-label\">\r\n        <span class = \"text-danger\">*</span> Address Line 2:\r\n      </label>\r\n      <div [class] = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n        <!-- FORM INPUT -->\r\n        <input [class] = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched ? 'edit_field error': 'edit_field'\"\r\n          type = \"text\"\r\n          [placeholder] = \"profileForm.controls['addressLine2'].invalid? '(Required)' : '' \"\r\n          [(ngModel)] = \"userProfileModel.address[0].addressLine2\"\r\n          formControlName = \"addressLine2\">\r\n        <!-- ERROR   -->\r\n        <span *ngIf = \"profileForm.controls['addressLine2'].invalid && profileForm.controls['addressLine2'].touched\"\r\n          class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n          aria-hidden = \"true\">\r\n        </span>\r\n\r\n        <div class = \"text-danger\">\r\n          <val-errors controlName = \"addressLine2\">\r\n            <ng-template valError = \"required\">\r\n              <p class = \"ng-scope\">\r\n                <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                Please enter a valid Address Line 2.\r\n              </p>\r\n            </ng-template>\r\n          </val-errors>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- City and State div -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> City:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input [class] = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['city'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"userProfileModel.address[0].city\" \r\n            formControlName = \"city\">\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['city'].invalid && profileForm.controls['city'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"city\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid City.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> State:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <select [class] = \"profileForm.controls['state'].invalid && profileForm.controls['state'].touched ? 'edit_field error': 'edit_field'\"\r\n            formControlName = \"state\"\r\n            [compareWith] = \"compareFn\">\r\n            <option value = \"\"\r\n              disabled = true>\r\n              (Required)\r\n            </option>\r\n            <option [value] = \"choice\"\r\n              *ngFor = \"let choice of stateChoices\">\r\n              {{choice}}\r\n            </option>\r\n          </select>\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['state'].invalid && profileForm.controls['state'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"state\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please choose a valid state.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Zip code and Zip code extension -->\r\n    <div class = \"col-xs-12 no-padding\">\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Zip Code:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input [class] = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['zipCode'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"userProfileModel.address[0].zipCode\"\r\n            formControlName = \"zipCode\">\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['zipCode'].invalid && profileForm.controls['zipCode'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\"></span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"zipCode\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid Zip Code.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class = \"col-xs-12 col-md-6\">\r\n        <label class = \"col-xs-12 head control-label\">\r\n          <span class = \"text-danger\">*</span> Zip Code Extension:\r\n        </label>\r\n        <div [class] = \"profileForm.controls['zipExt'].invalid && profileForm.controls['zipExt'].touched ? 'col-xs-12 has-error has-feedback': 'col-xs-12 has-feedback'\">\r\n          <!-- FORM INPUT -->\r\n          <input [class] = \"profileForm.controls['zipExt'].invalid && profileForm.controls['zipExt'].touched ? 'edit_field error': 'edit_field'\"\r\n            type = \"text\"\r\n            [placeholder] = \"profileForm.controls['zipExt'].invalid? '(Required)' : '' \"\r\n            [(ngModel)] = \"userProfileModel.address[0].zipExt\"\r\n            formControlName = \"zipExt\">\r\n\r\n          <!-- ERROR   -->\r\n          <span *ngIf = \"profileForm.controls['zipExt'].invalid && profileForm.controls['zipExt'].touched\"\r\n            class = \"glyphicon glyphicon-exclamation-sign form-control-feedback\"\r\n            aria-hidden = \"true\">\r\n          </span>\r\n\r\n          <div class = \"text-danger\">\r\n            <val-errors controlName = \"zipExt\">\r\n              <ng-template valError = \"required\">\r\n                <p class = \"ng-scope\">\r\n                  <span class = \"glyphicon glyphicon-exclamation-sign\"></span>\r\n                  Please enter a valid Zip Code Extension.\r\n                </p>\r\n              </ng-template>\r\n            </val-errors>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class = \"col-xs-12 col-md-12\">\r\n      <button type = \"submit\"\r\n        class = \"btn btn-success\"\r\n        (click) = \"verifyBeforeSubmit()\">\r\n        Submit\r\n      </button>\r\n      <br>\r\n      <button class = \"btn btn-success\"\r\n        (click) = \"FillForm()\">\r\n        Fill Up & Submit\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/claimant-search/claimant-search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/claimant-search/claimant-search.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"claimantSO\">\r\n  <ng-container *ngIf=\"claimantSO.length == 0; else showTable\">\r\n  </ng-container>\r\n  <ng-template #showTable>\r\n    <mat-table [dataSource]=\"claimantSO\">\r\n        <ng-container matColumnDef=\"ssn\">\r\n          <th mat-header-cell *matHeaderCellDef>SSN</th>\r\n          <td mat-cell *matCellDef=\"let ClaimantSO\" >\r\n            <a class=\"parent\" style=\"display: block; color:blue;\" routerLink=\"/main/claimant-overview/{{ClaimantSO.claimantId}}\">\r\n            {{ClaimantSO.ssn | optSsnPipe}}\r\n            </a>\r\n          </td>\r\n        </ng-container>\r\n      \r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef>Name</th>\r\n          <td class=\"\"mat-cell *matCellDef=\"let ClaimantSO\">{{ClaimantSO.firstName}} {{ClaimantSO.lastName}}</td>\r\n        </ng-container>\r\n      \r\n        <ng-container matColumnDef=\"dateOfBirth\">\r\n          <th mat-header-cell *matHeaderCellDef>Date of Birth</th>\r\n          <td mat-cell *matCellDef=\"let ClaimantSO\">{{ClaimantSO.dateOfBirth | optDatePipe}}</td>\r\n        </ng-container>\r\n      \r\n        <ng-container matColumnDef=\"homePhone\">\r\n          <th mat-header-cell *matHeaderCellDef>Home Phone</th>\r\n          <td mat-cell *matCellDef=\"let ClaimantSO\">{{ClaimantSO.homePhone}}</td>\r\n        </ng-container>\r\n      \r\n        <ng-container matColumnDef=\"mobilePhone\">\r\n          <th mat-header-cell *matHeaderCellDef>Mobile Phone</th>\r\n          <td mat-cell *matCellDef=\"let ClaimantSO\">{{ClaimantSO.mobilePhone | optPhonePipe}}</td>\r\n        </ng-container>\r\n      \r\n        <ng-container matColumnDef=\"address\">\r\n          <th mat-header-cell *matHeaderCellDef>Address</th>\r\n          <td mat-cell *matCellDef=\"let ClaimantSO\">{{ClaimantSO.address | optAddressPipe}}</td>\r\n        </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n      <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay\"></tr>\r\n    </mat-table>\r\n  </ng-template>\r\n</ng-container>\r\n<button (click)=\"refreshToken()\">Refresh</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p>\r\n  home works eyo!\r\n  this is the 4:45pm version\r\n</p>\r\n\r\n<button (click)=\"this.getToken()\">Press this to see token</button>\r\n<br>\r\n<p> id to get: </p><input type=\"text\" [(ngModel)]=\"this.userid\">\r\n<br>\r\n<button (click)=\"this.getAgencyButton()\">Press this to see what the agency service returns</button>\r\n\r\n\r\n<!-- <app-jsquery-test></app-jsquery-test> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrapper\">\r\n    <app-side-nav-bar></app-side-nav-bar>\r\n    <div id = \"main-toastr\" toastContainer></div>\r\n  <div id=\"content\" class=\"container\">\r\n    <app-top-nav-bar></app-top-nav-bar>\r\n   <router-outlet>\r\n   </router-outlet>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-authorized/not-authorized.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-authorized/not-authorized.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-authorized works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-nav-bar/side-nav-bar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-nav-bar/side-nav-bar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Side Nav Bar Section-->\r\n<div class=\"bg-primary\">\r\n  <nav id=\"sidebar\" aria-label=\"Side Nav Bar\" ng-controller=\"SideNavBarCtrl as sideNavBar\">\r\n    <div ng-if=\"!sideNavBar.portalService.getIsNavBarMinimized()\">\r\n      <a ui-sref=\"agency-portal.home\"> <img alt=\"logo\" class=\"logo logo-width logo-style mob_hide\" src=\"https://agency-portal.opt-dev.optimumui.com/agency-portal/optimum-ui-customizations/image/state_logo.png\"> </a>\r\n    </div>\r\n    <div class=\"sidebar-header\">\r\n          <div class=\"text-center rounded-section\">\r\n              <h3>Agency Portal</h3>\r\n              <strong>AP</strong>\r\n          </div>\r\n      </div>\r\n    <ul side-navigation id=\"side-menu\" class=\"list-unstyled components\">\r\n      <li ui-sref-active=\"active\" ng-click=\"sideNavBar.collapse($event)\">\r\n        <a [routerLink] = \"['home']\" ui-sref=\"portal.main\" uib-tooltip=\"Home\" tooltip-placement=\"right\" tooltip-enable=\"sideNavBar.toolTipFlag && sideNavBar.portalService.getIsNavBarMinimized()\">\r\n          <div>\r\n            <i class=\"glyphicon glyphicon-home\"></i><span class=\"sideNavText\">Home</span>\r\n          </div>\r\n        </a>\r\n        <!-- <a [routerLink] = \"['optimum-form']\" ui-sref=\"portal.main\" uib-tooltip=\"Optimum Form\" tooltip-placement=\"right\" tooltip-enable=\"sideNavBar.toolTipFlag && sideNavBar.portalService.getIsNavBarMinimized()\">\r\n          <div>\r\n            <i class=\"glyphicon glyphicon-home\"></i><span class=\"sideNavText\">Optimum Form</span>\r\n          </div>\r\n        </a> -->\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n  <!--End Side Nav Bar-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-nav-bar/top-nav-bar.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-nav-bar/top-nav-bar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!--Top Nav Bar Section-->\r\n  <nav class=\"navbar navbar-default\" aria-label=\"Top Nav Bar\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-7 col-sm-push-5 margin-bot-sm\">\r\n           <div class=\"row pull-right\">\r\n            <span class=\"hidden-xs\">\r\n              <span class=\"icon margin-right custom-welcome\">Welcome User</span>\r\n            </span>\r\n            <a class=\"view icon p-2 custom-m-1\" ui-sref=\"sign-out({ manualSignout:true })\" (click) = \"doLogout()\">Logout</a>\r\n            <span ng-if=\"searchBar.displayLanguageTranslator\" ></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5 col-sm-pull-7\">\r\n          <button type=\"button\" id=\"sidebarCollapse\" class=\"pull-left icon btn btn-primary\" title=\"Menu\" aria-label=\"Menu\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n          <form role=\"search\" class=\"navbar-form-custom searchbar-custom search-bar-width\" >\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" placeholder=\"Search\" class=\"form-control\" id=\"searchText\">\r\n              <span class=\"input-group-addon\">\r\n               <button class=\"fa fa-search\" (click)=\"searchClaimant()\"></button>\r\n              </span>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./projects/opt-library/src/choices/choices.ts":
/*!*****************************************************!*\
  !*** ./projects/opt-library/src/choices/choices.ts ***!
  \*****************************************************/
/*! exports provided: STATECHOICES, GENDERCHOICES, RACECHOICES, LANGUAGEPREFERENCECHOICES, ETHNICITYCHOICES, EDUCATIONLEVELCHOICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATECHOICES", function() { return STATECHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDERCHOICES", function() { return GENDERCHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RACECHOICES", function() { return RACECHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGEPREFERENCECHOICES", function() { return LANGUAGEPREFERENCECHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETHNICITYCHOICES", function() { return ETHNICITYCHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDUCATIONLEVELCHOICES", function() { return EDUCATIONLEVELCHOICES; });
var STATECHOICES = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    " North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"
];
var GENDERCHOICES = ['Male', 'Female', 'I prefer not to answer',];
var RACECHOICES = [
    'White',
    'Black or African American',
    'American Indian or Alaska Native',
    'Native Hawaiian or other Pacific Islander',
    'Asian',
    'I prefer not to answer'
];
var LANGUAGEPREFERENCECHOICES = ['English', 'Spanish'];
var ETHNICITYCHOICES = ['Hispanic or Latino', 'Not Hispanic or Latino', 'I prefer not to answer'];
var EDUCATIONLEVELCHOICES = [
    'Completed 1st Grade',
    'Completed 2nd Grade',
    'Completed 3rd Grade',
    'Completed 4th Grade',
    'Completed 5th Grade',
    'Completed 6th Grade',
    'Completed 7th Grade',
    'Completed 8th Grade',
    'Completed 9th Grade',
    'Completed 10th Grade',
    'Completed 11th Grade',
    'High School Degree',
    'GED or High School Equivalency Diploma',
    'Some Vocational or Technical School (No Certificate)',
    'Some College (No Degree)',
    'Associate\'s Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Doctoral Degree',
    'Post-Doctorate Studies'
];


/***/ }),

/***/ "./projects/opt-library/src/custom-pipes/opt-address.pipe.ts":
/*!*******************************************************************!*\
  !*** ./projects/opt-library/src/custom-pipes/opt-address.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: OptAddressPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptAddressPipe", function() { return OptAddressPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptAddressPipe = /** @class */ (function () {
    function OptAddressPipe() {
    }
    OptAddressPipe.prototype.transform = function (address) {
        var newAddress = "";
        newAddress += address[0].addressLine1;
        if (address[0].addressLine2 != null) {
            newAddress += ", ";
            newAddress += address[0].addressLine2;
        }
        newAddress = newAddress + ", " + "\n" + address[0].city + ", " + address[0].state + ", " + address[0].zipCode;
        if (address[0].zipExt != null) {
            newAddress += "-";
            newAddress += address[0].zipExt;
        }
        return newAddress;
    };
    OptAddressPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'optAddressPipe' })
    ], OptAddressPipe);
    return OptAddressPipe;
}());



/***/ }),

/***/ "./projects/opt-library/src/custom-pipes/opt-date.pipe.ts":
/*!****************************************************************!*\
  !*** ./projects/opt-library/src/custom-pipes/opt-date.pipe.ts ***!
  \****************************************************************/
/*! exports provided: OptDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptDatePipe", function() { return OptDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var OptDatePipe = /** @class */ (function () {
    function OptDatePipe(datePipe) {
        this.datePipe = datePipe;
    }
    OptDatePipe.prototype.transform = function (date) {
        var newDate = "";
        newDate = this.datePipe.transform(date, 'MM/dd/yyyy');
        return newDate;
    };
    OptDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'optDatePipe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], OptDatePipe);
    return OptDatePipe;
}());



/***/ }),

/***/ "./projects/opt-library/src/custom-pipes/opt-phone.pipe.ts":
/*!*****************************************************************!*\
  !*** ./projects/opt-library/src/custom-pipes/opt-phone.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: OptPhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptPhonePipe", function() { return OptPhonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");



var OptPhonePipe = /** @class */ (function () {
    function OptPhonePipe(maskPipe) {
        this.maskPipe = maskPipe;
    }
    OptPhonePipe.prototype.transform = function (mobilePhone) {
        var newMobilePhone = "";
        if (mobilePhone.length == 10) {
            newMobilePhone = this.maskPipe.transform(mobilePhone, '(000) 000-0000');
        }
        else if (mobilePhone.length == 11) {
            newMobilePhone = this.maskPipe.transform(mobilePhone, '+0 (000) 000-0000');
        }
        else {
            newMobilePhone = mobilePhone;
        }
        return newMobilePhone;
    };
    OptPhonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'optPhonePipe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_mask__WEBPACK_IMPORTED_MODULE_2__["MaskPipe"]])
    ], OptPhonePipe);
    return OptPhonePipe;
}());



/***/ }),

/***/ "./projects/opt-library/src/custom-pipes/opt-ssn.pipe.ts":
/*!***************************************************************!*\
  !*** ./projects/opt-library/src/custom-pipes/opt-ssn.pipe.ts ***!
  \***************************************************************/
/*! exports provided: OptSsnPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptSsnPipe", function() { return OptSsnPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptSsnPipe = /** @class */ (function () {
    function OptSsnPipe() {
    }
    OptSsnPipe.prototype.transform = function (ssn) {
        var newSSN = "";
        if (ssn.length == 9) {
            for (var count = 0; count < ssn.length; count++) {
                if ((count == 3) || (count == 5)) {
                    newSSN += "-";
                }
                if ((count >= 0) && (count <= 4)) {
                    newSSN += "X";
                }
                else {
                    newSSN += ssn.charAt(count);
                }
            }
            return newSSN;
        }
        else if (ssn.length == 4) {
            for (var count = 0; count < 9; count++) {
                if ((count == 3) || (count == 5)) {
                    newSSN += "-";
                }
                if ((count >= 0) && (count <= 4)) {
                    newSSN += "X";
                }
                else {
                    newSSN += ssn.charAt(count - 5);
                }
            }
            return newSSN;
        }
        else {
            return ssn;
        }
    };
    OptSsnPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'optSsnPipe' })
    ], OptSsnPipe);
    return OptSsnPipe;
}());



/***/ }),

/***/ "./projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditClaimantAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClaimantAddressComponent", function() { return EditClaimantAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _choices_choices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../choices/choices */ "./projects/opt-library/src/choices/choices.ts");
/* harmony import */ var _service_objects_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service-objects/address */ "./projects/opt-library/src/service-objects/address.ts");
/* harmony import */ var _service_objects_claimant_so__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service-objects/claimant-so */ "./projects/opt-library/src/service-objects/claimant-so.ts");
/* harmony import */ var _service_objects_update_claimant_so__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service-objects/update-claimant-so */ "./projects/opt-library/src/service-objects/update-claimant-so.ts");
/* harmony import */ var _portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal-services/claimant.service */ "./projects/opt-library/src/portal-services/claimant.service.ts");
/* harmony import */ var _portal_services_portal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal-services/portal.service */ "./projects/opt-library/src/portal-services/portal.service.ts");










var EditClaimantAddressComponent = /** @class */ (function () {
    function EditClaimantAddressComponent(activeModal, claimantService, portalService, fb) {
        this.activeModal = activeModal;
        this.claimantService = claimantService;
        this.portalService = portalService;
        this.fb = fb;
        this.updateClaimant = new _service_objects_update_claimant_so__WEBPACK_IMPORTED_MODULE_7__["UpdateClaimantSO"]();
        this.claimantProfileCopy = new _service_objects_claimant_so__WEBPACK_IMPORTED_MODULE_6__["ClaimantSO"]();
        this.updateClaimantAddress = new _service_objects_address__WEBPACK_IMPORTED_MODULE_5__["Address"]();
        this.stateChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_4__["STATECHOICES"];
        this.debug = false;
    }
    EditClaimantAddressComponent.prototype.ngOnInit = function () {
        this.updateClaimantAddress = {
            addressLine1: this.portalService.claimantSO.address[0].addressLine1,
            addressLine2: this.portalService.claimantSO.address[0].addressLine2,
            city: this.portalService.claimantSO.address[0].city,
            state: this.portalService.claimantSO.address[0].state,
            zipCode: this.portalService.claimantSO.address[0].zipCode,
            zipExt: this.portalService.claimantSO.address[0].zipExt,
            id: this.portalService.claimantSO.address[0].id,
            lastInsertUpdateBy: this.portalService.claimantSO.address[0].lastInsertUpdateBy,
            lastInsertUpdateTS: this.portalService.claimantSO.address[0].lastInsertUpdateTS
        };
        this.updateClaimant = {
            middleInitial: null,
            homePhone: null,
            mobilePhone: null,
            languagePreference: null,
            educationLevel: null,
            gender: null,
            race: null,
            ethnicity: null,
            ivrPin: null,
            documentDeliveryPreference: null,
            lastInsertUpdateTS: null,
            lastInsertUpdateBy: null,
            address: [this.updateClaimantAddress],
        };
        this.profileForm = this.fb.group({
            addressLine1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addressLine2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zipCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zipExt: [null],
        });
    };
    EditClaimantAddressComponent.prototype.close = function () {
        this.activeModal.close('Close click');
    };
    EditClaimantAddressComponent.prototype.updateClaimantDetails = function () {
        var _this = this;
        console.log(this.updateClaimant);
        console.log(this.updateClaimantAddress);
        this.updateClaimant = {
            middleInitial: null,
            homePhone: null,
            mobilePhone: null,
            languagePreference: null,
            educationLevel: null,
            gender: null,
            race: null,
            ethnicity: null,
            ivrPin: null,
            documentDeliveryPreference: null,
            lastInsertUpdateTS: null,
            lastInsertUpdateBy: null,
            address: [this.updateClaimantAddress],
        };
        this.id = this.portalService.claimantSO.claimantId;
        this.claimantService.updateClaimant(this.id, this.updateClaimant)
            .subscribe(function (updateClaimant) { _this.updateClaimant = updateClaimant; });
        this.close();
    };
    EditClaimantAddressComponent.prototype.compareFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditClaimantAddressComponent.prototype, "address", void 0);
    EditClaimantAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'opt-edit-claimant-address',
            template: __webpack_require__(/*! raw-loader!./edit-claimant-address.component.html */ "./node_modules/raw-loader/index.js!./projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_8__["ClaimantService"], _portal_services_portal_service__WEBPACK_IMPORTED_MODULE_9__["PortalService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditClaimantAddressComponent);
    return EditClaimantAddressComponent;
}());



/***/ }),

/***/ "./projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditClaimantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClaimantDetailsComponent", function() { return EditClaimantDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _choices_choices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../choices/choices */ "./projects/opt-library/src/choices/choices.ts");
/* harmony import */ var _service_objects_update_claimant_so__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service-objects/update-claimant-so */ "./projects/opt-library/src/service-objects/update-claimant-so.ts");
/* harmony import */ var _service_objects_claimant_so__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service-objects/claimant-so */ "./projects/opt-library/src/service-objects/claimant-so.ts");
/* harmony import */ var _portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../portal-services/claimant.service */ "./projects/opt-library/src/portal-services/claimant.service.ts");
/* harmony import */ var _portal_services_portal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal-services/portal.service */ "./projects/opt-library/src/portal-services/portal.service.ts");









var EditClaimantDetailsComponent = /** @class */ (function () {
    function EditClaimantDetailsComponent(activeModal, claimantService, portalService, fb) {
        this.activeModal = activeModal;
        this.claimantService = claimantService;
        this.portalService = portalService;
        this.fb = fb;
        this.updateClaimant = new _service_objects_update_claimant_so__WEBPACK_IMPORTED_MODULE_5__["UpdateClaimantSO"]();
        this.claimantProfileCopy = new _service_objects_claimant_so__WEBPACK_IMPORTED_MODULE_6__["ClaimantSO"]();
        this.claimantProfileEdit = new _service_objects_claimant_so__WEBPACK_IMPORTED_MODULE_6__["ClaimantSO"]();
        this.genderChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_4__["GENDERCHOICES"];
        this.raceChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_4__["RACECHOICES"];
        this.ethnicityChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_4__["ETHNICITYCHOICES"];
        this.educationLevelChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_4__["EDUCATIONLEVELCHOICES"];
        this.languagePreferenceChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_4__["LANGUAGEPREFERENCECHOICES"];
        this.debug = false;
    }
    EditClaimantDetailsComponent.prototype.ngOnInit = function () {
        this.claimantProfileCopy = {
            claimantId: this.portalService.claimantSO.claimantId,
            ssn: this.portalService.claimantSO.ssn,
            dateOfBirth: this.portalService.claimantSO.dateOfBirth,
            firstName: this.portalService.claimantSO.firstName,
            middleInitial: this.portalService.claimantSO.middleInitial,
            lastName: this.portalService.claimantSO.lastName,
            homePhone: this.portalService.claimantSO.homePhone,
            mobilePhone: this.portalService.claimantSO.mobilePhone,
            languagePreference: this.portalService.claimantSO.languagePreference,
            educationLevel: this.portalService.claimantSO.educationLevel,
            gender: this.portalService.claimantSO.gender,
            race: this.portalService.claimantSO.race,
            ethnicity: this.portalService.claimantSO.ethnicity,
            lastInsertUpdateTS: this.portalService.claimantSO.lastInsertUpdateTS,
            lastInsertUpdateBy: this.portalService.claimantSO.lastInsertUpdateBy,
            ivrPin: this.portalService.claimantSO.ivrPin,
            documentDeliveryPreference: this.portalService.claimantSO.documentDeliveryPreference,
            address: this.portalService.claimantSO.address,
            email: this.portalService.claimantSO.email,
            preferredOccupation: this.portalService.claimantSO.preferredOccupation,
            alternateClaimantId: this.portalService.claimantSO.alternateClaimantId
        };
        this.updateClaimant = {
            middleInitial: null,
            homePhone: null,
            mobilePhone: null,
            languagePreference: null,
            educationLevel: null,
            gender: null,
            race: null,
            ethnicity: null,
            ivrPin: null,
            documentDeliveryPreference: null,
            lastInsertUpdateTS: null,
            lastInsertUpdateBy: null,
            address: null,
        };
        this.profileForm = this.fb.group({
            ssn: [null],
            alternateClaimantId: [null],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)],
            middleInitial: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-z]*")
                ])
            ],
            homePhone: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[0-9]*")
                ])
            ],
            mobilePhone: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[0-9]*")
                ])
            ],
            //There is no way they can choose null, so no validations are needed
            languagePreference: [null],
            gender: [null],
            educationLevel: [null],
            race: [null],
            ethnicity: [null],
        });
    };
    EditClaimantDetailsComponent.prototype.close = function () {
        this.activeModal.close('Close click');
    };
    EditClaimantDetailsComponent.prototype.updateClaimantDetails = function () {
        var _this = this;
        this.updateClaimant = {
            middleInitial: this.claimantProfileCopy.middleInitial,
            homePhone: this.claimantProfileCopy.homePhone,
            mobilePhone: this.claimantProfileCopy.mobilePhone,
            languagePreference: this.claimantProfileCopy.languagePreference,
            gender: this.claimantProfileCopy.gender,
            educationLevel: this.claimantProfileCopy.educationLevel,
            race: this.claimantProfileCopy.race,
            ethnicity: this.claimantProfileCopy.ethnicity,
            ivrPin: null,
            documentDeliveryPreference: null,
            lastInsertUpdateTS: null,
            lastInsertUpdateBy: null,
            address: null,
        };
        this.id = this.portalService.claimantSO.claimantId;
        this.close();
        return this.claimantService.updateClaimant(this.id, this.updateClaimant)
            .subscribe(function (updateClaimant) {
            _this.updateClaimant = updateClaimant;
            console.log(_this.claimantProfileCopy);
            _this.portalService.claimantSO = _this.claimantProfileCopy;
            console.log(_this.portalService.claimantSO);
        });
    };
    EditClaimantDetailsComponent.prototype.compareFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditClaimantDetailsComponent.prototype, "input", void 0);
    EditClaimantDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'opt-edit-claimant-details',
            template: __webpack_require__(/*! raw-loader!./edit-claimant-details.component.html */ "./node_modules/raw-loader/index.js!./projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_7__["ClaimantService"], _portal_services_portal_service__WEBPACK_IMPORTED_MODULE_8__["PortalService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditClaimantDetailsComponent);
    return EditClaimantDetailsComponent;
}());



/***/ }),

/***/ "./projects/opt-library/src/lib/opt-library.component.ts":
/*!***************************************************************!*\
  !*** ./projects/opt-library/src/lib/opt-library.component.ts ***!
  \***************************************************************/
/*! exports provided: OptLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptLibraryComponent", function() { return OptLibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptLibraryComponent = /** @class */ (function () {
    function OptLibraryComponent() {
    }
    OptLibraryComponent.prototype.ngOnInit = function () {
    };
    OptLibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'opt-opt-library',
            template: "\n    <p>\n      opt-library works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptLibraryComponent);
    return OptLibraryComponent;
}());



/***/ }),

/***/ "./projects/opt-library/src/lib/opt-library.module.ts":
/*!************************************************************!*\
  !*** ./projects/opt-library/src/lib/opt-library.module.ts ***!
  \************************************************************/
/*! exports provided: OptLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptLibraryModule", function() { return OptLibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_valdemort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-valdemort */ "./node_modules/ngx-valdemort/fesm5/ngx-valdemort.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _opt_library_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opt-library.component */ "./projects/opt-library/src/lib/opt-library.component.ts");
/* harmony import */ var _edit_claimant_address_edit_claimant_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-claimant-address/edit-claimant-address.component */ "./projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component.ts");
/* harmony import */ var _edit_claimant_details_edit_claimant_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-claimant-details/edit-claimant-details.component */ "./projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _custom_pipes_opt_ssn_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../custom-pipes/opt-ssn.pipe */ "./projects/opt-library/src/custom-pipes/opt-ssn.pipe.ts");
/* harmony import */ var _custom_pipes_opt_phone_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../custom-pipes/opt-phone.pipe */ "./projects/opt-library/src/custom-pipes/opt-phone.pipe.ts");
/* harmony import */ var _custom_pipes_opt_address_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../custom-pipes/opt-address.pipe */ "./projects/opt-library/src/custom-pipes/opt-address.pipe.ts");
/* harmony import */ var _custom_pipes_opt_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../custom-pipes/opt-date.pipe */ "./projects/opt-library/src/custom-pipes/opt-date.pipe.ts");














var OptLibraryModule = /** @class */ (function () {
    function OptLibraryModule() {
    }
    OptLibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _opt_library_component__WEBPACK_IMPORTED_MODULE_6__["OptLibraryComponent"],
                _edit_claimant_details_edit_claimant_details_component__WEBPACK_IMPORTED_MODULE_8__["EditClaimantDetailsComponent"],
                _edit_claimant_address_edit_claimant_address_component__WEBPACK_IMPORTED_MODULE_7__["EditClaimantAddressComponent"],
                _custom_pipes_opt_ssn_pipe__WEBPACK_IMPORTED_MODULE_10__["OptSsnPipe"],
                _custom_pipes_opt_phone_pipe__WEBPACK_IMPORTED_MODULE_11__["OptPhonePipe"],
                _custom_pipes_opt_address_pipe__WEBPACK_IMPORTED_MODULE_12__["OptAddressPipe"],
                _custom_pipes_opt_date_pipe__WEBPACK_IMPORTED_MODULE_13__["OptDatePipe"],
            ],
            imports: [
                _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                ngx_valdemort__WEBPACK_IMPORTED_MODULE_2__["ValdemortModule"]
            ],
            exports: [
                _opt_library_component__WEBPACK_IMPORTED_MODULE_6__["OptLibraryComponent"],
                _edit_claimant_address_edit_claimant_address_component__WEBPACK_IMPORTED_MODULE_7__["EditClaimantAddressComponent"],
                _edit_claimant_details_edit_claimant_details_component__WEBPACK_IMPORTED_MODULE_8__["EditClaimantDetailsComponent"],
                _custom_pipes_opt_ssn_pipe__WEBPACK_IMPORTED_MODULE_10__["OptSsnPipe"],
                _custom_pipes_opt_phone_pipe__WEBPACK_IMPORTED_MODULE_11__["OptPhonePipe"],
                _custom_pipes_opt_address_pipe__WEBPACK_IMPORTED_MODULE_12__["OptAddressPipe"],
                _custom_pipes_opt_date_pipe__WEBPACK_IMPORTED_MODULE_13__["OptDatePipe"],
            ],
            entryComponents: [_edit_claimant_details_edit_claimant_details_component__WEBPACK_IMPORTED_MODULE_8__["EditClaimantDetailsComponent"], _edit_claimant_address_edit_claimant_address_component__WEBPACK_IMPORTED_MODULE_7__["EditClaimantAddressComponent"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], ngx_mask__WEBPACK_IMPORTED_MODULE_9__["MaskPipe"]]
        })
    ], OptLibraryModule);
    return OptLibraryModule;
}());



/***/ }),

/***/ "./projects/opt-library/src/lib/opt-library.service.ts":
/*!*************************************************************!*\
  !*** ./projects/opt-library/src/lib/opt-library.service.ts ***!
  \*************************************************************/
/*! exports provided: OptLibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptLibraryService", function() { return OptLibraryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptLibraryService = /** @class */ (function () {
    function OptLibraryService() {
    }
    OptLibraryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptLibraryService);
    return OptLibraryService;
}());



/***/ }),

/***/ "./projects/opt-library/src/portal-services/alert.service.ts":
/*!*******************************************************************!*\
  !*** ./projects/opt-library/src/portal-services/alert.service.ts ***!
  \*******************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        this.router = router;
    }
    AlertService.prototype.success = function (title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            type: 'success',
            title: title,
            text: text
        });
    };
    AlertService.prototype.error = function (title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            type: 'error',
            title: title,
            text: text
        });
    };
    AlertService.prototype.info = function (title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            type: 'info',
            title: title,
            text: text
        });
    };
    AlertService.prototype.warning = function (title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            type: 'warning',
            title: title,
            text: text
        });
    };
    AlertService.prototype.custom = function (swalObject) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(swalObject);
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./projects/opt-library/src/portal-services/claimant.service.ts":
/*!**********************************************************************!*\
  !*** ./projects/opt-library/src/portal-services/claimant.service.ts ***!
  \**********************************************************************/
/*! exports provided: ClaimantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimantService", function() { return ClaimantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toaster.service */ "./projects/opt-library/src/portal-services/toaster.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ClaimantService = /** @class */ (function () {
    function ClaimantService(http, toasterService) {
        this.http = http;
        this.toasterService = toasterService;
        // url = "http://localhost:8080/claimantService/api/claimant";
        this.url = "http://localhost:8082/api/claimant";
    }
    ClaimantService.prototype.getClaimantById = function (claimantId) {
        var claimantUrl = this.url + "/getClaimantById/" + claimantId;
        return this.http.get(claimantUrl);
    };
    ClaimantService.prototype.getAllClaimants = function () {
        var _this = this;
        var claimantUrl = this.url + "/getAllClaimants";
        return this.http.get(claimantUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    };
    ClaimantService.prototype.searchClaimant = function (claimantInfo) {
        var _this = this;
        var claimantUrl = this.url + "/searchClaimant/" + claimantInfo;
        return this.http.get(claimantUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    };
    ClaimantService.prototype.registerClaimant = function (claimantSO) {
        console.log("Inside register claimant api");
        var claimantUrl = this.url + "/registerClaimant";
        return this.http.post(claimantUrl, claimantSO);
    };
    ClaimantService.prototype.updateClaimant = function (id, updateClaimantSO) {
        var _this = this;
        var claimantUrl = this.url + "/updateClaimant/" + id;
        return this.http.put(claimantUrl, updateClaimantSO).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.toasterService.danger("ERROR", "Cannot update profile.");
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    };
    ClaimantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], ClaimantService);
    return ClaimantService;
}());



/***/ }),

/***/ "./projects/opt-library/src/portal-services/modal.service.ts":
/*!*******************************************************************!*\
  !*** ./projects/opt-library/src/portal-services/modal.service.ts ***!
  \*******************************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var ModalService = /** @class */ (function () {
    function ModalService(modalService) {
        this.modalService = modalService;
    }
    ModalService.prototype.open = function (classToRender, content) {
        var modalReference = this.modalService.open(classToRender);
        if (modalReference.componentInstance) {
            modalReference.componentInstance.input = content;
        }
    };
    ModalService.prototype.close = function () {
        this.modalService.dismissAll();
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./projects/opt-library/src/portal-services/portal.service.ts":
/*!********************************************************************!*\
  !*** ./projects/opt-library/src/portal-services/portal.service.ts ***!
  \********************************************************************/
/*! exports provided: PortalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalService", function() { return PortalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortalService = /** @class */ (function () {
    function PortalService() {
    }
    PortalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortalService);
    return PortalService;
}());



/***/ }),

/***/ "./projects/opt-library/src/portal-services/survey.service.ts":
/*!********************************************************************!*\
  !*** ./projects/opt-library/src/portal-services/survey.service.ts ***!
  \********************************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SurveyService = /** @class */ (function () {
    function SurveyService(httpClient) {
        this.httpClient = httpClient;
        // url = "http://localhost:8080/surveyService/api/";
        this.url = "http://localhost:8081/api/";
    }
    SurveyService.prototype.createSurvey = function (survey) {
        var claimantUrl = this.url + "survey/addUpdateSurvey";
        return this.httpClient.post(claimantUrl, survey);
    };
    SurveyService.prototype.getAllSurveys = function () {
        var claimantUrl = this.url + "survey/getAllSurveys";
        return this.httpClient.get(claimantUrl);
    };
    SurveyService.prototype.getSurveyById = function (surveyId) {
        var claimantUrl = this.url + "survey/getSurveyById/" + surveyId;
        return this.httpClient.get(claimantUrl);
    };
    SurveyService.prototype.createSurveyResponse = function (survey) {
        console.log("POSTING", survey);
        var claimantUrl = this.url + "surveyResponse/addResponse";
        return this.httpClient.post(claimantUrl, survey);
    };
    SurveyService.prototype.getSurvey = function (surveyName, claimantId) {
        var claimantUrl = this.url + "survey/getSurvey/" + surveyName + "/" + claimantId + "/";
        return this.httpClient.get(claimantUrl);
    };
    SurveyService.prototype.deleteResponse = function (claimantId) {
        var claimantUrl = this.url + "surveyResponse/deleteResponse/" + claimantId;
        return this.httpClient.delete(claimantUrl).subscribe(function () { return console.log("Old responses deleted"); });
    };
    SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./projects/opt-library/src/portal-services/toaster.service.ts":
/*!*********************************************************************!*\
  !*** ./projects/opt-library/src/portal-services/toaster.service.ts ***!
  \*********************************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var ToasterService = /** @class */ (function () {
    function ToasterService(toastr) {
        this.toastr = toastr;
        this.toastr = toastr;
    }
    ToasterService.prototype.success = function (title, text) {
        this.toastr.success(text, title);
    };
    ToasterService.prototype.info = function (title, text) {
        this.toastr.info(text, title);
    };
    ToasterService.prototype.warning = function (title, text) {
        this.toastr.warning(text, title);
    };
    ToasterService.prototype.danger = function (title, text) {
        this.toastr.error(text, title);
    };
    ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./projects/opt-library/src/public-api.ts":
/*!************************************************!*\
  !*** ./projects/opt-library/src/public-api.ts ***!
  \************************************************/
/*! exports provided: OptLibraryService, OptLibraryComponent, OptLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_opt_library_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/opt-library.service */ "./projects/opt-library/src/lib/opt-library.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptLibraryService", function() { return _lib_opt_library_service__WEBPACK_IMPORTED_MODULE_0__["OptLibraryService"]; });

/* harmony import */ var _lib_opt_library_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/opt-library.component */ "./projects/opt-library/src/lib/opt-library.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptLibraryComponent", function() { return _lib_opt_library_component__WEBPACK_IMPORTED_MODULE_1__["OptLibraryComponent"]; });

/* harmony import */ var _lib_opt_library_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/opt-library.module */ "./projects/opt-library/src/lib/opt-library.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptLibraryModule", function() { return _lib_opt_library_module__WEBPACK_IMPORTED_MODULE_2__["OptLibraryModule"]; });

/*
 * Public API Surface of opt-library
 */





/***/ }),

/***/ "./projects/opt-library/src/service-objects/address.ts":
/*!*************************************************************!*\
  !*** ./projects/opt-library/src/service-objects/address.ts ***!
  \*************************************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "./projects/opt-library/src/service-objects/claimant-so.ts":
/*!*****************************************************************!*\
  !*** ./projects/opt-library/src/service-objects/claimant-so.ts ***!
  \*****************************************************************/
/*! exports provided: ClaimantSO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimantSO", function() { return ClaimantSO; });
var ClaimantSO = /** @class */ (function () {
    function ClaimantSO() {
    }
    return ClaimantSO;
}());



/***/ }),

/***/ "./projects/opt-library/src/service-objects/update-claimant-so.ts":
/*!************************************************************************!*\
  !*** ./projects/opt-library/src/service-objects/update-claimant-so.ts ***!
  \************************************************************************/
/*! exports provided: UpdateClaimantSO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClaimantSO", function() { return UpdateClaimantSO; });
var UpdateClaimantSO = /** @class */ (function () {
    function UpdateClaimantSO() {
    }
    return UpdateClaimantSO;
}());



/***/ }),

/***/ "./src/app/agency-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/agency-service.service.ts ***!
  \*******************************************/
/*! exports provided: AgencyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyServiceService", function() { return AgencyServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/opt-library/src/portal-services/toaster.service */ "./projects/opt-library/src/portal-services/toaster.service.ts");




var AgencyServiceService = /** @class */ (function () {
    function AgencyServiceService(http, toasterService) {
        this.http = http;
        this.toasterService = toasterService;
        this.url = "http://localhost:8080/agencyService";
    }
    AgencyServiceService.prototype.getAgencyStaff = function (agencyStaffId) {
        var agencyUrl = this.url + "/api/agency/" + agencyStaffId;
        // const agencyUrl = `${this.url}/api/agency/getAgencyByUserId/${agencyStaffId}`;
        return this.http.get(agencyUrl);
    };
    AgencyServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], AgencyServiceService);
    return AgencyServiceService;
}());



/***/ }),

/***/ "./src/app/app-init.ts":
/*!*****************************!*\
  !*** ./src/app/app-init.ts ***!
  \*****************************/
/*! exports provided: initializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializer", function() { return initializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


function initializer(keycloak) {
    var _this = this;
    return function () {
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, keycloak.init({
                                config: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].keycloak,
                                initOptions: {
                                    onLoad: 'check-sso',
                                    checkLoginIframe: false
                                },
                                enableBearerInterceptor: true,
                                bearerExcludedUrls: ['/login']
                            })];
                    case 1:
                        _a.sent();
                        resolve();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1);
                        keycloak.clearToken();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_claimant_search_claimant_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/claimant-search/claimant-search.component */ "./src/app/main/claimant-search/claimant-search.component.ts");
/* harmony import */ var _main_claimant_overview_claimant_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/claimant-overview/claimant-overview.component */ "./src/app/main/claimant-overview/claimant-overview.component.ts");
/* harmony import */ var _main_claimant_profile_claimant_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/claimant-profile/claimant-profile.component */ "./src/app/main/claimant-profile/claimant-profile.component.ts");
/* harmony import */ var _main_claimant_registration_claimant_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/claimant-registration/claimant-registration.component */ "./src/app/main/claimant-registration/claimant-registration.component.ts");
/* harmony import */ var _main_claim_claim_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/claim/claim.component */ "./src/app/main/claim/claim.component.ts");
/* harmony import */ var _app_authguard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.authguard */ "./src/app/app.authguard.ts");
/* harmony import */ var _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-authorized/not-authorized.component */ "./src/app/not-authorized/not-authorized.component.ts");













var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        children: [
            {
                path: 'home',
                component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            },
            {
                path: 'claimant-overview/:claimantId',
                component: _main_claimant_overview_claimant_overview_component__WEBPACK_IMPORTED_MODULE_7__["ClaimantOverviewComponent"]
            },
            {
                path: 'claimant-profile',
                component: _main_claimant_profile_claimant_profile_component__WEBPACK_IMPORTED_MODULE_8__["ClaimantProfileComponent"]
            },
            {
                path: 'claimant-registration',
                component: _main_claimant_registration_claimant_registration_component__WEBPACK_IMPORTED_MODULE_9__["ClaimantRegistrationComponent"]
            },
            {
                path: 'claimant-search/:claimantInfo',
                component: _main_claimant_search_claimant_search_component__WEBPACK_IMPORTED_MODULE_6__["ClaimantSearchComponent"]
            },
            {
                path: 'claim/:claimantId',
                component: _main_claim_claim_component__WEBPACK_IMPORTED_MODULE_10__["ClaimComponent"]
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ],
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'not-authorized',
        component: _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_12__["NotAuthorizedComponent"],
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_app_authguard__WEBPACK_IMPORTED_MODULE_11__["AppAuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.authguard.ts":
/*!**********************************!*\
  !*** ./src/app/app.authguard.ts ***!
  \**********************************/
/*! exports provided: AppAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAuthGuard", function() { return AppAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/opt-library/src/portal-services/alert.service */ "./projects/opt-library/src/portal-services/alert.service.ts");





var AppAuthGuard = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppAuthGuard, _super);
    function AppAuthGuard(router, keycloakAngular, alert, activatedRoute) {
        var _this = _super.call(this, router, keycloakAngular) || this;
        _this.router = router;
        _this.keycloakAngular = keycloakAngular;
        _this.alert = alert;
        _this.activatedRoute = activatedRoute;
        return _this;
    }
    AppAuthGuard.prototype.isAccessAllowed = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.authenticated) {
                _this.keycloakAngular.login();
                return;
            }
            var requiredRoles = route.data.roles;
            var sample = _this.activatedRoute.data;
            console.log(sample);
            if (!requiredRoles || requiredRoles.length === 0) {
                return resolve(true);
            }
            else {
                if (!_this.roles || _this.roles.length === 0) {
                    _this.router.navigate(['/not-authorized']);
                    _this.alert.error("Error", "You are not allowed to visit this page");
                    return resolve(true);
                }
                var granted = false;
                for (var _i = 0, requiredRoles_1 = requiredRoles; _i < requiredRoles_1.length; _i++) {
                    var requiredRole = requiredRoles_1[_i];
                    if (_this.roles.indexOf(requiredRole) > -1) {
                        granted = true;
                        return resolve(true);
                    }
                }
                if (granted == false) {
                    _this.router.navigate(['/not-authorized']);
                    _this.alert.error("Error", "You are not allowed to visit this page");
                    return resolve(true);
                }
            }
        });
    };
    AppAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"], projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppAuthGuard);
    return AppAuthGuard;
}(keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakAuthGuard"]));



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _src_app_parser_ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/parser/ngb-date-fr-parser-formatter */ "./src/app/parser/ngb-date-fr-parser-formatter.ts");
/* harmony import */ var _node_modules_keycloak_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(keycloakService) {
        this.keycloakService = keycloakService;
        this.title = 'Agency Portal';
    }
    AppComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.keycloakService.isLoggedIn()];
                    case 1:
                        if (!_b.sent()) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.keycloakService.loadUserProfile()];
                    case 2:
                        _a.userDetails = _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.keycloakService.isTokenExpired()];
                    case 4:
                        if (_b.sent()) {
                            this.keycloakService.clearToken();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.doLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keycloakService.logout()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: _src_app_parser_ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_3__["NgbDateFRParserFormatter"] }]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_keycloak_angular__WEBPACK_IMPORTED_MODULE_4__["KeycloakService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_valdemort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-valdemort */ "./node_modules/ngx-valdemort/fesm5/ngx-valdemort.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm5/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var projects_opt_library_src_public_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! projects/opt-library/src/public-api */ "./projects/opt-library/src/public-api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./side-nav-bar/side-nav-bar.component */ "./src/app/side-nav-bar/side-nav-bar.component.ts");
/* harmony import */ var _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./top-nav-bar/top-nav-bar.component */ "./src/app/top-nav-bar/top-nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_claimant_search_claimant_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/claimant-search/claimant-search.component */ "./src/app/main/claimant-search/claimant-search.component.ts");
/* harmony import */ var _main_claimant_overview_claimant_overview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/claimant-overview/claimant-overview.component */ "./src/app/main/claimant-overview/claimant-overview.component.ts");
/* harmony import */ var _main_claimant_profile_claimant_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main/claimant-profile/claimant-profile.component */ "./src/app/main/claimant-profile/claimant-profile.component.ts");
/* harmony import */ var _main_claimant_registration_claimant_registration_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main/claimant-registration/claimant-registration.component */ "./src/app/main/claimant-registration/claimant-registration.component.ts");
/* harmony import */ var _main_claim_claim_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/claim/claim.component */ "./src/app/main/claim/claim.component.ts");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-init */ "./src/app/app-init.ts");
/* harmony import */ var _jsquery_test_jsquery_test_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./jsquery-test/jsquery-test.component */ "./src/app/jsquery-test/jsquery-test.component.ts");
/* harmony import */ var _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./not-authorized/not-authorized.component */ "./src/app/not-authorized/not-authorized.component.ts");

//import angular modules








//import external modules






//import user made modules

//import components
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"],
                _side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__["SideNavBarComponent"],
                _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_20__["TopNavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _main_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _main_claimant_search_claimant_search_component__WEBPACK_IMPORTED_MODULE_23__["ClaimantSearchComponent"],
                _main_claimant_overview_claimant_overview_component__WEBPACK_IMPORTED_MODULE_24__["ClaimantOverviewComponent"],
                _main_claimant_profile_claimant_profile_component__WEBPACK_IMPORTED_MODULE_25__["ClaimantProfileComponent"],
                _main_claimant_registration_claimant_registration_component__WEBPACK_IMPORTED_MODULE_26__["ClaimantRegistrationComponent"],
                _main_claim_claim_component__WEBPACK_IMPORTED_MODULE_27__["ClaimComponent"],
                _jsquery_test_jsquery_test_component__WEBPACK_IMPORTED_MODULE_30__["JsqueryTestComponent"],
                _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_31__["NotAuthorizedComponent"],
            ],
            imports: [
                projects_opt_library_src_public_api__WEBPACK_IMPORTED_MODULE_15__["OptLibraryModule"],
                ngx_valdemort__WEBPACK_IMPORTED_MODULE_10__["ValdemortModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                    positionClass: "toast-top-full-width",
                    closeButton: true,
                    disableTimeOut: true,
                    maxOpened: 1,
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastContainerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                keycloak_angular__WEBPACK_IMPORTED_MODULE_28__["KeycloakAngularModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn btn-info',
                })
            ],
            entryComponents: [],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: _app_init__WEBPACK_IMPORTED_MODULE_29__["initializer"],
                    multi: true,
                    deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_28__["KeycloakService"]]
                },
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_12__["MaskPipe"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/choices/choices.ts":
/*!************************************!*\
  !*** ./src/app/choices/choices.ts ***!
  \************************************/
/*! exports provided: STATECHOICES, GENDERCHOICES, RACECHOICES, LANGUAGEPREFERENCECHOICES, ETHNICITYCHOICES, EDUCATIONLEVELCHOICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATECHOICES", function() { return STATECHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDERCHOICES", function() { return GENDERCHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RACECHOICES", function() { return RACECHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGEPREFERENCECHOICES", function() { return LANGUAGEPREFERENCECHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETHNICITYCHOICES", function() { return ETHNICITYCHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDUCATIONLEVELCHOICES", function() { return EDUCATIONLEVELCHOICES; });
var STATECHOICES = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    " North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"
];
var GENDERCHOICES = ['Male', 'Female', 'I prefer not to answer',];
var RACECHOICES = [
    'White',
    'Black or African American',
    'American Indian or Alaska Native',
    'Native Hawaiian or other Pacific Islander',
    'Asian',
    'I prefer not to answer'
];
var LANGUAGEPREFERENCECHOICES = ['English', 'Spanish'];
var ETHNICITYCHOICES = ['Hispanic or Latino', 'Not Hispanic or Latino', 'I prefer not to answer'];
var EDUCATIONLEVELCHOICES = [
    'Completed 1st Grade',
    'Completed 2nd Grade',
    'Completed 3rd Grade',
    'Completed 4th Grade',
    'Completed 5th Grade',
    'Completed 6th Grade',
    'Completed 7th Grade',
    'Completed 8th Grade',
    'Completed 9th Grade',
    'Completed 10th Grade',
    'Completed 11th Grade',
    'High School Degree',
    'GED or High School Equivalency Diploma',
    'Some Vocational or Technical School (No Certificate)',
    'Some College (No Degree)',
    'Associate\'s Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Doctoral Degree',
    'Post-Doctorate Studies'
];


/***/ }),

/***/ "./src/app/choices/surveyQuestions.ts":
/*!********************************************!*\
  !*** ./src/app/choices/surveyQuestions.ts ***!
  \********************************************/
/*! exports provided: SURVEY_TITLE, SURVEY_DEFINITION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SURVEY_TITLE", function() { return SURVEY_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SURVEY_DEFINITION", function() { return SURVEY_DEFINITION; });
var SURVEY_TITLE = "UNEMPLOYMENT INSURANCE QUALITY CONTROL CLAIMANT QUESTIONNAIRE";
var SURVEY_DEFINITION = "{\"title\":\"UNEMPLOYMENT INSURANCE QUALITY CONTROL CLAIMANT QUESTIONNAIRE\",\"pages\":[{\"name\":\"Introduction\",\"elements\":[{\"type\":\"radiogroup\",\"name\":\"question2\",\"title\":\"Are you a citizen of the United States?\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"radiogroup\",\"name\":\"question3\",\"visibleIf\":\"{question2} = \\\"item2\\\"\",\"title\":\" When you were working in the U.S., were you issued an Alien Registration Receipt Card, Form I-151, commonly called a \\\"green card\\\"? \",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"text\",\"name\":\"question4\",\"visibleIf\":\"{question3} = \\\"item2\\\"\",\"title\":\"When you were working in the U.S., what document or form number were you issued?\",\"isRequired\":true}],\"title\":\"Preliminaries\",\"description\":\"Please answer the following questions as accurately as possible.\\nIf you do not know the answer, leave it blank. The interviewer\\nwill discuss it with you later. If you need help, please ask.\\nPlease print or write clearly.\\n\\nYour answers will be used to determine if your unemployment\\ninsurance benefits were paid properly. The information you give\\nus will be verified. The law provides penalties for false\\nstatements to obtain benefits.\"},{\"name\":\"Educational Background\",\"elements\":[{\"type\":\"radiogroup\",\"name\":\"question5\",\"title\":\"What is the highest level of academic schooling you completed? (A high school equivalency diploma or GED is equal to 12 years of school.)\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Grade School\"},{\"value\":\"item2\",\"text\":\"High School\"},{\"value\":\"item3\",\"text\":\"College\"}]},{\"type\":\"radiogroup\",\"name\":\"question6\",\"visibleIf\":\"{question5} = \\\"item1\\\"\",\"title\":\"What grade level have you finished in grade school?\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"1st Grade\"},{\"value\":\"item2\",\"text\":\"2nd Grade\"},{\"value\":\"item3\",\"text\":\"3rd Grade\"},{\"value\":\"item4\",\"text\":\"4th Grade\"},{\"value\":\"item5\",\"text\":\"5th Grade\"},{\"value\":\"item6\",\"text\":\"6th Grade\"},{\"value\":\"item7\",\"text\":\"7th Grade\"},{\"value\":\"item8\",\"text\":\"8th Grade\"}]},{\"type\":\"radiogroup\",\"name\":\"question7\",\"visibleIf\":\"{question5} = \\\"item2\\\"\",\"title\":\"What grade level have you finished in high school?\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"9th Grade\"},{\"value\":\"item2\",\"text\":\"10th Grade\"},{\"value\":\"item3\",\"text\":\"11th Grade\"},{\"value\":\"item4\",\"text\":\"12th Grade\"}]},{\"type\":\"radiogroup\",\"name\":\"question8\",\"visibleIf\":\"{question5} = \\\"item3\\\"\",\"title\":\"What degree did you get in College?\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Undergraduate Degree\"},{\"value\":\"item2\",\"text\":\"Associate Degree\"},{\"value\":\"item3\",\"text\":\"Graduate Degree\"}]},{\"type\":\"text\",\"name\":\"question15\",\"visibleIf\":\"{question5} = \\\"item3\\\"\",\"title\":\"What was/were your major area(s) of study?\",\"isRequired\":true},{\"type\":\"datepicker\",\"name\":\"question9\",\"title\":\"When did you last attend school?\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question10\",\"title\":\"Name of School you last attended\",\"isRequired\":true},{\"type\":\"multipletext\",\"name\":\"question12\",\"title\":\"Location of last school you attended\",\"isRequired\":true,\"items\":[{\"name\":\"text1\",\"title\":\"City\"},{\"name\":\"text2\",\"title\":\"State\"}]},{\"type\":\"radiogroup\",\"name\":\"question16\",\"title\":\"Have you ever had vocational or technical school training? \",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"text\",\"name\":\"question17\",\"visibleIf\":\"{question16} = \\\"item1\\\"\",\"title\":\"What kind of certificate do you have?\",\"isRequired\":true}],\"title\":\"Educational Background\"},{\"name\":\"Employment History\",\"elements\":[{\"type\":\"matrixdropdown\",\"name\":\"question1\",\"title\":\"Please provide the following information about your jobs prior to filing your most recent claim for unemployment. (BEGIN WITH YOUR MOST RECENT EMPLOYER AND WORK BACK):\",\"isRequired\":true,\"columns\":[{\"name\":\"Most Recent Employer\"},{\"name\":\"2nd Most Recent Employer\"},{\"name\":\"3rd Most Recent Employer\"},{\"name\":\"4th Most Recent Employer\"}],\"choices\":[1,2,3,4,5],\"cellType\":\"text\",\"rows\":[\" Employer name and address\",\"Name of supervisor\",\"Address/location of job site\",\"Phone number of employer\",\"Type of Business\",\"Last Day Worked\",\"Job Title\",\"Usual Wage\",\"Reason for Separation\"]},{\"type\":\"checkbox\",\"name\":\"question11\",\"title\":\"Which days of the week did you usually work on your most recent job.\",\"isRequired\":true,\"choices\":[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]},{\"type\":\"radiogroup\",\"name\":\"question13\",\"title\":\"What shift did you usually work on your most recent job? \",\"isRequired\":true,\"choices\":[\"1st Shift - Day\",\"2nd Shift - Swing\",\"3rd Shift - Night\",\"Other Shift - Including Rotation\"]},{\"type\":\"comment\",\"name\":\"question14\",\"title\":\"What were your main duties while at your most recent job? \",\"isRequired\":true},{\"type\":\"radiogroup\",\"name\":\"Is this the kind of work you usually do? \",\"isRequired\":true,\"choices\":[\"Yes\",\"No\"]},{\"type\":\"comment\",\"name\":\"What kind of work do you usually do?\",\"visibleIf\":\"{Is this the kind of work you usually do? } = \\\"No\\\"\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question18\",\"title\":\"What is your normal wage for the work you usually do?  (per month)\",\"isRequired\":true},{\"type\":\"radiogroup\",\"name\":\"question19\",\"title\":\"Do you expect to be called back to work by any past employer? \",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"radiogroup\",\"name\":\"question20\",\"title\":\"Do you have or have you received a recall notice? \",\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"datepicker\",\"name\":\"question21\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"When were you told you would be recalled?\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question22\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"Who notified you about the recall? \",\"isRequired\":true},{\"type\":\"datepicker\",\"name\":\"question23\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"When will you report back to work?\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question24\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"Name of employer\",\"isRequired\":true},{\"type\":\"multipletext\",\"name\":\"question25\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"Address of employer \",\"isRequired\":true,\"items\":[{\"name\":\"Street\"},{\"name\":\"City\"},{\"name\":\"State\"},{\"name\":\"Zip Code\"}]}],\"title\":\"Employment History\"},{\"name\":\"Work Search\",\"elements\":[{\"type\":\"text\",\"name\":\"question26\",\"title\":\"How many miles are you willing to travel one-way daily to a job?\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question27\",\"title\":\"How many minutes are you willing to travel one-way daily to a job? \",\"isRequired\":true},{\"type\":\"radiogroup\",\"name\":\"question28\",\"title\":\"Do you have a valid driver's license? \",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"checkbox\",\"name\":\"question29\",\"title\":\"By what means do you normally travel to look for work? \",\"hasOther\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Personally owned vehicle\"},{\"value\":\"item2\",\"text\":\"Borrow a vehicle\"},{\"value\":\"item3\",\"text\":\"Ride with friends or relatives\"},{\"value\":\"item4\",\"text\":\"Public Transportation\"}]},{\"type\":\"text\",\"name\":\"question30\",\"title\":\"In what location(s) do you plan to look for work?\"},{\"type\":\"text\",\"name\":\"question31\",\"title\":\"In what location(s) have you looked for work? \"},{\"type\":\"radiogroup\",\"name\":\"question32\",\"title\":\"Would a job have to last a certain period of time before you  would accept it? \",\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"matrixdropdown\",\"name\":\"question33\",\"title\":\"What is the type of work you are looking for and what is the length and type of experience you have in this occupation? \",\"isRequired\":true,\"columns\":[{\"name\":\"Type of Work\"},{\"name\":\"Length of Experience\"}],\"choices\":[1,2,3,4,5],\"cellType\":\"text\",\"rows\":[{\"value\":\"item1\",\"text\":\"a\"},{\"value\":\"item2\",\"text\":\"b\"},{\"value\":\"item3\",\"text\":\"c\"},{\"value\":\"item4\",\"text\":\"d\"}]},{\"type\":\"text\",\"name\":\"question34\",\"title\":\"What is the lowest rate of pay you will accept for a job?\"},{\"type\":\"checkbox\",\"name\":\"question35\",\"title\":\"Which shifts are you willing and able to work on a job?\",\"choices\":[{\"value\":\"item1\",\"text\":\"1st Shift - Day\"},{\"value\":\"item2\",\"text\":\"2nd Shift - Swing\"},{\"value\":\"item3\",\"text\":\"3rd Shift - Night\"},{\"value\":\"item4\",\"text\":\"Other Shift - Including Rotation\"}]},{\"type\":\"checkbox\",\"name\":\"question36\",\"title\":\"Which days of the week are you willing and able to work\",\"choices\":[{\"value\":\"item1\",\"text\":\"Sunday\"},{\"value\":\"item2\",\"text\":\"Monday\"},{\"value\":\"item3\",\"text\":\"Tuesday\"},{\"value\":\"item4\",\"text\":\"Wednesday\"},{\"value\":\"item5\",\"text\":\"Thursday\"},{\"value\":\"item6\",\"text\":\"Friday\"},{\"value\":\"item7\",\"text\":\"Saturday\"}]}],\"title\":\"Work Search\",\"description\":\"The next group of questions ask about your efforts to find work. Some\\nof these questions will refer to a specific week, called \\\" THE WEEK.\\\"\\n\\\"THE WEEK\\\" is the week that began on <placeholder date> and ended on\\n<placeholder date>. Please keep these dates in mind when\\nanswering the questions about \\\"THE WEEK.\\\" \"}]}";


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/jsquery-test/jsquery-test.component.ts":
/*!********************************************************!*\
  !*** ./src/app/jsquery-test/jsquery-test.component.ts ***!
  \********************************************************/
/*! exports provided: JsqueryTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsqueryTestComponent", function() { return JsqueryTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JsqueryTestComponent = /** @class */ (function () {
    function JsqueryTestComponent() {
    }
    JsqueryTestComponent.prototype.ngOnInit = function () {
        // (<any>('.table')).footable();
        // $("button").click(
        //   function() {
        //     $(".test").hide();
        //     alert("hello werld");
        //   }
        // );
    };
    JsqueryTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jsquery-test',
            template: __webpack_require__(/*! raw-loader!./jsquery-test.component.html */ "./node_modules/raw-loader/index.js!./src/app/jsquery-test/jsquery-test.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JsqueryTestComponent);
    return JsqueryTestComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(keycloakService, router) {
        this.keycloakService = keycloakService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.keycloakService);
                        return [4 /*yield*/, this.keycloakService.isLoggedIn()];
                    case 1:
                        if (_a.sent()) {
                            this.router.navigate(["/main"]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/claim/claim.component.css":
/*!************************************************!*\
  !*** ./src/app/main/claim/claim.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xhaW0vY2xhaW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/claim/claim.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/claim/claim.component.ts ***!
  \***********************************************/
/*! exports provided: ClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimComponent", function() { return ClaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-angular */ "./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var survey_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/opt-library/src/portal-services/toaster.service */ "./projects/opt-library/src/portal-services/toaster.service.ts");
/* harmony import */ var projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/opt-library/src/portal-services/alert.service */ "./projects/opt-library/src/portal-services/alert.service.ts");
/* harmony import */ var _choices_surveyQuestions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../choices/surveyQuestions */ "./src/app/choices/surveyQuestions.ts");
/* harmony import */ var projects_opt_library_src_portal_services_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/opt-library/src/portal-services/survey.service */ "./projects/opt-library/src/portal-services/survey.service.ts");
//-------------------- BIG FILE LAYOUT HAS THESE --------------------------
// a suggestion for coding standards
// if the team is advanced, you can make a parser to automate documentation

//---------------------------- IMPORT -------------------------------------
//import angular modules



//import user made modules
//import components
//import services


//import models or constants


//---------------------------- COMPONENT -------------------------------------
var ClaimComponent = /** @class */ (function () {
    //-------------------------------- CONSTRUCTOR ---------------------------------
    function ClaimComponent(route, surveyService, toasterService, alert, router) {
        this.route = route;
        this.surveyService = surveyService;
        this.toasterService = toasterService;
        this.alert = alert;
        this.router = router;
    }
    //--------------------------------- NG ON INIT ----------------------------------
    ClaimComponent.prototype.ngOnInit = function () {
        //set sweetAlert
        this.confirmReset = {
            type: 'info',
            title: "Info",
            text: "Are you sure you want to reset the survey data",
            showCancelButton: true,
            confirmButtonText: 'Reset the survey data',
            cancelButtonText: 'Cancel',
            confirmButtonClass: 'btn btn-primary',
            cancelButtonClass: 'btn btn-info',
        };
        //get claimantId from routes
        this.claimantId = Number(this.route
            .snapshot
            .paramMap
            .get('claimantId'));
        this.debug = false;
        //check if claimant id was inputted
        console.log("Claimant Id value is ", this.claimantId);
        //get initial survey_title and survey_definition from a file
        this.surveyTitle = _choices_surveyQuestions__WEBPACK_IMPORTED_MODULE_6__["SURVEY_TITLE"];
        this.surveyDefinition = _choices_surveyQuestions__WEBPACK_IMPORTED_MODULE_6__["SURVEY_DEFINITION"],
            //Set the completeLastPage to false
            this.completeLastPage = false;
        //gets the survey from the database
        this.getSurvey(_choices_surveyQuestions__WEBPACK_IMPORTED_MODULE_6__["SURVEY_TITLE"], this.claimantId);
    };
    //-------------------------------- SURVEY FUNCTIONS  ---------------------------------
    ClaimComponent.prototype.getSurvey = function (surveyName, claimantId) {
        var _this = this;
        return this.surveyService
            .getSurvey(surveyName, claimantId)
            //subscribe waits for the getSurvey query to the database
            .subscribe(function (survey) {
            console.log(survey);
            //Saves the title of the survey
            _this.surveyTitle = survey.surveyName;
            // ERROR CHECKING AND VALIDATION
            if (survey.surveyResponse != null) {
                //if doesnt return anything saves the responses and parse
                _this.surveyResponses = JSON.parse(survey.surveyResponse);
            }
            else {
                console.log("Survey Error", "no previous survey response");
            }
            //surveyDefinition saves the surveyDefinition from the survey
            if (survey.surveyDefinition != null) {
                _this.surveyDefinition = JSON.parse(survey.surveyDefinition);
            }
            else {
                console.log("Survey Error", "No previous survey definition");
            }
            //now the surveyDefinition is loaded, we can now show the survey
            _this.showSurveyWithResponses(_this.surveyDefinition);
            //we now can try to hide the original buttons
            _this.hideOriginalButtons();
        });
    };
    //RENDER A SURVEY
    ClaimComponent.prototype.showSurveyWithResponses = function (surveyDefinition) {
        this.surveyObject = new survey_angular__WEBPACK_IMPORTED_MODULE_3__["ReactSurveyModel"](surveyDefinition);
        //ERROR CHECKING
        if (this.surveyObject != null) {
            this.surveyObject.data = this.surveyResponses;
            survey_angular__WEBPACK_IMPORTED_MODULE_3__["SurveyNG"].render('surveyContainer', { model: this.surveyObject });
        }
        else {
            console.log("Survey Error", "survey cannot be rendered");
        }
        //updates backend and restes all values there
        this.surveyService.deleteResponse(this.claimantId);
    };
    //SEND RESPONSES TO BACKEND
    ClaimComponent.prototype.sendResponses = function () {
        this.saveSurveyToSO(this.claimantId);
        this.postSurvey(this.surveyResponseSO);
        console.log("here in send responses");
    };
    //STORE RESPONSES AND CALL SEND
    ClaimComponent.prototype.storeResponseAndSend = function (surveyData) {
        this.surveyResponses = surveyData.data;
        this.sendResponses();
        console.log("RESPONSES", this.surveyResponses);
        this.toasterService.success("Success", "Survey has been saved!");
    };
    //PUT THE VALUES TO A SERVICE-OBJECT
    ClaimComponent.prototype.saveSurveyToSO = function (claimantId) {
        this.surveyResponseSO = {
            claimantId: claimantId,
            responseId: null,
            surveyName: this.surveyTitle,
            surveyDefinition: JSON.stringify(this.surveyDefinition),
            surveyResponse: JSON.stringify(this.surveyResponses),
        };
        if (this.surveyResponseSO == null) {
            console.log("Survey Error", "Survey cannot be saved to a service object");
        }
    };
    //DELETE SURVEY RESPONSES
    //used to keep the database only have one response per claimant
    ClaimComponent.prototype.deleteAllSurveyResponses = function () {
        this.surveyService.deleteResponse(this.claimantId);
    };
    //SENDS THE RESPONSES AS AN HTTP POST
    ClaimComponent.prototype.postSurvey = function (surveyResponseSO) {
        this.surveyService.createSurveyResponse(surveyResponseSO).subscribe();
    };
    //RESETS SURVEY VALUES LOCALLY AND TO THE DB
    ClaimComponent.prototype.resetSurveyValues = function () {
        //this only resets local survey values, doesnt update backend
        this.surveyResponses = null;
        this.surveyObject.clear();
        //updates backend and resets all values there
        this.surveyService.deleteResponse(this.claimantId);
    };
    //-------------------------------- BUTTON FUNCTIONS ---------------------------------
    //ALERT MODULE FUNCTION
    ClaimComponent.prototype.confirmToReset = function () {
        this.resetSurveyValues();
        this.toasterService.danger("Warning", "Your answers have been reset");
        this.router.navigate(["/main/claimant-overview/" + this.claimantId]);
    };
    // A SPECIAL FUNCTION NEEDS TO BE CALLED TO SET THE ORIGINAL NAV BUTTONS TO HIDE
    ClaimComponent.prototype.hideOriginalButtons = function () {
        this.surveyObject.showNavigationButtons = false;
        this.surveyObject.render();
    };
    ClaimComponent.prototype.resetButton = function () {
        var _this = this;
        this.alert
            .custom(this.confirmReset)
            .then(function (result) {
            if (result.value) {
                _this.confirmToReset();
            }
        });
    };
    ClaimComponent.prototype.nextButton = function () {
        this.surveyObject.nextPage();
        this.surveyObject.render();
    };
    ClaimComponent.prototype.prevButton = function () {
        this.surveyObject.prevPage();
        this.surveyObject.render();
    };
    ClaimComponent.prototype.completeButton = function () {
        //inside a subscribe because it has to wait for delete to happen before posting
        this.surveyObject.completeText = "Complete Page";
        this.surveyObject.render();
        //
        this.storeResponseAndSend(this.surveyObject);
        this.completeLastPage = this.surveyObject.completeLastPage();
        //redirect on survey submission
        this.router.navigate(["/main/claimant-overview/" + this.claimantId]);
        //show toaster on success
        this.toasterService.success("Success", "Survey has been submitted to the server");
        //Delete the responses
        this.surveyService.deleteResponse(this.claimantId);
    };
    ClaimComponent.prototype.saveAndExitButton = function () {
        this.storeResponseAndSend(this.surveyObject);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ClaimComponent.prototype, "claimantId", void 0);
    ClaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claim',
            template: __webpack_require__(/*! raw-loader!./claim.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/claim/claim.component.html"),
            styles: [__webpack_require__(/*! ./claim.component.css */ "./src/app/main/claim/claim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            projects_opt_library_src_portal_services_survey_service__WEBPACK_IMPORTED_MODULE_7__["SurveyService"],
            projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClaimComponent);
    return ClaimComponent;
}());



/***/ }),

/***/ "./src/app/main/claimant-overview/claimant-overview.component.css":
/*!************************************************************************!*\
  !*** ./src/app/main/claimant-overview/claimant-overview.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xhaW1hbnQtb3ZlcnZpZXcvY2xhaW1hbnQtb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/claimant-overview/claimant-overview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/claimant-overview/claimant-overview.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClaimantOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimantOverviewComponent", function() { return ClaimantOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_opt_library_src_portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/opt-library/src/portal-services/claimant.service */ "./projects/opt-library/src/portal-services/claimant.service.ts");
/* harmony import */ var projects_opt_library_src_portal_services_portal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/opt-library/src/portal-services/portal.service */ "./projects/opt-library/src/portal-services/portal.service.ts");

//import angular modules


//import services


var ClaimantOverviewComponent = /** @class */ (function () {
    function ClaimantOverviewComponent(route, claimantService, claimantUsed) {
        this.route = route;
        this.claimantService = claimantService;
        this.claimantUsed = claimantUsed;
    }
    ClaimantOverviewComponent.prototype.ngOnInit = function () {
        this.claimantId = Number(this.route
            .snapshot
            .paramMap
            .get('claimantId'));
        this.claimantOverview(this.claimantId);
    };
    ClaimantOverviewComponent.prototype.claimantOverview = function (claimantId) {
        var _this = this;
        this.claimantService.
            getClaimantById(claimantId)
            .subscribe(function (claimantSO) {
            _this.claimantSO = claimantSO;
            _this.claimantUsed.claimantSO = _this.claimantSO;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ClaimantOverviewComponent.prototype, "claimantId", void 0);
    ClaimantOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claimant-overview',
            template: __webpack_require__(/*! raw-loader!./claimant-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/claimant-overview/claimant-overview.component.html"),
            styles: [__webpack_require__(/*! ./claimant-overview.component.css */ "./src/app/main/claimant-overview/claimant-overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            projects_opt_library_src_portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_3__["ClaimantService"],
            projects_opt_library_src_portal_services_portal_service__WEBPACK_IMPORTED_MODULE_4__["PortalService"]])
    ], ClaimantOverviewComponent);
    return ClaimantOverviewComponent;
}());



/***/ }),

/***/ "./src/app/main/claimant-profile/claimant-profile.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/main/claimant-profile/claimant-profile.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xhaW1hbnQtcHJvZmlsZS9jbGFpbWFudC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/claimant-profile/claimant-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/claimant-profile/claimant-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClaimantProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimantProfileComponent", function() { return ClaimantProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_opt_library_src_lib_edit_claimant_details_edit_claimant_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component */ "./projects/opt-library/src/lib/edit-claimant-details/edit-claimant-details.component.ts");
/* harmony import */ var projects_opt_library_src_lib_edit_claimant_address_edit_claimant_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component */ "./projects/opt-library/src/lib/edit-claimant-address/edit-claimant-address.component.ts");
/* harmony import */ var projects_opt_library_src_portal_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/opt-library/src/portal-services/modal.service */ "./projects/opt-library/src/portal-services/modal.service.ts");
/* harmony import */ var projects_opt_library_src_portal_services_portal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/opt-library/src/portal-services/portal.service */ "./projects/opt-library/src/portal-services/portal.service.ts");

//import angular modules



//import external modules
//import user made modules
//import components


//import services


var ClaimantProfileComponent = /** @class */ (function () {
    function ClaimantProfileComponent(route, modalService, claimantUsed, formBuilder) {
        this.route = route;
        this.modalService = modalService;
        this.claimantUsed = claimantUsed;
        this.formBuilder = formBuilder;
    }
    ClaimantProfileComponent.prototype.ngOnInit = function () {
        this.claimantSO = this.claimantUsed.claimantSO;
        console.log(this.claimantSO);
        this.profileForm = this.formBuilder.group({
            ssn: [''],
            alternateClaimantId: [''],
            firstName: [''],
            lastName: [''],
            middleInitial: [''],
            dateOfBirth: [new Date(2019, 1, 1)],
            homePhone: [''],
            mobilePhone: [''],
            preferredOccupation: [''],
            languagePreference: [''],
            gender: [''],
            educationLevel: [''],
            race: [''],
            ethnicity: [''],
            addressLine1: [''],
            addressLine2: [''],
            city: [''],
            state: [''],
            zipCode: [''],
            zipExt: [''],
        });
    };
    //makes the editclaimant detail modal
    ClaimantProfileComponent.prototype.openEditClaimantDetails = function (object) {
        this.modalService.open(projects_opt_library_src_lib_edit_claimant_details_edit_claimant_details_component__WEBPACK_IMPORTED_MODULE_4__["EditClaimantDetailsComponent"], object);
    };
    //makes the editclaimant address modal
    ClaimantProfileComponent.prototype.openEditClaimantAddresses = function (object) {
        this.modalService.open(projects_opt_library_src_lib_edit_claimant_address_edit_claimant_address_component__WEBPACK_IMPORTED_MODULE_5__["EditClaimantAddressComponent"], object);
    };
    ClaimantProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claimant-profile',
            template: __webpack_require__(/*! raw-loader!./claimant-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/claimant-profile/claimant-profile.component.html"),
            styles: [__webpack_require__(/*! ./claimant-profile.component.css */ "./src/app/main/claimant-profile/claimant-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            projects_opt_library_src_portal_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            projects_opt_library_src_portal_services_portal_service__WEBPACK_IMPORTED_MODULE_7__["PortalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ClaimantProfileComponent);
    return ClaimantProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/claimant-registration/claimant-registration.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/main/claimant-registration/claimant-registration.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xhaW1hbnQtcmVnaXN0cmF0aW9uL2NsYWltYW50LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/claimant-registration/claimant-registration.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/claimant-registration/claimant-registration.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClaimantRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimantRegistrationComponent", function() { return ClaimantRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_opt_library_src_portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/opt-library/src/portal-services/claimant.service */ "./projects/opt-library/src/portal-services/claimant.service.ts");
/* harmony import */ var projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/opt-library/src/portal-services/toaster.service */ "./projects/opt-library/src/portal-services/toaster.service.ts");
/* harmony import */ var projects_opt_library_src_service_objects_claimant_so__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/opt-library/src/service-objects/claimant-so */ "./projects/opt-library/src/service-objects/claimant-so.ts");
/* harmony import */ var projects_opt_library_src_service_objects_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/opt-library/src/service-objects/address */ "./projects/opt-library/src/service-objects/address.ts");
/* harmony import */ var _choices_choices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../choices/choices */ "./src/app/choices/choices.ts");

//import angular modules




//import user made modules
//import components
//import services


//import models or constants



var ClaimantRegistrationComponent = /** @class */ (function () {
    function ClaimantRegistrationComponent(fb, claimantService, toasterService, router) {
        this.fb = fb;
        this.claimantService = claimantService;
        this.toasterService = toasterService;
        this.router = router;
        this.userProfileModel = new projects_opt_library_src_service_objects_claimant_so__WEBPACK_IMPORTED_MODULE_6__["ClaimantSO"]();
        this.addressInitial = new projects_opt_library_src_service_objects_address__WEBPACK_IMPORTED_MODULE_7__["Address"]();
        this.stateChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_8__["STATECHOICES"];
        this.genderChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_8__["GENDERCHOICES"];
        this.raceChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_8__["RACECHOICES"];
        this.ethnicityChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_8__["ETHNICITYCHOICES"];
        this.educationLevelChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_8__["EDUCATIONLEVELCHOICES"];
        this.languagePreferenceChoices = _choices_choices__WEBPACK_IMPORTED_MODULE_8__["LANGUAGEPREFERENCECHOICES"];
        this.profileForm = this.fb.group({
            ssn: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]{9}")
                ])
            ],
            confirmSsn: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            ],
            firstName: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)
                ])
            ],
            lastName: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            middleInitial: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-z]*")
                ])
            ],
            dateOfBirth: [
                new Date(2019, 1, 1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            homePhone: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]*")
                ])
            ],
            mobilePhone: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]*")
                ])
            ],
            preferredOccupation: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            languagePreference: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            gender: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            educationLevel: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            race: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            ethnicity: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            addressLine1: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            addressLine2: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            city: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            state: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            zipCode: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            zipExt: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
        });
        this.debug = false;
        this.submitted = false;
    }
    ClaimantRegistrationComponent.prototype.ngOnInit = function () {
        this.claimantId = 0;
        this.addressInitial = {
            id: null,
            addressLine1: '',
            addressLine2: '',
            state: '',
            city: '',
            zipCode: '',
            zipExt: '',
            lastInsertUpdateTS: null,
            lastInsertUpdateBy: '',
        },
            this.userProfileModel = {
                claimantId: null,
                ssn: '',
                dateOfBirth: null,
                firstName: '',
                middleInitial: '',
                lastName: '',
                homePhone: '',
                mobilePhone: '',
                languagePreference: '',
                educationLevel: '',
                gender: '',
                race: '',
                ethnicity: '',
                lastInsertUpdateTS: null,
                lastInsertUpdateBy: '',
                ivrPin: '',
                documentDeliveryPreference: '',
                address: [this.addressInitial],
                email: '',
                preferredOccupation: '',
                alternateClaimantId: '',
            };
    };
    ClaimantRegistrationComponent.prototype.convertDateType = function () {
        //date in form type is different from JSON's date
        var ngbDate = this.profileForm.controls['dateOfBirth'].value;
        var myDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        this.userProfileModel.dateOfBirth = myDate;
    };
    ClaimantRegistrationComponent.prototype.verifyBeforeSubmit = function () {
        if (this.profileForm.valid) {
            this.convertDateType();
            this.onSubmit();
        }
        else {
            this.profileForm.markAllAsTouched();
            console.log(this.profileForm.value);
            console.log("Error in submitting form");
            this.toasterService.danger("Error", "Some forms are not yet filled");
        }
    };
    //once register claimant service is modified, can use this to return a claimantId and reroute
    ClaimantRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.claimantService
            .registerClaimant(this.userProfileModel).subscribe(function (data) {
            _this.claimantId = data;
            console.log("claimant id in registration is now", _this.claimantId);
            console.log("Submitted form");
            _this.toasterService.success("Success", "Form was submitted");
            // redirect after
            _this.router.navigate(["/main/claimant-overview/" + _this.claimantId]);
        });
    };
    ClaimantRegistrationComponent.prototype.compareFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    //FILLER FUNCTIONS should be moved to a separate ts file
    ClaimantRegistrationComponent.prototype.FillForm = function () {
        this.addressInitial = {
            id: null,
            addressLine1: 'Old town',
            addressLine2: 'road',
            state: this.stateChoices[this.randomInteger(this.stateChoices.length - 1)],
            city: 'Owl',
            zipCode: Math
                .random()
                .toString(10)
                .substr(2, 7),
            zipExt: Math
                .random()
                .toString(10)
                .substr(2, 7),
            lastInsertUpdateTS: null,
            lastInsertUpdateBy: '',
        },
            this.userProfileModel = {
                claimantId: null,
                ssn: Math.random().toString(10).substr(2, 9),
                dateOfBirth: new Date(this.year(), this.month(), this.day()),
                firstName: 'J' + this.vowel() + 'y' + this.vowel() + 'm',
                middleInitial: this.vowel().toUpperCase(),
                lastName: this.vowel().toUpperCase() + 'b' + this.vowel() + 'rd' + this.vowel() + 'l' + this.vowel() + 'z' + this.vowel(),
                homePhone: Math.random().toString(10).substr(2, 10),
                mobilePhone: Math.random().toString(10).substr(2, 10),
                languagePreference: this.languagePreferenceChoices[this.randomInteger(this.languagePreferenceChoices.length - 1)],
                educationLevel: this.educationLevelChoices[this.randomInteger(this.educationLevelChoices.length - 1)],
                gender: this.genderChoices[this.randomInteger(this.genderChoices.length - 1)],
                race: this.raceChoices[this.randomInteger(this.raceChoices.length - 1)],
                ethnicity: this.ethnicityChoices[this.randomInteger(this.ethnicityChoices.length - 1)],
                lastInsertUpdateTS: null,
                lastInsertUpdateBy: '',
                ivrPin: '',
                documentDeliveryPreference: '',
                address: [this.addressInitial],
                email: '',
                preferredOccupation: 'Student',
                alternateClaimantId: '',
            };
        //after filling it up, it calls submit
        this.onSubmit();
    };
    ClaimantRegistrationComponent.prototype.vowel = function () {
        return Math.random().toString(5).replace('0.', '').substr(0, 1).replace('1', 'a').replace('0', 'e').replace('2', 'i').replace('3', 'o').replace('4', 'u');
    };
    ClaimantRegistrationComponent.prototype.day = function () {
        return Math.floor(Math.random() * 30);
    };
    ClaimantRegistrationComponent.prototype.month = function () {
        return Math.floor(Math.random() * 12);
    };
    ClaimantRegistrationComponent.prototype.year = function () {
        return 1990 + Math.floor(Math.random() * 29);
    };
    ClaimantRegistrationComponent.prototype.randomInteger = function (max) {
        return Math.floor(Math.random() * max);
    };
    ClaimantRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claimant-registration',
            template: __webpack_require__(/*! raw-loader!./claimant-registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/claimant-registration/claimant-registration.component.html"),
            styles: [__webpack_require__(/*! ./claimant-registration.component.css */ "./src/app/main/claimant-registration/claimant-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            projects_opt_library_src_portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_4__["ClaimantService"],
            projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClaimantRegistrationComponent);
    return ClaimantRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/main/claimant-search/claimant-search.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/claimant-search/claimant-search.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xhaW1hbnQtc2VhcmNoL2NsYWltYW50LXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/claimant-search/claimant-search.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/claimant-search/claimant-search.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClaimantSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimantSearchComponent", function() { return ClaimantSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_opt_library_src_portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/opt-library/src/portal-services/claimant.service */ "./projects/opt-library/src/portal-services/claimant.service.ts");
/* harmony import */ var projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/opt-library/src/portal-services/toaster.service */ "./projects/opt-library/src/portal-services/toaster.service.ts");
/* harmony import */ var projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/opt-library/src/portal-services/alert.service */ "./projects/opt-library/src/portal-services/alert.service.ts");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var _user_role_checking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-role-checking.service */ "./src/app/main/user-role-checking.service.ts");

//import angular modules


//import user made modules
//import components
//import services





var ClaimantSearchComponent = /** @class */ (function () {
    function ClaimantSearchComponent(claimantService, route, toasterService, alert, router, keycloakService, userRoleChecking) {
        this.claimantService = claimantService;
        this.route = route;
        this.toasterService = toasterService;
        this.alert = alert;
        this.router = router;
        this.keycloakService = keycloakService;
        this.userRoleChecking = userRoleChecking;
        this.allowedRoles = ["dsadsadsa", "hello1"];
    }
    ClaimantSearchComponent.prototype.ngOnInit = function () {
        var userDetails = this.keycloakService.getKeycloakInstance();
        // console.log(userDetails.realmAccess["roles"]);
        // if(this.userRoleChecking.userCanAccess(this.allowedRoles, userDetails.realmAccess["roles"])){
        this.claimantInfo = this.route.snapshot.paramMap.get('claimantInfo');
        this.searchClaimant(this.claimantInfo);
        this.columnsToDisplay = ['ssn', 'name', 'dateOfBirth', 'homePhone', 'mobilePhone', 'address'];
        //for the sweet alert
        this.noSearchResultObject = {
            type: 'info',
            title: "Info",
            text: "Sorry, there are no results for the given string",
            showCancelButton: true,
            confirmButtonText: 'Go to Claimant Registration',
            cancelButtonText: 'Cancel',
            confirmButtonClass: 'btn btn-primary',
            cancelButtonClass: 'btn btn-info',
        };
        // }
    };
    ClaimantSearchComponent.prototype.getClaimantSO = function () {
        var _this = this;
        this.claimantService
            .getAllClaimants()
            .subscribe(function (claimantSO) { return _this.claimantSO = claimantSO; });
    };
    ClaimantSearchComponent.prototype.searchClaimant = function (claimantInfo) {
        var _this = this;
        this.claimantService
            .searchClaimant(claimantInfo)
            .subscribe(function (claimantSO) {
            _this.claimantSO = claimantSO;
            if (claimantSO.length > 1) {
                _this.toasterService.success("Success", "There are " + String(claimantSO.length) + " results for your query.");
            }
            else if (claimantSO.length == 1) {
                _this.toasterService.success("Success", "There is " + String(claimantSO.length) + " result for your query.");
            }
            else if (claimantSO.length == 0) {
                _this.alert
                    .custom(_this.noSearchResultObject)
                    .then(function (result) {
                    if (result.value) {
                        _this.noSearchResult();
                    }
                });
            }
        });
    };
    ClaimantSearchComponent.prototype.noSearchResult = function () {
        this.router.navigate(["main/claimant-registration"]);
    };
    ClaimantSearchComponent.prototype.refreshToken = function () {
        this.keycloakService.clearToken();
        console.log(this.keycloakService);
    };
    ClaimantSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claimant-search',
            template: __webpack_require__(/*! raw-loader!./claimant-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/claimant-search/claimant-search.component.html"),
            styles: [__webpack_require__(/*! ./claimant-search.component.css */ "./src/app/main/claimant-search/claimant-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_opt_library_src_portal_services_claimant_service__WEBPACK_IMPORTED_MODULE_3__["ClaimantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"],
            _user_role_checking_service__WEBPACK_IMPORTED_MODULE_7__["UserRoleCheckingService"]])
    ], ClaimantSearchComponent);
    return ClaimantSearchComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/opt-library/src/portal-services/toaster.service */ "./projects/opt-library/src/portal-services/toaster.service.ts");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var src_app_agency_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/agency-service.service */ "./src/app/agency-service.service.ts");

//import angular modules

//import external modules

//import services



//import models or constants
var HomeComponent = /** @class */ (function () {
    function HomeComponent(toasterService, keycloakService, agencyService) {
        this.toasterService = toasterService;
        this.keycloakService = keycloakService;
        this.agencyService = agencyService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.toasterService.overlayContainer = this.toastContainer;
        var userDetails = this.keycloakService.getKeycloakInstance();
        // console.log(userDetails);
        // console.log(userDetails.realmAccess["roles"]);
        // console.log(userDetails.profile["email"]);
    };
    HomeComponent.prototype.success = function () {
        this.toasterService.success("Success!", "Welcome to Home");
    };
    HomeComponent.prototype.getToken = function () {
        var _this = this;
        this.keycloakService.getToken().then(function (data) {
            console.log("we are inside the get token function");
            console.log("this is the tokenParsed", _this.keycloakService.getKeycloakInstance().tokenParsed);
            console.log("this is the idTokenParsed", _this.keycloakService.getKeycloakInstance().idTokenParsed);
            console.log("this might be the token ", _this.keycloakService.getKeycloakInstance().tokenParsed.sub);
            _this.userid = _this.keycloakService.getKeycloakInstance().tokenParsed.sub;
        });
    };
    HomeComponent.prototype.getAgencyButton = function () {
        var _this = this;
        this.keycloakService.getToken().then(function (data) {
            console.log("inside the getToken()");
            _this.agencyService.getAgencyStaff(_this.userid).subscribe(function (dataNew) {
                console.log("inside the getAgencyService", dataNew);
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"])
    ], HomeComponent.prototype, "toastContainer", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], keycloak_angular__WEBPACK_IMPORTED_MODULE_4__["KeycloakService"], src_app_agency_service_service__WEBPACK_IMPORTED_MODULE_5__["AgencyServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/opt-library/src/portal-services/toaster.service */ "./projects/opt-library/src/portal-services/toaster.service.ts");
/* harmony import */ var projects_opt_library_src_portal_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/opt-library/src/portal-services/modal.service */ "./projects/opt-library/src/portal-services/modal.service.ts");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/opt-library/src/portal-services/alert.service */ "./projects/opt-library/src/portal-services/alert.service.ts");








var MainComponent = /** @class */ (function () {
    function MainComponent(toasterService, modalService, router, activatedRoute, keycloakService, alert) {
        this.toasterService = toasterService;
        this.modalService = modalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.keycloakService = keycloakService;
        this.alert = alert;
        this.accessPermission = false;
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                modalService.close();
                // const requiredRoles = activatedRoute.snapshot.routeConfig.children[0].data.roles1;
                // const requiredRoles = activatedRoute.snapshot.data.roles1;
                // const userRoles = keycloakService.getKeycloakInstance().realmAccess['roles'];
                // console.log(requiredRoles);
                // for(var i = 0; i < userRoles.length; i++){
                //   if(requiredRoles.some(x => x === userRoles[i])) {
                //     this.accessPermission = true;
                //     break;
                //   }
                // }
                // if(!this.accessPermission){
                //   this.router.navigate(['/claimant-overview/56']);
                //   this.alert.error("Error","You are not allowed to visit this page");
                // }
            }
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.toasterService.overlayContainer = this.toastContainer;
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"])
    ], MainComponent.prototype, "toastContainer", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_opt_library_src_portal_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            projects_opt_library_src_portal_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"],
            projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/user-role-checking.service.ts":
/*!****************************************************!*\
  !*** ./src/app/main/user-role-checking.service.ts ***!
  \****************************************************/
/*! exports provided: UserRoleCheckingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleCheckingService", function() { return UserRoleCheckingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/opt-library/src/portal-services/alert.service */ "./projects/opt-library/src/portal-services/alert.service.ts");




var UserRoleCheckingService = /** @class */ (function () {
    function UserRoleCheckingService(router, alert) {
        this.router = router;
        this.alert = alert;
    }
    UserRoleCheckingService.prototype.userCanAccess = function (allowedUsers, userRoles) {
        var accessPermission = false;
        for (var i = 0; i < userRoles.length; i++) {
            if (allowedUsers.some(function (x) { return x === userRoles[i]; })) {
                accessPermission = true;
                break;
            }
        }
        if (!accessPermission) {
            this.router.navigate(['/main/home']);
            this.alert.error("Error", "You are not allowed to visit this page");
        }
        return accessPermission;
    };
    UserRoleCheckingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            projects_opt_library_src_portal_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], UserRoleCheckingService);
    return UserRoleCheckingService;
}());



/***/ }),

/***/ "./src/app/not-authorized/not-authorized.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-authorized/not-authorized.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1hdXRob3JpemVkL25vdC1hdXRob3JpemVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/not-authorized/not-authorized.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-authorized/not-authorized.component.ts ***!
  \************************************************************/
/*! exports provided: NotAuthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function() { return NotAuthorizedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotAuthorizedComponent = /** @class */ (function () {
    function NotAuthorizedComponent() {
    }
    NotAuthorizedComponent.prototype.ngOnInit = function () {
    };
    NotAuthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-authorized',
            template: __webpack_require__(/*! raw-loader!./not-authorized.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-authorized/not-authorized.component.html"),
            styles: [__webpack_require__(/*! ./not-authorized.component.css */ "./src/app/not-authorized/not-authorized.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotAuthorizedComponent);
    return NotAuthorizedComponent;
}());



/***/ }),

/***/ "./src/app/parser/ngb-date-fr-parser-formatter.ts":
/*!********************************************************!*\
  !*** ./src/app/parser/ngb-date-fr-parser-formatter.ts ***!
  \********************************************************/
/*! exports provided: NgbDateFRParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateFRParserFormatter", function() { return NgbDateFRParserFormatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return "";
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var NgbDateFRParserFormatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgbDateFRParserFormatter, _super);
    function NgbDateFRParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateFRParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
            }
        }
        return null;
    };
    NgbDateFRParserFormatter.prototype.format = function (date) {
        var stringDate = "";
        if (date) {
            stringDate += isNumber(date.month) ? padNumber(date.month) + "/" : "";
            stringDate += isNumber(date.day) ? padNumber(date.day) + "/" : "";
            stringDate += date.year;
        }
        return stringDate;
    };
    NgbDateFRParserFormatter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NgbDateFRParserFormatter);
    return NgbDateFRParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/side-nav-bar/side-nav-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/side-nav-bar/side-nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: SideNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavBarComponent", function() { return SideNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavBarComponent = /** @class */ (function () {
    function SideNavBarComponent() {
    }
    SideNavBarComponent.prototype.ngOnInit = function () {
    };
    SideNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav-bar',
            template: __webpack_require__(/*! raw-loader!./side-nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-nav-bar/side-nav-bar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideNavBarComponent);
    return SideNavBarComponent;
}());



/***/ }),

/***/ "./src/app/top-nav-bar/top-nav-bar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/top-nav-bar/top-nav-bar.component.ts ***!
  \******************************************************/
/*! exports provided: TopNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavBarComponent", function() { return TopNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keycloak-angular */ "./node_modules/keycloak-angular/fesm5/keycloak-angular.js");




var TopNavBarComponent = /** @class */ (function () {
    function TopNavBarComponent(router, keycloakService) {
        var _this = this;
        this.router = router;
        this.keycloakService = keycloakService;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    }
    TopNavBarComponent.prototype.ngOnInit = function () {
    };
    TopNavBarComponent.prototype.searchClaimant = function () {
        var claimantInfo = document.getElementById('searchText').value;
        this.router.navigate(["main/claimant-search/" + claimantInfo]);
    };
    TopNavBarComponent.prototype.doLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keycloakService.logout()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TopNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-nav-bar',
            template: __webpack_require__(/*! raw-loader!./top-nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-nav-bar/top-nav-bar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"]])
    ], TopNavBarComponent);
    return TopNavBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var keycloakConfig = {
    url: 'https://auth.opt-dev.optimumui.com/auth',
    realm: 'agencyusers',
    clientId: 'agency'
    // url: 'http://localhost:8080/auth',
    // realm: 'Master',
    // clientId: 'agency-portal'
};
var environment = {
    production: false,
    keycloak: keycloakConfig
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\internship v3\agency-portal-v2\agency-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map