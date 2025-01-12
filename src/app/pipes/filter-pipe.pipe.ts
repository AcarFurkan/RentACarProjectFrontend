import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/cardetail';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter((c : CarDetail) => c.description.toLocaleLowerCase().indexOf(filterText)!==-1) : value;
  }

}
