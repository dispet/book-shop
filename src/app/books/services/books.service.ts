import { Injectable } from '@angular/core';

import { IBook } from '../../models/book.model';
import { mockBooks } from './mockBooks';
const books: Array<IBook> = mockBooks;

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    getBooks(): IBook[] {
        return books;
    }
}
