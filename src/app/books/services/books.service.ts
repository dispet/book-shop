import { Injectable } from '@angular/core';

import { BookModel } from '../../../models/book.model';

const books: BookModel[] = [];

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    constructor() {}

    getBooks(): BookModel[] {
        return books;
    }
}
