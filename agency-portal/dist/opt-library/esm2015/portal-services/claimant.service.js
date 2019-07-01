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
export class ClaimantService {
    /**
     * @param {?} http
     * @param {?} toasterService
     */
    constructor(http, toasterService) {
        this.http = http;
        this.toasterService = toasterService;
        this.url = "http://localhost:8080/api/claimant";
    }
    /**
     * @param {?} claimantId
     * @return {?}
     */
    getClaimantById(claimantId) {
        /** @type {?} */
        const claimantUrl = `${this.url}/getClaimantById/${claimantId}`;
        return this.http.get(claimantUrl);
    }
    /**
     * @return {?}
     */
    getAllClaimants() {
        //Observable<ClaimantSO[]> {
        /** @type {?} */
        const claimantUrl = `${this.url}/getAllClaimants`;
        return this.http.get(claimantUrl).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
            return EMPTY;
        })));
    }
    /**
     * @param {?} claimantInfo
     * @return {?}
     */
    searchClaimant(claimantInfo) {
        /** @type {?} */
        const claimantUrl = `${this.url}/searchClaimant/${claimantInfo}`;
        return this.http.get(claimantUrl).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
            return EMPTY;
        })));
    }
    //to do, change return type from promise to long
    //in claimant-registration.ts, take in the response(claimant id) and use it as a router link
    /**
     * @param {?} claimantSO
     * @return {?}
     */
    registerClaimant(claimantSO) {
        console.log("inside register claimant");
        /** @type {?} */
        const claimantUrl = `http://localhost:8080/api/claimant/registerClaimant`;
        return this.http.post(claimantUrl, claimantSO).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
            return EMPTY;
        })))
            .toPromise()
            .then(this.extractData);
    }
    /**
     * @param {?} res
     * @return {?}
     */
    extractData(res) {
        this.toasterService.success("Success!", "Profile has been registered");
        console.log(res);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleErrorPromise(error) {
        // this.toasterService.danger("ERROR", error);
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
    /**
     * @param {?} id
     * @param {?} updateClaimantSO
     * @return {?}
     */
    updateClaimant(id, updateClaimantSO) {
        /** @type {?} */
        const claimantUrl = `${this.url}/updateClaimant/${id}`;
        return this.http.put(claimantUrl, updateClaimantSO).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            this.toasterService.danger("ERROR", "Cannot update profile.");
            return EMPTY;
        })));
    }
}
ClaimantService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ClaimantService.ctorParameters = () => [
    { type: HttpClient },
    { type: ToasterService }
];
/** @nocollapse */ ClaimantService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ClaimantService_Factory() { return new ClaimantService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ToasterService)); }, token: ClaimantService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhaW1hbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsicG9ydGFsLXNlcnZpY2VzL2NsYWltYW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRSxPQUFPLEVBQWMsS0FBSyxFQUFtQixNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBOzs7O0FBUTNDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUFvQixJQUFnQixFQUFVLGNBQThCO1FBQXhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGNUUsUUFBRyxHQUFHLG9DQUFvQyxDQUFDO0lBRXFDLENBQUM7Ozs7O0lBQzFFLGVBQWUsQ0FBQyxVQUFrQjs7Y0FDakMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLFVBQVUsRUFBRTtRQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7Ozs7SUFFTSxlQUFlOzs7Y0FDZCxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxrQkFBa0I7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHNEQUFzRCxDQUFDLENBQUM7WUFDNUYsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsWUFBb0I7O2NBQ2xDLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLG1CQUFtQixZQUFZLEVBQUU7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHNEQUFzRCxDQUFDLENBQUM7WUFDNUYsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUtNLGdCQUFnQixDQUFDLFVBQXNCO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7Y0FDbEMsV0FBVyxHQUFHLHFEQUFxRDtRQUN6RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDMUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHNEQUFzRCxDQUFDLENBQUM7WUFDNUYsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQzthQUNBLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsR0FBYTtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsS0FBcUI7UUFDN0MsOENBQThDO1FBQzlDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN0QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsRUFBVSxFQUFFLGdCQUFrQzs7Y0FDckQsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLEVBQUUsRUFBRTtRQUN0RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFtQixXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDakcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUM7WUFDOUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBNURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVZRLFVBQVU7WUFFVixjQUFjOzs7OztJQVdyQiw4QkFBMkM7Ozs7O0lBRS9CLCtCQUF3Qjs7Ozs7SUFBRSx5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBFTVBUWSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXHJcbmltcG9ydCB7IENsYWltYW50U08gfSBmcm9tICdwcm9qZWN0cy9vcHQtbGlicmFyeS9zcmMvc2VydmljZS1vYmplY3RzL2NsYWltYW50LXNvJztcclxuaW1wb3J0IHsgVXBkYXRlQ2xhaW1hbnRTTyB9IGZyb20gJ3Byb2plY3RzL29wdC1saWJyYXJ5L3NyYy9zZXJ2aWNlLW9iamVjdHMvdXBkYXRlLWNsYWltYW50LXNvJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFpbWFudFNlcnZpY2Uge1xyXG5cclxuICB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY2xhaW1hbnRcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSkgeyB9XHJcbiAgcHVibGljIGdldENsYWltYW50QnlJZChjbGFpbWFudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENsYWltYW50U08+IHtcclxuICAgIGNvbnN0IGNsYWltYW50VXJsID0gYCR7dGhpcy51cmx9L2dldENsYWltYW50QnlJZC8ke2NsYWltYW50SWR9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENsYWltYW50U08+KGNsYWltYW50VXJsKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFsbENsYWltYW50cygpOiBPYnNlcnZhYmxlPENsYWltYW50U09bXT4geyAvL09ic2VydmFibGU8Q2xhaW1hbnRTT1tdPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS9nZXRBbGxDbGFpbWFudHNgO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q2xhaW1hbnRTT1tdPihjbGFpbWFudFVybCkucGlwZShjYXRjaEVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIFwiVGhlIHBvcnQgeW91IGFyZSB0cnlpbmcgdG8gYWNjZXNzIGNhbm5vdCBiZSByZWFjaGVkLlwiKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaENsYWltYW50KGNsYWltYW50SW5mbzogc3RyaW5nKTogT2JzZXJ2YWJsZTxDbGFpbWFudFNPW10+IHtcclxuICAgIGNvbnN0IGNsYWltYW50VXJsID0gYCR7dGhpcy51cmx9L3NlYXJjaENsYWltYW50LyR7Y2xhaW1hbnRJbmZvfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDbGFpbWFudFNPW10+KGNsYWltYW50VXJsKS5waXBlKGNhdGNoRXJyb3IoKGVycjogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZGFuZ2VyKFwiRVJST1JcIiwgXCJUaGUgcG9ydCB5b3UgYXJlIHRyeWluZyB0byBhY2Nlc3MgY2Fubm90IGJlIHJlYWNoZWQuXCIpO1xyXG4gICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy90byBkbywgY2hhbmdlIHJldHVybiB0eXBlIGZyb20gcHJvbWlzZSB0byBsb25nXHJcbiAgLy9pbiBjbGFpbWFudC1yZWdpc3RyYXRpb24udHMsIHRha2UgaW4gdGhlIHJlc3BvbnNlKGNsYWltYW50IGlkKSBhbmQgdXNlIGl0IGFzIGEgcm91dGVyIGxpbmtcclxuICBwdWJsaWMgcmVnaXN0ZXJDbGFpbWFudChjbGFpbWFudFNPOiBDbGFpbWFudFNPKXtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHJlZ2lzdGVyIGNsYWltYW50XCIpO1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9jbGFpbWFudC9yZWdpc3RlckNsYWltYW50YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChjbGFpbWFudFVybCwgY2xhaW1hbnRTTykucGlwZShjYXRjaEVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIFwiVGhlIHBvcnQgeW91IGFyZSB0cnlpbmcgdG8gYWNjZXNzIGNhbm5vdCBiZSByZWFjaGVkLlwiKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfSkpXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbih0aGlzLmV4dHJhY3REYXRhKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnN1Y2Nlc3MoXCJTdWNjZXNzIVwiLCBcIlByb2ZpbGUgaGFzIGJlZW4gcmVnaXN0ZXJlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlRXJyb3JQcm9taXNlKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgLy8gdGhpcy50b2FzdGVyU2VydmljZS5kYW5nZXIoXCJFUlJPUlwiLCBlcnJvcik7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xhaW1hbnQoaWQ6IG51bWJlciwgdXBkYXRlQ2xhaW1hbnRTTzogVXBkYXRlQ2xhaW1hbnRTTyk6IE9ic2VydmFibGU8VXBkYXRlQ2xhaW1hbnRTTz4ge1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgJHt0aGlzLnVybH0vdXBkYXRlQ2xhaW1hbnQvJHtpZH1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VXBkYXRlQ2xhaW1hbnRTTz4oY2xhaW1hbnRVcmwsIHVwZGF0ZUNsYWltYW50U08pLnBpcGUoY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5kYW5nZXIoXCJFUlJPUlwiLCBcIkNhbm5vdCB1cGRhdGUgcHJvZmlsZS5cIik7XHJcbiAgICAgIHJldHVybiBFTVBUWTtcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19