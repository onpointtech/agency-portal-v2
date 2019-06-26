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
        this.url = "http://localhost:8080/api/claimant";
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
        var _this = this;
        console.log("inside register claimant");
        /** @type {?} */
        var claimantUrl = "http://localhost:8080/api/claimant/registerClaimant";
        return this.http.post(claimantUrl, claimantSO).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
            return EMPTY;
        })))
            .toPromise()
            .then(this.extractData);
    };
    /**
     * @param {?} res
     * @return {?}
     */
    ClaimantService.prototype.extractData = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        this.toasterService.success("Success!", "Profile has been registered");
        console.log(res);
    };
    /**
     * @param {?} error
     * @return {?}
     */
    ClaimantService.prototype.handleErrorPromise = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        // this.toasterService.danger("ERROR", error);
        console.error(error.message || error);
        return Promise.reject(error.message || error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhaW1hbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsicG9ydGFsLXNlcnZpY2VzL2NsYWltYW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRSxPQUFPLEVBQWMsS0FBSyxFQUFtQixNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBOzs7O0FBSzNDO0lBT0UseUJBQW9CLElBQWdCLEVBQVUsY0FBOEI7UUFBeEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUY1RSxRQUFHLEdBQUcsb0NBQW9DLENBQUM7SUFFcUMsQ0FBQzs7Ozs7SUFDMUUseUNBQWU7Ozs7SUFBdEIsVUFBdUIsVUFBa0I7O1lBQ2pDLFdBQVcsR0FBTSxJQUFJLENBQUMsR0FBRyx5QkFBb0IsVUFBWTtRQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7Ozs7SUFFTSx5Q0FBZTs7O0lBQXRCO1FBQUEsaUJBTUM7OztZQUxPLFdBQVcsR0FBTSxJQUFJLENBQUMsR0FBRyxxQkFBa0I7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsR0FBUTtZQUN2RSxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsc0RBQXNELENBQUMsQ0FBQztZQUM1RixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVNLHdDQUFjOzs7O0lBQXJCLFVBQXNCLFlBQW9CO1FBQTFDLGlCQU1DOztZQUxPLFdBQVcsR0FBTSxJQUFJLENBQUMsR0FBRyx3QkFBbUIsWUFBYztRQUNoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFRO1lBQ3ZFLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1lBQzVGLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU0sMENBQWdCOzs7O0lBQXZCLFVBQXdCLFVBQXNCO1FBQTlDLGlCQVNDO1FBUkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztZQUNsQyxXQUFXLEdBQUcscURBQXFEO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFRO1lBQ3RFLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1lBQzVGLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7YUFDQSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU0scUNBQVc7Ozs7SUFBbEIsVUFBbUIsR0FBYTtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sNENBQWtCOzs7O0lBQXpCLFVBQTBCLEtBQXFCO1FBQzdDLDhDQUE4QztRQUM5QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7UUFDdEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRUQsd0NBQWM7Ozs7O0lBQWQsVUFBZSxFQUFVLEVBQUUsZ0JBQWtDO1FBQTdELGlCQU1DOztZQUxPLFdBQVcsR0FBTSxJQUFJLENBQUMsR0FBRyx3QkFBbUIsRUFBSTtRQUN0RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFtQixXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsR0FBUTtZQUM3RixLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztZQUM5RCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixDQUFDOztnQkF6REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWUSxVQUFVO2dCQUVWLGNBQWM7OzswQkFIdkI7Q0FtRUMsQUExREQsSUEwREM7U0F2RFksZUFBZTs7O0lBRTFCLDhCQUEyQzs7Ozs7SUFFL0IsK0JBQXdCOzs7OztJQUFFLHlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEVNUFRZLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcclxuaW1wb3J0IHsgQ2xhaW1hbnRTTyB9IGZyb20gJ3Byb2plY3RzL29wdC1saWJyYXJ5L3NyYy9zZXJ2aWNlLW9iamVjdHMvY2xhaW1hbnQtc28nO1xyXG5pbXBvcnQgeyBVcGRhdGVDbGFpbWFudFNPIH0gZnJvbSAncHJvamVjdHMvb3B0LWxpYnJhcnkvc3JjL3NlcnZpY2Utb2JqZWN0cy91cGRhdGUtY2xhaW1hbnQtc28nO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENsYWltYW50U2VydmljZSB7XHJcblxyXG4gIHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9jbGFpbWFudFwiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7IH1cclxuICBwdWJsaWMgZ2V0Q2xhaW1hbnRCeUlkKGNsYWltYW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q2xhaW1hbnRTTz4ge1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgJHt0aGlzLnVybH0vZ2V0Q2xhaW1hbnRCeUlkLyR7Y2xhaW1hbnRJZH1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q2xhaW1hbnRTTz4oY2xhaW1hbnRVcmwpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QWxsQ2xhaW1hbnRzKCk6IE9ic2VydmFibGU8Q2xhaW1hbnRTT1tdPiB7IC8vT2JzZXJ2YWJsZTxDbGFpbWFudFNPW10+IHtcclxuICAgIGNvbnN0IGNsYWltYW50VXJsID0gYCR7dGhpcy51cmx9L2dldEFsbENsYWltYW50c2A7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDbGFpbWFudFNPW10+KGNsYWltYW50VXJsKS5waXBlKGNhdGNoRXJyb3IoKGVycjogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZGFuZ2VyKFwiRVJST1JcIiwgXCJUaGUgcG9ydCB5b3UgYXJlIHRyeWluZyB0byBhY2Nlc3MgY2Fubm90IGJlIHJlYWNoZWQuXCIpO1xyXG4gICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VhcmNoQ2xhaW1hbnQoY2xhaW1hbnRJbmZvOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENsYWltYW50U09bXT4ge1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgJHt0aGlzLnVybH0vc2VhcmNoQ2xhaW1hbnQvJHtjbGFpbWFudEluZm99YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENsYWltYW50U09bXT4oY2xhaW1hbnRVcmwpLnBpcGUoY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5kYW5nZXIoXCJFUlJPUlwiLCBcIlRoZSBwb3J0IHlvdSBhcmUgdHJ5aW5nIHRvIGFjY2VzcyBjYW5ub3QgYmUgcmVhY2hlZC5cIik7XHJcbiAgICAgIHJldHVybiBFTVBUWTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3RlckNsYWltYW50KGNsYWltYW50U086IENsYWltYW50U08pe1xyXG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgcmVnaXN0ZXIgY2xhaW1hbnRcIik7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2NsYWltYW50L3JlZ2lzdGVyQ2xhaW1hbnRgO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGNsYWltYW50VXJsLCBjbGFpbWFudFNPKS5waXBlKGNhdGNoRXJyb3IoKGVycjogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZGFuZ2VyKFwiRVJST1JcIiwgXCJUaGUgcG9ydCB5b3UgYXJlIHRyeWluZyB0byBhY2Nlc3MgY2Fubm90IGJlIHJlYWNoZWQuXCIpO1xyXG4gICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICB9KSlcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKHRoaXMuZXh0cmFjdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiUHJvZmlsZSBoYXMgYmVlbiByZWdpc3RlcmVkXCIpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVFcnJvclByb21pc2UoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAvLyB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIGVycm9yKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDbGFpbWFudChpZDogbnVtYmVyLCB1cGRhdGVDbGFpbWFudFNPOiBVcGRhdGVDbGFpbWFudFNPKTogT2JzZXJ2YWJsZTxVcGRhdGVDbGFpbWFudFNPPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS91cGRhdGVDbGFpbWFudC8ke2lkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxVcGRhdGVDbGFpbWFudFNPPihjbGFpbWFudFVybCwgdXBkYXRlQ2xhaW1hbnRTTykucGlwZShjYXRjaEVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIFwiQ2Fubm90IHVwZGF0ZSBwcm9maWxlLlwiKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=