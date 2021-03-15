import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(books: any, sortParam = 'name', sortFlag = 'desc'): unknown {
        return sortFlag === 'asc'
            ? books.sort((a, b) => a[sortParam] > b[sortParam])
            : books.sort((a, b) => b[sortParam] > a[sortParam]);
    }
}
