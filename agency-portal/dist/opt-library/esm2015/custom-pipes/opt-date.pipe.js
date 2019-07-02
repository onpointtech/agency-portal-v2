/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DatePipe } from '@angular/common';
export class OptDatePipe {
    /**
     * @param {?} datePipe
     */
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    transform(date) {
        /** @type {?} */
        let newDate = "";
        newDate = this.datePipe.transform(date, 'MM/dd/yyyy');
        return newDate;
    }
}
OptDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'optDatePipe' },] }
];
/** @nocollapse */
OptDatePipe.ctorParameters = () => [
    { type: DatePipe }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OptDatePipe.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY3VzdG9tLXBpcGVzL29wdC1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxNQUFNLE9BQU8sV0FBVzs7OztJQUVwQixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7SUFFMUMsU0FBUyxDQUFDLElBQVk7O1lBQ2QsT0FBTyxHQUFTLEVBQUU7UUFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0RCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7WUFUSixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDOzs7O1lBRmxCLFFBQVE7Ozs7Ozs7SUFLRCwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQFBpcGUoe25hbWU6ICdvcHREYXRlUGlwZSd9KVxyXG5leHBvcnQgY2xhc3MgT3B0RGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkge31cclxuXHJcbiAgICB0cmFuc2Zvcm0oZGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgbmV3RGF0ZTogc3RyaW5nPVwiXCI7XHJcbiAgICAgICAgbmV3RGF0ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsICdNTS9kZC95eXl5Jyk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0RhdGU7XHJcbiAgICB9XHJcbn0iXX0=