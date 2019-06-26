import { Address } from './address';
export declare class ClaimantSO {
    claimantId: number;
    ssn: string;
    dateOfBirth: Date;
    firstName: string;
    middleInitial: string;
    lastName: string;
    homePhone: string;
    mobilePhone: string;
    languagePreference: string;
    educationLevel: string;
    gender: string;
    race: string;
    ethnicity: string;
    lastInsertUpdateTS: Date;
    lastInsertUpdateBy: string;
    ivrPin: string;
    documentDeliveryPreference: string;
    address: Address[];
    email: string;
    preferredOccupation: string;
    alternateClaimantId: string;
}
