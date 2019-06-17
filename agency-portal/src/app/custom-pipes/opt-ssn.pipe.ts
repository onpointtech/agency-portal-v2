import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'optSsnPipe'})
export class OptSsnPipe implements PipeTransform {
    transform(ssn: string): string {
        let newSSN: string = "";
        if(ssn.length == 9) {
            for(var count = 0; count < ssn.length; count++){
                if((count == 3) || (count == 5)){
                    newSSN += "-"
                }

                if((count >= 0) && (count <= 4)) {
                    newSSN += "X"
                } else {
                    newSSN += ssn.charAt(count);
                }
            }
            return newSSN;
        } else if(ssn.length == 4) {
            for(var count = 0; count < 9; count++) {
                if((count == 3) || (count == 5)){
                    newSSN += "-"
                }

                if((count >= 0) && (count <= 4)) {
                    newSSN += "X"
                } else {
                    newSSN += ssn.charAt(count - 5);
                }
            }
            return newSSN;
        } else {
            return ssn;
        }
    }
}