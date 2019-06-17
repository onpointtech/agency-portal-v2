import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Address } from '../service-objects/address';

@Pipe({name: 'addressFormat'})
export class AddressFormatPipe implements PipeTransform {
    transform(address: Address[]): string {
        let newAddress: string = "";

            newAddress += address[0].addressLine1;

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
}