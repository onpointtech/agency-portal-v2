/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DatePipe } from '@angular/common';
var OptDatePipe = /** @class */ (function () {
    function OptDatePipe(datePipe) {
        this.datePipe = datePipe;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    OptDatePipe.prototype.transform = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var newDate = "";
        newDate = this.datePipe.transform(date, 'MM/dd/yyyy');
        return newDate;
    };
    OptDatePipe.decorators = [
        { type: Pipe, args: [{ name: 'optDatePipe' },] }
    ];
    /** @nocollapse */
    OptDatePipe.ctorParameters = function () { return [
        { type: DatePipe }
    ]; };
    return OptDatePipe;
}());
export { OptDatePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OptDatePipe.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY3VzdG9tLXBpcGVzL29wdC1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQUdJLHFCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7SUFFMUMsK0JBQVM7Ozs7SUFBVCxVQUFVLElBQVk7O1lBQ2QsT0FBTyxHQUFTLEVBQUU7UUFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0RCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOztnQkFUSixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDOzs7O2dCQUZsQixRQUFROztJQVlqQixrQkFBQztDQUFBLEFBVkQsSUFVQztTQVRZLFdBQVc7Ozs7OztJQUVSLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AUGlwZSh7bmFtZTogJ29wdERhdGVQaXBlJ30pXHJcbmV4cG9ydCBjbGFzcyBPcHREYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7fVxyXG5cclxuICAgIHRyYW5zZm9ybShkYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBuZXdEYXRlOiBzdHJpbmc9XCJcIjtcclxuICAgICAgICBuZXdEYXRlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgJ01NL2RkL3l5eXknKTtcclxuICAgICAgICByZXR1cm4gbmV3RGF0ZTtcclxuICAgIH1cclxufSJdfQ==