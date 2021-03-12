import { Injectable } from '@angular/core';

import { IBook } from '../../shared/models';
import { mockBooks } from './mockBooks';
import { of, Observable } from 'rxjs';

const books: Array<IBook> = mockBooks;

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    getBooks(): Observable<IBook[]> {
        return of(mockBooks);
    }

    getBook(id: number): Observable<IBook> {
        return of(books.find((book) => book.id === id));
    }
}
