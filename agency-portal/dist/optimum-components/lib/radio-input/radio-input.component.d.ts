import { OnInit } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup } from '@angular/forms';
export declare class RadioInputComponent implements OnInit {
    labelName: string;
    radioChoices: string[];
    userProfileModel: UserProfileModel;
    profileForm: FormGroup;
    constructor();
    ngOnInit(): void;
    debug: boolean;
    submitted: boolean;
    onSubmit(): void;
}
