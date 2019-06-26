import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Address } from '../../service-objects/address';
import { ClaimantSO } from '../../service-objects/claimant-so';
import { UpdateClaimantSO } from '../../service-objects/update-claimant-so';
import { ClaimantService } from '../../portal-services/claimant.service';
import { PortalService } from '../../portal-services/portal.service';
export declare class EditClaimantAddressComponent implements OnInit {
    activeModal: NgbActiveModal;
    private claimantService;
    private portalService;
    private fb;
    address: any;
    id: number;
    addressId: number;
    updateClaimant: UpdateClaimantSO;
    claimantProfileCopy: ClaimantSO;
    updateClaimantAddress: Address;
    stateChoices: string[];
    profileForm: FormGroup;
    debug: boolean;
    constructor(activeModal: NgbActiveModal, claimantService: ClaimantService, portalService: PortalService, fb: FormBuilder);
    ngOnInit(): void;
    close(): void;
    updateClaimantDetails(): void;
    compareFn(c1: any, c2: any): boolean;
}
