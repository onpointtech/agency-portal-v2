import { OnInit, EventEmitter, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class TextInputComponent implements OnInit {
    private renderer;
    labelName: string;
    userProfileModel: any;
    profileForm: FormGroup;
    formInput: string;
    userProfileModelChange: EventEmitter<any>;
    emitCity(): void;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    debug: boolean;
    submitted: boolean;
    onSubmit(): void;
}
