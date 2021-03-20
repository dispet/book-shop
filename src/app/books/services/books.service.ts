import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { IBook } from '../../shared/models';
import { mockBooks } from './mockBooks';
import { API_URL } from '../../core';

const books: Array<IBook> = mockBooks;

@Injectable()
export class BooksService {
    booksUrl = API_URL;

    constructor(private http: HttpClient) {}

    getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>(this.booksUrl);
    }

    getBook(id: Number): Observable<IBook> {
        return this.http.get<IBook>(`${this.booksUrl}/${id}`);
    }
}
