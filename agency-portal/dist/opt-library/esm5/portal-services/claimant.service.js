/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { ToasterService } from './toaster.service';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./toaster.service";
var ClaimantService = /** @class */ (function () {
    function ClaimantService(http, toasterService) {
        this.http = http;
        this.toasterService = toasterService;
        this.url = "http://localhost:8082/api/claimant";
    }
    /**
     * @param {?} claimantId
     * @return {?}
     */
    ClaimantService.prototype.getClaimantById = /**
     * @param {?} claimantId
     * @return {?}
     */
    function (claimantId) {
        /** @type {?} */
        var claimantUrl = this.url + "/getClaimantById/" + claimantId;
        return this.http.get(claimantUrl);
    };
    /**
     * @return {?}
     */
    ClaimantService.prototype.getAllClaimants = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //Observable<ClaimantSO[]> {
        /** @type {?} */
        var claimantUrl = this.url + "/getAllClaimants";
        return this.http.get(claimantUrl).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
            return EMPTY;
        })));
    };
    /**
     * @param {?} claimantInfo
     * @return {?}
     */
    ClaimantService.prototype.searchClaimant = /**
     * @param {?} claimantInfo
     * @return {?}
     */
    function (claimantInfo) {
        var _this = this;
        /** @type {?} */
        var claimantUrl = this.url + "/searchClaimant/" + claimantInfo;
        return this.http.get(claimantUrl).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
            return EMPTY;
        })));
    };
    /**
     * @param {?} claimantSO
     * @return {?}
     */
    ClaimantService.prototype.registerClaimant = /**
     * @param {?} claimantSO
     * @return {?}
     */
    function (claimantSO) {
        console.log("Inside register claimant api");
        /** @type {?} */
        var claimantUrl = this.url + "/registerClaimant";
        return this.http.post(claimantUrl, claimantSO);
    };
    /**
     * @param {?} id
     * @param {?} updateClaimantSO
     * @return {?}
     */
    ClaimantService.prototype.updateClaimant = /**
     * @param {?} id
     * @param {?} updateClaimantSO
     * @return {?}
     */
    function (id, updateClaimantSO) {
        var _this = this;
        /** @type {?} */
        var claimantUrl = this.url + "/updateClaimant/" + id;
        return this.http.put(claimantUrl, updateClaimantSO).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.toasterService.danger("ERROR", "Cannot update profile.");
            return EMPTY;
        })));
    };
    ClaimantService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ClaimantService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ToasterService }
    ]; };
    /** @nocollapse */ ClaimantService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ClaimantService_Factory() { return new ClaimantService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ToasterService)); }, token: ClaimantService, providedIn: "root" });
    return ClaimantService;
}());
export { ClaimantService };
if (false) {
    /** @type {?} */
    ClaimantService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    ClaimantService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ClaimantService.prototype.toasterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhaW1hbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsicG9ydGFsLXNlcnZpY2VzL2NsYWltYW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRSxPQUFPLEVBQWMsS0FBSyxFQUFtQixNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBOzs7O0FBSzNDO0lBT0UseUJBQW9CLElBQWdCLEVBQVUsY0FBOEI7UUFBeEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUY1RSxRQUFHLEdBQUcsb0NBQW9DLENBQUM7SUFFcUMsQ0FBQzs7Ozs7SUFDMUUseUNBQWU7Ozs7SUFBdEIsVUFBdUIsVUFBa0I7O1lBQ2pDLFdBQVcsR0FBTSxJQUFJLENBQUMsR0FBRyx5QkFBb0IsVUFBWTtRQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7Ozs7SUFFTSx5Q0FBZTs7O0lBQXRCO1FBQUEsaUJBTUM7OztZQUxPLFdBQVcsR0FBTSxJQUFJLENBQUMsR0FBRyxxQkFBa0I7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsR0FBUTtZQUN2RSxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsc0RBQXNELENBQUMsQ0FBQztZQUM1RixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVNLHdDQUFjOzs7O0lBQXJCLFVBQXNCLFlBQW9CO1FBQTFDLGlCQU1DOztZQUxPLFdBQVcsR0FBTSxJQUFJLENBQUMsR0FBRyx3QkFBbUIsWUFBYztRQUNoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFRO1lBQ3ZFLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1lBQzVGLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBSU0sMENBQWdCOzs7O0lBQXZCLFVBQXdCLFVBQXNCO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7WUFDdEMsV0FBVyxHQUFNLElBQUksQ0FBQyxHQUFHLHNCQUFtQjtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFHRCx3Q0FBYzs7Ozs7SUFBZCxVQUFlLEVBQVUsRUFBRSxnQkFBa0M7UUFBN0QsaUJBTUM7O1lBTE8sV0FBVyxHQUFNLElBQUksQ0FBQyxHQUFHLHdCQUFtQixFQUFJO1FBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQW1CLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFRO1lBQzdGLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1lBQzlELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7O2dCQTVDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFVBQVU7Z0JBRVYsY0FBYzs7OzBCQUh2QjtDQXNEQyxBQTdDRCxJQTZDQztTQTFDWSxlQUFlOzs7SUFFMUIsOEJBQTJDOzs7OztJQUUvQiwrQkFBd0I7Ozs7O0lBQUUseUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRU1QVFksIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJy4vdG9hc3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5pbXBvcnQgeyBDbGFpbWFudFNPIH0gZnJvbSAncHJvamVjdHMvb3B0LWxpYnJhcnkvc3JjL3NlcnZpY2Utb2JqZWN0cy9jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IFVwZGF0ZUNsYWltYW50U08gfSBmcm9tICdwcm9qZWN0cy9vcHQtbGlicmFyeS9zcmMvc2VydmljZS1vYmplY3RzL3VwZGF0ZS1jbGFpbWFudC1zbyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhaW1hbnRTZXJ2aWNlIHtcclxuXHJcbiAgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODIvYXBpL2NsYWltYW50XCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UpIHsgfVxyXG4gIHB1YmxpYyBnZXRDbGFpbWFudEJ5SWQoY2xhaW1hbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDbGFpbWFudFNPPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS9nZXRDbGFpbWFudEJ5SWQvJHtjbGFpbWFudElkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDbGFpbWFudFNPPihjbGFpbWFudFVybClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBbGxDbGFpbWFudHMoKTogT2JzZXJ2YWJsZTxDbGFpbWFudFNPW10+IHsgLy9PYnNlcnZhYmxlPENsYWltYW50U09bXT4ge1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgJHt0aGlzLnVybH0vZ2V0QWxsQ2xhaW1hbnRzYDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENsYWltYW50U09bXT4oY2xhaW1hbnRVcmwpLnBpcGUoY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5kYW5nZXIoXCJFUlJPUlwiLCBcIlRoZSBwb3J0IHlvdSBhcmUgdHJ5aW5nIHRvIGFjY2VzcyBjYW5ub3QgYmUgcmVhY2hlZC5cIik7XHJcbiAgICAgIHJldHVybiBFTVBUWTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hDbGFpbWFudChjbGFpbWFudEluZm86IHN0cmluZyk6IE9ic2VydmFibGU8Q2xhaW1hbnRTT1tdPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS9zZWFyY2hDbGFpbWFudC8ke2NsYWltYW50SW5mb31gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q2xhaW1hbnRTT1tdPihjbGFpbWFudFVybCkucGlwZShjYXRjaEVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIFwiVGhlIHBvcnQgeW91IGFyZSB0cnlpbmcgdG8gYWNjZXNzIGNhbm5vdCBiZSByZWFjaGVkLlwiKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJDbGFpbWFudChjbGFpbWFudFNPOiBDbGFpbWFudFNPKTogT2JzZXJ2YWJsZTxudW1iZXI+ICAge1xyXG4gICAgY29uc29sZS5sb2coXCJJbnNpZGUgcmVnaXN0ZXIgY2xhaW1hbnQgYXBpXCIpO1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgJHt0aGlzLnVybH0vcmVnaXN0ZXJDbGFpbWFudGA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8bnVtYmVyPihjbGFpbWFudFVybCwgY2xhaW1hbnRTTyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgdXBkYXRlQ2xhaW1hbnQoaWQ6IG51bWJlciwgdXBkYXRlQ2xhaW1hbnRTTzogVXBkYXRlQ2xhaW1hbnRTTyk6IE9ic2VydmFibGU8VXBkYXRlQ2xhaW1hbnRTTz4ge1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgJHt0aGlzLnVybH0vdXBkYXRlQ2xhaW1hbnQvJHtpZH1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VXBkYXRlQ2xhaW1hbnRTTz4oY2xhaW1hbnRVcmwsIHVwZGF0ZUNsYWltYW50U08pLnBpcGUoY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5kYW5nZXIoXCJFUlJPUlwiLCBcIkNhbm5vdCB1cGRhdGUgcHJvZmlsZS5cIik7XHJcbiAgICAgIHJldHVybiBFTVBUWTtcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19