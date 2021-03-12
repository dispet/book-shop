import { Pipe, PipeTransform } from '@angular/core';
import { IBookToBuy } from '../models';

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(books: any, sortParam = 'name', sortFlag = 'desc'): IBookToBuy[] {
        return sortFlag === 'asc'
            ? books.sort((a, b) => a[sortParam] > b[sortParam])
            : books.sort((a, b) => b[sortParam] > a[sortParam]);
    }
}
