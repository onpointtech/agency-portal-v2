import { Address } from './address';

export class ClaimantSO {
    claimantId: number;
    ssn: string;
    dateOfBirth: Date;
    firstName: string;
    middleInitial: string;
    lastName: string;
    homePhone: string;
    mobilePhone: string;
    languagePreference: string;
    educationalLevel: string;
    gender: string;
    race: string;
    ethnicity: string;
    lastInsertUpdateTS: Date;
    lastInsertUpdateBy: string;
    ivrPin: string;
    documentDeliveryPreference: string;
    address: Address[];
}