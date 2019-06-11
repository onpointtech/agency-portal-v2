import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Address } from '../service-objects/address';

@Pipe({name: 'addressFormat'})
export class AddressFormatPipe implements PipeTransform {
    transform(address: Address[]): string {
        let newAddress: string = "";

        for(var count = 0; count < Object.keys(address).length; count++){
            newAddress += address[count].addressLine1;

            if(address[count].addressLine2 != null) {
                newAddress += ", ";
                newAddress += address[count].addressLine2;
            }

            newAddress = newAddress + ", " + address[count].city + ", " + address[count].state + ", " + address[count].zipCode;
    
            if(address[count].zipExt != null) {
                newAddress += "-";
                newAddress += address[count].zipExt;
            }

            newAddress += "\n";
        }
        return newAddress;
    }
}