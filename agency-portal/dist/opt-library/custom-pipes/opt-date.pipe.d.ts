import { PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common';
export declare class OptDatePipe implements PipeTransform {
    private datePipe;
    constructor(datePipe: DatePipe);
    transform(date: string): string;
}
