/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class ToasterService {
    /**
     * @param {?} toastr
     */
    constructor(toastr) {
        this.toastr = toastr;
        this.toastr = toastr;
    }
    /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    success(title, text) {
        this.toastr.success(text, title);
    }
    /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    info(title, text) {
        this.toastr.info(text, title);
    }
    /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    warning(title, text) {
        this.toastr.warning(text, title);
    }
    /**
     * @param {?} title
     * @param {?} text
     * @return {?}
     */
    danger(title, text) {
        this.toastr.error(text, title);
    }
}
ToasterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToasterService.ctorParameters = () => [
    { type: ToastrService }
];
/** @nocollapse */ ToasterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(i0.ɵɵinject(i1.ToastrService)); }, token: ToasterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ToasterService.prototype.overlayContainer;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.toastr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0LWxpYnJhcnkvIiwic291cmNlcyI6WyJwb3J0YWwtc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQTJCLE1BQU0sWUFBWSxDQUFDOzs7QUFLcEUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFHekIsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBVztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7O0lBRUYsT0FBTyxDQUFDLEtBQWEsRUFBRSxJQUFXO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLElBQVc7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQXhCRCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxhQUFhOzs7OztJQU1wQiwwQ0FBMEM7Ozs7O0lBRTlCLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UsIFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJTZXJ2aWNlIHtcbiAgb3ZlcmxheUNvbnRhaW5lcjogVG9hc3RDb250YWluZXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdHI6IFRvYXN0clNlcnZpY2UpIHsgXG4gICAgdGhpcy50b2FzdHIgPSB0b2FzdHI7XG4gIH1cblxuICBzdWNjZXNzKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyl7XG4gICAgdGhpcy50b2FzdHIuc3VjY2Vzcyh0ZXh0LCB0aXRsZSk7XG4gIH1cblxuICBpbmZvKHRpdGxlOiBzdHJpbmcsIHRleHQ6c3RyaW5nKXtcbiAgICAgdGhpcy50b2FzdHIuaW5mbyh0ZXh0LCB0aXRsZSlcbiAgfVxuXG4gd2FybmluZyh0aXRsZTogc3RyaW5nLCB0ZXh0OnN0cmluZyl7XG4gICAgdGhpcy50b2FzdHIud2FybmluZyh0ZXh0LCB0aXRsZSlcbiB9XG5cbiBkYW5nZXIodGl0bGU6IHN0cmluZywgdGV4dDpzdHJpbmcpe1xuICB0aGlzLnRvYXN0ci5lcnJvcih0ZXh0LCB0aXRsZSk7XG4gfVxuXG5cbn0iXX0=