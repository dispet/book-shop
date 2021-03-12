import { Injectable } from '@angular/core';

import { IBook } from '../../models/book.model';

const books: Array<IBook> = [];

@Injectable()
export class BooksService {
    getBooks(): IBook[] {
        return books;
    }
}
