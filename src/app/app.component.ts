import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { BookModel, Category, IbookToBuy } from './models/book.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('appTitle', { static: true }) title!: ElementRef;

    book: BookModel = {
        id: Date.now(),
        name: 'The Hobbit#1',
        description: "The Hobbit is set within Tolkien's fictional universe",
        price: 23.99,
        category: Category.Fantasy,
        createDate: Date.now(),
        isAvailable: true,
    };

    books: BookModel[] = [
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
    booksToBuy: IbookToBuy[] = [];

    ngOnInit() {
        console.log('init');
    }

    ngAfterViewInit(): void {
        this.title.nativeElement.textContent = 'Book Shop';
    }

    buyItem(book: BookModel) {
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
            const bookToBuy: IbookToBuy = {
                name,
                price: 0,
                id,
                booksInCart: 1,
            };
            this.booksToBuy = [...this.booksToBuy, bookToBuy];
        }
    }

    increaseBuyCount(id: number): void {
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

    decreaseBuyCount(id: number): void {
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

    deleteBuyBook(id: number): void {
        this.booksToBuy = this.booksToBuy.filter((book) => book.id !== id);
    }
}
