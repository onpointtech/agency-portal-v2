/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ValdemortModule } from 'ngx-valdemort';
import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptLibraryComponent } from './opt-library.component';
import { EditClaimantAddressComponent } from './edit-claimant-address/edit-claimant-address.component';
import { EditClaimantDetailsComponent } from './edit-claimant-details/edit-claimant-details.component';
// import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
// import { CommonModule } from '../../../../node_modules/@angular/common';
export class OptLibraryModule {
}
OptLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    OptLibraryComponent,
                    EditClaimantDetailsComponent,
                    EditClaimantAddressComponent
                ],
                imports: [
                    NgbModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule,
                    ValdemortModule
                ],
                exports: [OptLibraryComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvb3B0LWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7Ozs7QUFvQnZHLE1BQU0sT0FBTyxnQkFBZ0I7OztZQWY1QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIsNEJBQTRCO29CQUM1Qiw0QkFBNEI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxTQUFTO29CQUNULFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmFsZGVtb3J0TW9kdWxlIH0gZnJvbSAnbmd4LXZhbGRlbW9ydCc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgT3B0TGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vb3B0LWxpYnJhcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdENsYWltYW50QWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jbGFpbWFudC1hZGRyZXNzL2VkaXQtY2xhaW1hbnQtYWRkcmVzcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0Q2xhaW1hbnREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWNsYWltYW50LWRldGFpbHMvZWRpdC1jbGFpbWFudC1kZXRhaWxzLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zJztcclxuLy8gaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgT3B0TGlicmFyeUNvbXBvbmVudCxcclxuICAgIEVkaXRDbGFpbWFudERldGFpbHNDb21wb25lbnQsIFxyXG4gICAgRWRpdENsYWltYW50QWRkcmVzc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmdiTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVmFsZGVtb3J0TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbT3B0TGlicmFyeUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdExpYnJhcnlNb2R1bGUgeyB9XHJcbiJdfQ==