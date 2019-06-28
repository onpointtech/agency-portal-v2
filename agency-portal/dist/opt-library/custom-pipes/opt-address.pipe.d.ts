import { PipeTransform } from "@angular/core";
import { Address } from 'projects/opt-library/src/service-objects/address';
export declare class OptAddressPipe implements PipeTransform {
    transform(address: Address[]): string;
}
