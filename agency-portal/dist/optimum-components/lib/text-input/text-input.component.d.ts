import { OnInit } from '@angular/core';
import { UserProfileModel } from '../user-profile-model';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class TextInputComponent implements OnInit {
    private fb;
    labelName: string;
    userProfileModel: UserProfileModel;
    profileForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    debug: boolean;
    submitted: boolean;
    onSubmit(): void;
}
