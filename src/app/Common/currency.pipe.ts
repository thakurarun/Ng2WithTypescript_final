import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyFormat'
})

export class CurrencyFormatPipe implements PipeTransform {
    transform(value: number, args: any[]): string {
        let num = value + ' INR';
        return num;
    }
}