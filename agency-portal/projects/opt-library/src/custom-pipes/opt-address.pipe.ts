import { Pipe, PipeTransform } from "@angular/core";
import { Address } from 'projects/opt-library/src/service-objects/address';

@Pipe({name: 'optAddressPipe'})
export class OptAddressPipe implements PipeTransform {
    transform(address: Address[]): string {
        let newAddress: string = "";

        if(address != null){
            if(address[0] != null){
                if(address[0].addressLine1 != null){
                    newAddress += address[0].addressLine1;
                }

                if(address[0].addressLine2 != null) {
                    newAddress += ", ";
                    newAddress += address[0].addressLine2;
                }

                newAddress = newAddress + ", " + "\n" + address[0].city + ", " + address[0].state + ", " + address[0].zipCode;
        
                if(address[0].zipExt != null) {
                    newAddress += "-";
                    newAddress += address[0].zipExt;
                }

                return newAddress;
            }
        } else {
            return null;
        }
    }
}