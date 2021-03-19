import { Injectable } from '@angular/core';

import { IBook } from '../../shared/models';
import { mockBooks } from './mockBooks';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const books: Array<IBook> = mockBooks;

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    booksUrl = 'http://localhost:3001/books';

    constructor(private http: HttpClient) {}

    getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>(this.booksUrl);
    }

    getBook(id: Number): Observable<IBook> {
        return this.http.get<IBook>(`${this.booksUrl}/${id}`);
    }
}
