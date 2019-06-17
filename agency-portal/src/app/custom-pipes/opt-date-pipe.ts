import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { DatePipe } from '@angular/common';

@Pipe({name: 'optDatePipe'})
export class OPTDatePipe implements PipeTransform {

    constructor(private datePipe: DatePipe) {}

    transform(date: string): string {
        let newDate: string="";
        newDate = this.datePipe.transform(date, 'MM/dd/yyyy');
        return newDate;
    }
}