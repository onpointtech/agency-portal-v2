import { OnInit } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
export declare class PhoneInputComponent implements OnInit {
    labelName: string;
    userProfileModel: UserProfileModel;
    profileForm: FormGroup;
    constructor();
    ngOnInit(): void;
    debug: boolean;
    submitted: boolean;
    onSubmit(): void;
}
