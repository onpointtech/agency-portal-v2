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
    /**
     * @param {?} claimantSO
     * @return {?}
     */
    registerClaimant(claimantSO) {
        console.log("Inside register claimant api");
        /** @type {?} */
        const claimantUrl = `http://localhost:8080/api/claimant/registerClaimant`;
        return this.http.post(claimantUrl, claimantSO);
    }
    // //to do, change return type from promise to long
    // //in claimant-registration.ts, take in the response(claimant id) and use it as a router link
    // public registerClaimant(claimantSO: ClaimantSO) {
    //   console.log("Inside register claimant api");
    //   var claimantId;
    //   const claimantUrl = `http://localhost:8080/api/claimant/registerClaimant`;
    //   return this.http.post(claimantUrl, claimantSO).pipe(catchError((err: any) => {
    //     this.toasterService.danger("ERROR", "The port you are trying to access cannot be reached.");
    //     return EMPTY;
    //   }))
    //     .toPromise()
    //     .then(this.extractData);
    // }
    // public extractData(res: Response) {
    //   this.toasterService.success("Success!", "Profile has been registered");
    //   console.log(res);
    // }
    // public handleErrorPromise(error: Response | any) {
    //   // this.toasterService.danger("ERROR", error);
    //   console.error(error.message || error);
    //   return Promise.reject(error.message || error);
    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhaW1hbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsicG9ydGFsLXNlcnZpY2VzL2NsYWltYW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRSxPQUFPLEVBQWMsS0FBSyxFQUFtQixNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBOzs7O0FBUTNDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUFvQixJQUFnQixFQUFVLGNBQThCO1FBQXhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGNUUsUUFBRyxHQUFHLG9DQUFvQyxDQUFDO0lBRXFDLENBQUM7Ozs7O0lBQzFFLGVBQWUsQ0FBQyxVQUFrQjs7Y0FDakMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLFVBQVUsRUFBRTtRQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7Ozs7SUFFTSxlQUFlOzs7Y0FDZCxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxrQkFBa0I7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHNEQUFzRCxDQUFDLENBQUM7WUFDNUYsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsWUFBb0I7O2NBQ2xDLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLG1CQUFtQixZQUFZLEVBQUU7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHNEQUFzRCxDQUFDLENBQUM7WUFDNUYsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxVQUFzQjtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7O2NBQ3RDLFdBQVcsR0FBRyxxREFBcUQ7UUFDekUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCRCxjQUFjLENBQUMsRUFBVSxFQUFFLGdCQUFrQzs7Y0FDckQsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLEVBQUUsRUFBRTtRQUN0RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFtQixXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDakcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUM7WUFDOUQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBbkVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVZRLFVBQVU7WUFFVixjQUFjOzs7OztJQVdyQiw4QkFBMkM7Ozs7O0lBRS9CLCtCQUF3Qjs7Ozs7SUFBRSx5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBFTVBUWSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXHJcbmltcG9ydCB7IENsYWltYW50U08gfSBmcm9tICdwcm9qZWN0cy9vcHQtbGlicmFyeS9zcmMvc2VydmljZS1vYmplY3RzL2NsYWltYW50LXNvJztcclxuaW1wb3J0IHsgVXBkYXRlQ2xhaW1hbnRTTyB9IGZyb20gJ3Byb2plY3RzL29wdC1saWJyYXJ5L3NyYy9zZXJ2aWNlLW9iamVjdHMvdXBkYXRlLWNsYWltYW50LXNvJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFpbWFudFNlcnZpY2Uge1xyXG5cclxuICB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY2xhaW1hbnRcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSkgeyB9XHJcbiAgcHVibGljIGdldENsYWltYW50QnlJZChjbGFpbWFudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENsYWltYW50U08+IHtcclxuICAgIGNvbnN0IGNsYWltYW50VXJsID0gYCR7dGhpcy51cmx9L2dldENsYWltYW50QnlJZC8ke2NsYWltYW50SWR9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENsYWltYW50U08+KGNsYWltYW50VXJsKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFsbENsYWltYW50cygpOiBPYnNlcnZhYmxlPENsYWltYW50U09bXT4geyAvL09ic2VydmFibGU8Q2xhaW1hbnRTT1tdPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS9nZXRBbGxDbGFpbWFudHNgO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q2xhaW1hbnRTT1tdPihjbGFpbWFudFVybCkucGlwZShjYXRjaEVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIFwiVGhlIHBvcnQgeW91IGFyZSB0cnlpbmcgdG8gYWNjZXNzIGNhbm5vdCBiZSByZWFjaGVkLlwiKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaENsYWltYW50KGNsYWltYW50SW5mbzogc3RyaW5nKTogT2JzZXJ2YWJsZTxDbGFpbWFudFNPW10+IHtcclxuICAgIGNvbnN0IGNsYWltYW50VXJsID0gYCR7dGhpcy51cmx9L3NlYXJjaENsYWltYW50LyR7Y2xhaW1hbnRJbmZvfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDbGFpbWFudFNPW10+KGNsYWltYW50VXJsKS5waXBlKGNhdGNoRXJyb3IoKGVycjogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZGFuZ2VyKFwiRVJST1JcIiwgXCJUaGUgcG9ydCB5b3UgYXJlIHRyeWluZyB0byBhY2Nlc3MgY2Fubm90IGJlIHJlYWNoZWQuXCIpO1xyXG4gICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJDbGFpbWFudChjbGFpbWFudFNPOiBDbGFpbWFudFNPKTogYW55IHtcclxuICAgIGNvbnNvbGUubG9nKFwiSW5zaWRlIHJlZ2lzdGVyIGNsYWltYW50IGFwaVwiKTtcclxuICAgIGNvbnN0IGNsYWltYW50VXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvY2xhaW1hbnQvcmVnaXN0ZXJDbGFpbWFudGA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoY2xhaW1hbnRVcmwsIGNsYWltYW50U08pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIC8vdG8gZG8sIGNoYW5nZSByZXR1cm4gdHlwZSBmcm9tIHByb21pc2UgdG8gbG9uZ1xyXG4gIC8vIC8vaW4gY2xhaW1hbnQtcmVnaXN0cmF0aW9uLnRzLCB0YWtlIGluIHRoZSByZXNwb25zZShjbGFpbWFudCBpZCkgYW5kIHVzZSBpdCBhcyBhIHJvdXRlciBsaW5rXHJcbiAgLy8gcHVibGljIHJlZ2lzdGVyQ2xhaW1hbnQoY2xhaW1hbnRTTzogQ2xhaW1hbnRTTykge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJJbnNpZGUgcmVnaXN0ZXIgY2xhaW1hbnQgYXBpXCIpO1xyXG4gIC8vICAgdmFyIGNsYWltYW50SWQ7XHJcbiAgLy8gICBjb25zdCBjbGFpbWFudFVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2NsYWltYW50L3JlZ2lzdGVyQ2xhaW1hbnRgO1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGNsYWltYW50VXJsLCBjbGFpbWFudFNPKS5waXBlKGNhdGNoRXJyb3IoKGVycjogYW55KSA9PiB7XHJcbiAgLy8gICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZGFuZ2VyKFwiRVJST1JcIiwgXCJUaGUgcG9ydCB5b3UgYXJlIHRyeWluZyB0byBhY2Nlc3MgY2Fubm90IGJlIHJlYWNoZWQuXCIpO1xyXG4gIC8vICAgICByZXR1cm4gRU1QVFk7XHJcbiAgLy8gICB9KSlcclxuICAvLyAgICAgLnRvUHJvbWlzZSgpXHJcbiAgLy8gICAgIC50aGVuKHRoaXMuZXh0cmFjdERhdGEpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcHVibGljIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAvLyAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiUHJvZmlsZSBoYXMgYmVlbiByZWdpc3RlcmVkXCIpO1xyXG4gIC8vICAgY29uc29sZS5sb2cocmVzKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHB1YmxpYyBoYW5kbGVFcnJvclByb21pc2UoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgLy8gICAvLyB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIGVycm9yKTtcclxuICAvLyAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgLy8gICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgLy8gfVxyXG5cclxuICB1cGRhdGVDbGFpbWFudChpZDogbnVtYmVyLCB1cGRhdGVDbGFpbWFudFNPOiBVcGRhdGVDbGFpbWFudFNPKTogT2JzZXJ2YWJsZTxVcGRhdGVDbGFpbWFudFNPPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS91cGRhdGVDbGFpbWFudC8ke2lkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxVcGRhdGVDbGFpbWFudFNPPihjbGFpbWFudFVybCwgdXBkYXRlQ2xhaW1hbnRTTykucGlwZShjYXRjaEVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIFwiQ2Fubm90IHVwZGF0ZSBwcm9maWxlLlwiKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=