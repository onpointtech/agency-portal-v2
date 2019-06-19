export class ClaimantRegistrationModel {
  constructor(
    public claimantId: number,
    public ssn: string,
    public dateOfBirth: Date,
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
    public homePhone: string,
    public mobilePhone: string,
    public languagePreference: string,
    public educationLevel: string,
    public gender: string,
    public race: string,
    public ethnicity: string,
    public lastInsertUpdateTS: Date,
    public lastInsertUpdateBy: string,
    public ivrPin: string,
    public documentDeliveryPreference: string,
    public address: string[],
){}
}
