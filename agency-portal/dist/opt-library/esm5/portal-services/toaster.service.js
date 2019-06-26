/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
var ToasterService = /** @class */ (function () {
    function ToasterService(toastr) {
        this.toastr = toastr;
        this.toastr = toastr;
    }
    /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    ToasterService.prototype.success = /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    function (title, text) {
        this.toastr.success(text, title);
    };
    /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    ToasterService.prototype.info = /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    function (title, text) {
        this.toastr.info(text, title);
    };
    /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    ToasterService.prototype.warning = /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    function (title, text) {
        this.toastr.warning(text, title);
    };
    /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    ToasterService.prototype.danger = /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    function (title, text) {
        this.toastr.error(text, title);
    };
    ToasterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToasterService.ctorParameters = function () { return [
        { type: ToastrService }
    ]; };
    /** @nocollapse */ ToasterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(i0.ɵɵinject(i1.ToastrService)); }, token: ToasterService, providedIn: "root" });
    return ToasterService;
}());
export { ToasterService };
if (false) {
    /** @type {?} */
    ToasterService.prototype.overlayContainer;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.toastr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0LWxpYnJhcnkvIiwic291cmNlcyI6WyJwb3J0YWwtc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQTJCLE1BQU0sWUFBWSxDQUFDOzs7QUFFcEU7SUFNRSx3QkFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCxnQ0FBTzs7Ozs7SUFBUCxVQUFRLEtBQWEsRUFBRSxJQUFZO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFRCw2QkFBSTs7Ozs7SUFBSixVQUFLLEtBQWEsRUFBRSxJQUFXO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7Ozs7SUFFRixnQ0FBTzs7Ozs7SUFBUCxVQUFRLEtBQWEsRUFBRSxJQUFXO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzs7Ozs7SUFFRCwrQkFBTTs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUFXO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkF4QkQsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxhQUFhOzs7eUJBRHRCO0NBOEJDLEFBM0JELElBMkJDO1NBeEJZLGNBQWM7OztJQUN6QiwwQ0FBMEM7Ozs7O0lBRTlCLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UsIFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJTZXJ2aWNlIHtcbiAgb3ZlcmxheUNvbnRhaW5lcjogVG9hc3RDb250YWluZXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdHI6IFRvYXN0clNlcnZpY2UpIHsgXG4gICAgdGhpcy50b2FzdHIgPSB0b2FzdHI7XG4gIH1cblxuICBzdWNjZXNzKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyl7XG4gICAgdGhpcy50b2FzdHIuc3VjY2Vzcyh0ZXh0LCB0aXRsZSk7XG4gIH1cblxuICBpbmZvKHRpdGxlOiBzdHJpbmcsIHRleHQ6c3RyaW5nKXtcbiAgICAgdGhpcy50b2FzdHIuaW5mbyh0ZXh0LCB0aXRsZSlcbiAgfVxuXG4gd2FybmluZyh0aXRsZTogc3RyaW5nLCB0ZXh0OnN0cmluZyl7XG4gICAgdGhpcy50b2FzdHIud2FybmluZyh0ZXh0LCB0aXRsZSlcbiB9XG5cbiBkYW5nZXIodGl0bGU6IHN0cmluZywgdGV4dDpzdHJpbmcpe1xuICB0aGlzLnRvYXN0ci5lcnJvcih0ZXh0LCB0aXRsZSk7XG4gfVxuXG5cbn0iXX0=