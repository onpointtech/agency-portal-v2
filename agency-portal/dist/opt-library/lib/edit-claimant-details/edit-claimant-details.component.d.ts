import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { ClaimantService } from '../../portal-services/claimant.service';
import { PortalService } from '../../portal-services/portal.service';
export declare class EditClaimantDetailsComponent implements OnInit {
    activeModal: NgbActiveModal;
    private claimantService;
    private portalService;
    private fb;
    input: any;
    id: number;
    updateClaimant: UpdateClaimantSO;
    claimantProfileCopy: ClaimantSO;
    profileForm: FormGroup;
    genderChoices: string[];
    raceChoices: string[];
    ethnicityChoices: string[];
    educationLevelChoices: string[];
    languagePreferenceChoices: string[];
    debug: boolean;
    constructor(activeModal: NgbActiveModal, claimantService: ClaimantService, portalService: PortalService, fb: FormBuilder);
    ngOnInit(): void;
    close(): void;
    updateClaimantDetails(): void;
    compareFn(c1: any, c2: any): boolean;
}