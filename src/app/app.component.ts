import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';

import { IBook } from './models/book.model';
import { Category } from './core/cosnstants/category';
import { IBookToBuy } from './models/cart.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('appTitle', { static: true }) title!: ElementRef;

    book: IBook = {
        id: Date.now(),
        name: 'The Hobbit#1',
        description: "The Hobbit is set within Tolkien's fictional universe",
        price: 23.99,
        category: Category.Fantasy,
        createDate: Date.now(),
        isAvailable: true,
    };

    books: IBook[] = [
        {
            id: 1,
            name: 'The Hobbit#1',
            description:
                "The Hobbit is set within Tolkien's fictional universe",
            price: 23.99,
            category: Category.Fantasy,
            createDate: Date.now(),
            isAvailable: true,
        },
        {
            id: 2,
            name: 'The Hobbit#2',
            description:
                "The Hobbit is set within Tolkien's fictional universe",
            price: 23.99,
            category: Category.Fantasy,
            createDate: Date.now(),
            isAvailable: false,
        },
        {
            id: 3,
            name: 'The Hobbit#3',
            description:
                "The Hobbit is set within Tolkien's fictional universe",
            price: 23.99,
            category: Category.Fantasy,
            createDate: Date.now(),
            isAvailable: true,
        },
    ];
    booksToBuy: Array<IBookToBuy> = [];

    ngOnInit(): void {
        console.log('init');
    }

    ngAfterViewInit(): void {
        this.title.nativeElement.textContent = 'Book Shop';
    }

    onBuyItem(book: IBook): void {
        const { name, id } = book;
        const existedBookIdx = this.booksToBuy.findIndex((item) => {
            return item.id === id;
        });
        if (existedBookIdx !== -1) {
            this.booksToBuy[existedBookIdx] = {
                ...this.booksToBuy[existedBookIdx],
                booksInCart: this.booksToBuy[existedBookIdx].booksInCart + 1,
            };
        } else {
            const bookToBuy: IBookToBuy = {
                name,
                price: 0,
                id,
                booksInCart: 1,
            };
            this.booksToBuy = [...this.booksToBuy, bookToBuy];
        }
    }

    onIncreaseBuyCount(id: number): void {
        this.booksToBuy = this.booksToBuy.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    booksInCart: book.booksInCart + 1,
                };
            }
            return book;
        });
    }

    onDecreaseBuyCount(id: number): void {
        this.booksToBuy = this.booksToBuy.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    booksInCart: book.booksInCart - 1,
                };
            }
            return book;
        });
    }

    onDeleteBuyBook(id: number): void {
        this.booksToBuy = this.booksToBuy.filter((book) => book.id !== id);
    }
}
