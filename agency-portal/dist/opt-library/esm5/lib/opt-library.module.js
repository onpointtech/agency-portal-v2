/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ValdemortModule } from 'ngx-valdemort';
import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { OptLibraryComponent } from './opt-library.component';
import { EditClaimantAddressComponent } from './edit-claimant-address/edit-claimant-address.component';
import { EditClaimantDetailsComponent } from './edit-claimant-details/edit-claimant-details.component';
import { MaskPipe } from 'ngx-mask';
import { OptSsnPipe } from '../custom-pipes/opt-ssn.pipe';
import { OptPhonePipe } from '../custom-pipes/opt-phone.pipe';
import { OptAddressPipe } from '../custom-pipes/opt-address.pipe';
import { OptDatePipe } from '../custom-pipes/opt-date.pipe';
var OptLibraryModule = /** @class */ (function () {
    function OptLibraryModule() {
    }
    OptLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        OptLibraryComponent,
                        EditClaimantDetailsComponent,
                        EditClaimantAddressComponent,
                        OptSsnPipe,
                        OptPhonePipe,
                        OptAddressPipe,
                        OptDatePipe,
                    ],
                    imports: [
                        NgbModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        ValdemortModule
                    ],
                    exports: [
                        OptLibraryComponent,
                        EditClaimantAddressComponent,
                        EditClaimantDetailsComponent,
                        OptSsnPipe,
                        OptPhonePipe,
                        OptAddressPipe,
                        OptDatePipe,
                    ],
                    entryComponents: [EditClaimantDetailsComponent, EditClaimantAddressComponent],
                    providers: [DatePipe, MaskPipe]
                },] }
    ];
    return OptLibraryModule;
}());
export { OptLibraryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvb3B0LWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVEO0lBQUE7SUE2QmdDLENBQUM7O2dCQTdCaEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsNEJBQTRCO3dCQUM1QixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCxTQUFTO3dCQUNULFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsNEJBQTRCO3dCQUM1QixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELGVBQWUsRUFBRSxDQUFDLDRCQUE0QixFQUFFLDRCQUE0QixDQUFDO29CQUM3RSxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2lCQUNoQzs7SUFDK0IsdUJBQUM7Q0FBQSxBQTdCakMsSUE2QmlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZhbGRlbW9ydE1vZHVsZSB9IGZyb20gJ25neC12YWxkZW1vcnQnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBPcHRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9vcHQtbGlicmFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0Q2xhaW1hbnRBZGRyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWNsYWltYW50LWFkZHJlc3MvZWRpdC1jbGFpbWFudC1hZGRyZXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRDbGFpbWFudERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtY2xhaW1hbnQtZGV0YWlscy9lZGl0LWNsYWltYW50LWRldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFza1BpcGUgfSBmcm9tICduZ3gtbWFzayc7XHJcbmltcG9ydCB7IE9wdFNzblBpcGUgfSBmcm9tICcuLi9jdXN0b20tcGlwZXMvb3B0LXNzbi5waXBlJztcclxuaW1wb3J0IHsgT3B0UGhvbmVQaXBlIH0gZnJvbSAnLi4vY3VzdG9tLXBpcGVzL29wdC1waG9uZS5waXBlJztcclxuaW1wb3J0IHsgT3B0QWRkcmVzc1BpcGUgfSBmcm9tICcuLi9jdXN0b20tcGlwZXMvb3B0LWFkZHJlc3MucGlwZSc7XHJcbmltcG9ydCB7IE9wdERhdGVQaXBlIH0gZnJvbSAnLi4vY3VzdG9tLXBpcGVzL29wdC1kYXRlLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE9wdExpYnJhcnlDb21wb25lbnQsXHJcbiAgICBFZGl0Q2xhaW1hbnREZXRhaWxzQ29tcG9uZW50LCBcclxuICAgIEVkaXRDbGFpbWFudEFkZHJlc3NDb21wb25lbnQsXHJcbiAgICBPcHRTc25QaXBlLFxyXG4gICAgT3B0UGhvbmVQaXBlLFxyXG4gICAgT3B0QWRkcmVzc1BpcGUsXHJcbiAgICBPcHREYXRlUGlwZSxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5nYk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFZhbGRlbW9ydE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgT3B0TGlicmFyeUNvbXBvbmVudCxcclxuICAgIEVkaXRDbGFpbWFudEFkZHJlc3NDb21wb25lbnQsXHJcbiAgICBFZGl0Q2xhaW1hbnREZXRhaWxzQ29tcG9uZW50LFxyXG4gICAgT3B0U3NuUGlwZSxcclxuICAgIE9wdFBob25lUGlwZSxcclxuICAgIE9wdEFkZHJlc3NQaXBlLFxyXG4gICAgT3B0RGF0ZVBpcGUsXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtFZGl0Q2xhaW1hbnREZXRhaWxzQ29tcG9uZW50LCBFZGl0Q2xhaW1hbnRBZGRyZXNzQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtEYXRlUGlwZSwgTWFza1BpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRMaWJyYXJ5TW9kdWxlIHsgfVxyXG4iXX0=