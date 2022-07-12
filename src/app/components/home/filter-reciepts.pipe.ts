import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from 'src/app/interfaces/food-category';
@Pipe({ name: 'filterRecieptsPipe' })
export class filterRecieptsPipe implements PipeTransform {
  // Takes Original Data Array, Filter It , and return a new filterd Array
  transform(item: {}, originalData: Recipe[], searchText: string): any {
    return originalData.filter(function (item: { title: string; }) {
      return item.title.toLowerCase().includes(searchText.toLowerCase())
    });
  }
}