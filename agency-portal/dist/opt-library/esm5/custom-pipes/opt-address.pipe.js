/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
var OptAddressPipe = /** @class */ (function () {
    function OptAddressPipe() {
    }
    /**
     * @param {?} address
     * @return {?}
     */
    OptAddressPipe.prototype.transform = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        /** @type {?} */
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
    OptAddressPipe.decorators = [
        { type: Pipe, args: [{ name: 'optAddressPipe' },] }
    ];
    return OptAddressPipe;
}());
export { OptAddressPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWFkZHJlc3MucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsiY3VzdG9tLXBpcGVzL29wdC1hZGRyZXNzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBQUE7SUFxQkEsQ0FBQzs7Ozs7SUFuQkcsa0NBQVM7Ozs7SUFBVCxVQUFVLE9BQWtCOztZQUNwQixVQUFVLEdBQVcsRUFBRTtRQUV2QixVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUV0QyxJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ2hDLFVBQVUsSUFBSSxJQUFJLENBQUM7WUFDbkIsVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDekM7UUFFRCxVQUFVLEdBQUcsVUFBVSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUU5RyxJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQzFCLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDbEIsVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDbkM7UUFFTCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDOztnQkFwQkosSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDOztJQXFCOUIscUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXBCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICdwcm9qZWN0cy9vcHQtbGlicmFyeS9zcmMvc2VydmljZS1vYmplY3RzL2FkZHJlc3MnO1xyXG5cclxuQFBpcGUoe25hbWU6ICdvcHRBZGRyZXNzUGlwZSd9KVxyXG5leHBvcnQgY2xhc3MgT3B0QWRkcmVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShhZGRyZXNzOiBBZGRyZXNzW10pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBuZXdBZGRyZXNzOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbmV3QWRkcmVzcyArPSBhZGRyZXNzWzBdLmFkZHJlc3NMaW5lMTtcclxuXHJcbiAgICAgICAgICAgIGlmKGFkZHJlc3NbMF0uYWRkcmVzc0xpbmUyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5ld0FkZHJlc3MgKz0gXCIsIFwiO1xyXG4gICAgICAgICAgICAgICAgbmV3QWRkcmVzcyArPSBhZGRyZXNzWzBdLmFkZHJlc3NMaW5lMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV3QWRkcmVzcyA9IG5ld0FkZHJlc3MgKyBcIiwgXCIgKyBcIlxcblwiICsgYWRkcmVzc1swXS5jaXR5ICsgXCIsIFwiICsgYWRkcmVzc1swXS5zdGF0ZSArIFwiLCBcIiArIGFkZHJlc3NbMF0uemlwQ29kZTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZihhZGRyZXNzWzBdLnppcEV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBZGRyZXNzICs9IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgbmV3QWRkcmVzcyArPSBhZGRyZXNzWzBdLnppcEV4dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3QWRkcmVzcztcclxuICAgIH1cclxufSJdfQ==