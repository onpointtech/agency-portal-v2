import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";

@Pipe({name: 'ssnFormat'})
export class SSNFormatPipe implements PipeTransform {
    transform(ssn: string): string {
        let newSSN: string = "";
        for(var count = 0; count < ssn.length; count++){
            if((count == 3) || (count == 5)){
                newSSN += "-"
            }

            newSSN += ssn.charAt(count);
        }
        return newSSN;
    }
}