import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { MaskPipe } from '../../../node_modules/ngx-mask';

@Pipe({name: 'mobilePhoneFormat'})
export class MobilePhoneFormatPipe implements PipeTransform {

    constructor(private maskPipe: MaskPipe) {}

    transform(mobilePhone: string): string {
        let newMobilePhone: string = "";

        if(mobilePhone.length == 10){
            newMobilePhone = this.maskPipe.transform(mobilePhone, '(000) 000-0000')
        } else if(mobilePhone.length == 11){
            newMobilePhone = this.maskPipe.transform(mobilePhone, '+0 (000) 000-0000')  
        } else {
            newMobilePhone = mobilePhone;
        }
        return newMobilePhone;
    }
}