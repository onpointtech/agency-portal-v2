/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { MaskPipe } from 'ngx-mask';
export class OptPhonePipe {
    /**
     * @param {?} maskPipe
     */
    constructor(maskPipe) {
        this.maskPipe = maskPipe;
    }
    /**
     * @param {?} mobilePhone
     * @return {?}
     */
    transform(mobilePhone) {
        /** @type {?} */
        let newMobilePhone = "";
        if (mobilePhone.length == 10) {
            newMobilePhone = this.maskPipe.transform(mobilePhone, '(000) 000-0000');
        }
        else if (mobilePhone.length == 11) {
            newMobilePhone = this.maskPipe.transform(mobilePhone, '+0 (000) 000-0000');
        }
        else {
            newMobilePhone = mobilePhone;
        }
        return newMobilePhone;
    }
}
OptPhonePipe.decorators = [
    { type: Pipe, args: [{ name: 'optPhonePipe' },] }
];
/** @nocollapse */
OptPhonePipe.ctorParameters = () => [
    { type: MaskPipe }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OptPhonePipe.prototype.maskPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LXBob25lLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vcHQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImN1c3RvbS1waXBlcy9vcHQtcGhvbmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdwQyxNQUFNLE9BQU8sWUFBWTs7OztJQUVyQixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7SUFFMUMsU0FBUyxDQUFDLFdBQW1COztZQUNyQixjQUFjLEdBQVcsRUFBRTtRQUUvQixJQUFHLFdBQVcsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFDO1lBQ3hCLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtTQUMxRTthQUFNLElBQUcsV0FBVyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUM7WUFDL0IsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFBO1NBQzdFO2FBQU07WUFDSCxjQUFjLEdBQUcsV0FBVyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQzs7O1lBaEJKLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUM7Ozs7WUFGbkIsUUFBUTs7Ozs7OztJQUtELGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNYXNrUGlwZSB9IGZyb20gJ25neC1tYXNrJztcclxuXHJcbkBQaXBlKHtuYW1lOiAnb3B0UGhvbmVQaXBlJ30pXHJcbmV4cG9ydCBjbGFzcyBPcHRQaG9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hc2tQaXBlOiBNYXNrUGlwZSkge31cclxuXHJcbiAgICB0cmFuc2Zvcm0obW9iaWxlUGhvbmU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG5ld01vYmlsZVBob25lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZihtb2JpbGVQaG9uZS5sZW5ndGggPT0gMTApe1xyXG4gICAgICAgICAgICBuZXdNb2JpbGVQaG9uZSA9IHRoaXMubWFza1BpcGUudHJhbnNmb3JtKG1vYmlsZVBob25lLCAnKDAwMCkgMDAwLTAwMDAnKVxyXG4gICAgICAgIH0gZWxzZSBpZihtb2JpbGVQaG9uZS5sZW5ndGggPT0gMTEpe1xyXG4gICAgICAgICAgICBuZXdNb2JpbGVQaG9uZSA9IHRoaXMubWFza1BpcGUudHJhbnNmb3JtKG1vYmlsZVBob25lLCAnKzAgKDAwMCkgMDAwLTAwMDAnKSAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3TW9iaWxlUGhvbmUgPSBtb2JpbGVQaG9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld01vYmlsZVBob25lO1xyXG4gICAgfVxyXG59Il19