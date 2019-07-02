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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhaW1hbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29wdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsicG9ydGFsLXNlcnZpY2VzL2NsYWltYW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRSxPQUFPLEVBQWMsS0FBSyxFQUFtQixNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBOzs7O0FBUTNDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUFvQixJQUFnQixFQUFVLGNBQThCO1FBQXhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGNUUsUUFBRyxHQUFHLG9DQUFvQyxDQUFDO0lBRXFDLENBQUM7Ozs7O0lBQzFFLGVBQWUsQ0FBQyxVQUFrQjs7Y0FDakMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLFVBQVUsRUFBRTtRQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7Ozs7SUFFTSxlQUFlOzs7Y0FDZCxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxrQkFBa0I7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHNEQUFzRCxDQUFDLENBQUM7WUFDNUYsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsWUFBb0I7O2NBQ2xDLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLG1CQUFtQixZQUFZLEVBQUU7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLHNEQUFzRCxDQUFDLENBQUM7WUFDNUYsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFJTSxnQkFBZ0IsQ0FBQyxVQUFzQjtRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7O2NBQ3RDLFdBQVcsR0FBRyxxREFBcUQ7UUFDekUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBR0QsY0FBYyxDQUFDLEVBQVUsRUFBRSxnQkFBa0M7O2NBQ3JELFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLG1CQUFtQixFQUFFLEVBQUU7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBbUIsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ2pHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1lBQzlELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7OztZQTVDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxVQUFVO1lBRVYsY0FBYzs7Ozs7SUFXckIsOEJBQTJDOzs7OztJQUUvQiwrQkFBd0I7Ozs7O0lBQUUseUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRU1QVFksIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJy4vdG9hc3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5pbXBvcnQgeyBDbGFpbWFudFNPIH0gZnJvbSAncHJvamVjdHMvb3B0LWxpYnJhcnkvc3JjL3NlcnZpY2Utb2JqZWN0cy9jbGFpbWFudC1zbyc7XHJcbmltcG9ydCB7IFVwZGF0ZUNsYWltYW50U08gfSBmcm9tICdwcm9qZWN0cy9vcHQtbGlicmFyeS9zcmMvc2VydmljZS1vYmplY3RzL3VwZGF0ZS1jbGFpbWFudC1zbyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhaW1hbnRTZXJ2aWNlIHtcclxuXHJcbiAgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2NsYWltYW50XCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UpIHsgfVxyXG4gIHB1YmxpYyBnZXRDbGFpbWFudEJ5SWQoY2xhaW1hbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDbGFpbWFudFNPPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS9nZXRDbGFpbWFudEJ5SWQvJHtjbGFpbWFudElkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDbGFpbWFudFNPPihjbGFpbWFudFVybClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBbGxDbGFpbWFudHMoKTogT2JzZXJ2YWJsZTxDbGFpbWFudFNPW10+IHsgLy9PYnNlcnZhYmxlPENsYWltYW50U09bXT4ge1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgJHt0aGlzLnVybH0vZ2V0QWxsQ2xhaW1hbnRzYDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENsYWltYW50U09bXT4oY2xhaW1hbnRVcmwpLnBpcGUoY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5kYW5nZXIoXCJFUlJPUlwiLCBcIlRoZSBwb3J0IHlvdSBhcmUgdHJ5aW5nIHRvIGFjY2VzcyBjYW5ub3QgYmUgcmVhY2hlZC5cIik7XHJcbiAgICAgIHJldHVybiBFTVBUWTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hDbGFpbWFudChjbGFpbWFudEluZm86IHN0cmluZyk6IE9ic2VydmFibGU8Q2xhaW1hbnRTT1tdPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS9zZWFyY2hDbGFpbWFudC8ke2NsYWltYW50SW5mb31gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q2xhaW1hbnRTT1tdPihjbGFpbWFudFVybCkucGlwZShjYXRjaEVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIFwiVGhlIHBvcnQgeW91IGFyZSB0cnlpbmcgdG8gYWNjZXNzIGNhbm5vdCBiZSByZWFjaGVkLlwiKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJDbGFpbWFudChjbGFpbWFudFNPOiBDbGFpbWFudFNPKTogT2JzZXJ2YWJsZTxudW1iZXI+ICAge1xyXG4gICAgY29uc29sZS5sb2coXCJJbnNpZGUgcmVnaXN0ZXIgY2xhaW1hbnQgYXBpXCIpO1xyXG4gICAgY29uc3QgY2xhaW1hbnRVcmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9jbGFpbWFudC9yZWdpc3RlckNsYWltYW50YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxudW1iZXI+KGNsYWltYW50VXJsLCBjbGFpbWFudFNPKTtcclxuICB9XHJcblxyXG5cclxuICB1cGRhdGVDbGFpbWFudChpZDogbnVtYmVyLCB1cGRhdGVDbGFpbWFudFNPOiBVcGRhdGVDbGFpbWFudFNPKTogT2JzZXJ2YWJsZTxVcGRhdGVDbGFpbWFudFNPPiB7XHJcbiAgICBjb25zdCBjbGFpbWFudFVybCA9IGAke3RoaXMudXJsfS91cGRhdGVDbGFpbWFudC8ke2lkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxVcGRhdGVDbGFpbWFudFNPPihjbGFpbWFudFVybCwgdXBkYXRlQ2xhaW1hbnRTTykucGlwZShjYXRjaEVycm9yKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmRhbmdlcihcIkVSUk9SXCIsIFwiQ2Fubm90IHVwZGF0ZSBwcm9maWxlLlwiKTtcclxuICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=