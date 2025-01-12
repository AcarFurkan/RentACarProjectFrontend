import { Pipe, PipeTransform } from '@angular/core';
import { Rental } from '../models/rental';

@Pipe({
  name: 'filterPipeRental'
})
export class FilterPipeRentalPipe implements PipeTransform {

  transform(value: Rental[], filterTextRental: string): Rental[] {
    filterTextRental = filterTextRental ? filterTextRental.toLocaleLowerCase() : ""
    return filterTextRental ? value.filter((r : Rental) => r.brandName.toLocaleLowerCase().indexOf(filterTextRental)!==-1) : value;
  }

}
