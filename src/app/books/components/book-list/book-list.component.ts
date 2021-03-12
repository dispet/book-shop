import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartService } from '../../../cart/services/cart.service';
import { BooksService } from '../../services/books.service';
import { IBook } from '../../../shared/models';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
    books: IBook[];

    constructor(
        private booksService: BooksService,
        private cartService: CartService
    ) {}

    onBuy(book: IBook) {
        this.cartService.addBook(book);
    }

    ngOnInit() {
        this.booksService.getBooks().subscribe((books) => (this.books = books));
    }

    ngOnChange(): void {
        console.log('ngOnChange', this.books);
    }
}
