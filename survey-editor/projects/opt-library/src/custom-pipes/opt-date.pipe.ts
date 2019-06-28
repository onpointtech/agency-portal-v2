import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common';

@Pipe({name: 'optDatePipe'})
export class OptDatePipe implements PipeTransform {

    constructor(private datePipe: DatePipe) {}

    transform(date: string): string {
        let newDate: string="";
        newDate = this.datePipe.transform(date, 'MM/dd/yyyy');
        return newDate;
    }
}