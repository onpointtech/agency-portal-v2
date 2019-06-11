import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";

@Pipe({name: 'mobilePhoneFormat'})
export class MobilePhoneFormatPipe implements PipeTransform {
    transform(mobilePhone: string): string {
        let newMobilePhone: string = "";

        if(mobilePhone.length == 10){
            for(var count = 0; count < mobilePhone.length; count++){
                if(count == 0){
                    newMobilePhone += "(";
                } else if(count == 3){
                    newMobilePhone += ") ";
                } else if(count == 6){
                    newMobilePhone += "-"
                }
                newMobilePhone += mobilePhone.charAt(count);
            }
        } else if(mobilePhone.length == 11){
            for(var count = 0; count < mobilePhone.length; count++){
                if(count == 0) {
                    newMobilePhone += "+";
                } else if(count == 1){
                    newMobilePhone += " (";
                } else if(count == 4){
                    newMobilePhone += ") ";
                } else if(count == 7){
                    newMobilePhone += "-"
                }
                newMobilePhone += mobilePhone.charAt(count);
            }   
        } else {
            newMobilePhone = mobilePhone;
        }
        return newMobilePhone;
    }
}