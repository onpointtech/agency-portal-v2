import { OnInit } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class DropdownInputComponent implements OnInit {
    private fb;
    labelName: string;
    dropdownChoices: string[];
    userProfileModel: UserProfileModel;
    profileForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    debug: boolean;
    submitted: boolean;
    onSubmit(): void;
}
