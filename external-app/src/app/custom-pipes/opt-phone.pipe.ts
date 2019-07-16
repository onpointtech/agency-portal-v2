import { Pipe, PipeTransform } from "@angular/core";
import { MaskPipe } from 'ngx-mask';

@Pipe({name: 'optPhonePipe'})
export class OptPhonePipe implements PipeTransform {

    constructor(private maskPipe: MaskPipe) {}

    transform(mobilePhone: string): string {
        let newMobilePhone: string = "";

        if(mobilePhone == null || mobilePhone == ""){
            return null;
        } else if(mobilePhone.length == 10){
            newMobilePhone = this.maskPipe.transform(mobilePhone, '(000) 000-0000');
            return newMobilePhone;
        } else if(mobilePhone.length == 11){
            newMobilePhone = this.maskPipe.transform(mobilePhone, '+0 (000) 000-0000');
            return newMobilePhone;
        } else {
            newMobilePhone = mobilePhone;
            return newMobilePhone;
        }
    }
}