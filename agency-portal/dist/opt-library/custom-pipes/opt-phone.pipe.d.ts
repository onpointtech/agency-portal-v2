import { PipeTransform } from "@angular/core";
import { MaskPipe } from 'ngx-mask';
export declare class OptPhonePipe implements PipeTransform {
    private maskPipe;
    constructor(maskPipe: MaskPipe);
    transform(mobilePhone: string): string;
}
