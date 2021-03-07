import { CartService } from '../../../cart/services/cart.service';
import { BooksService } from '../../services/books.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBook } from '../../../shared/models/book.model';

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
        this.books = this.booksService.getBooks();
    }

    ngOnChange(): void {
        console.log('ngOnChange', this.books);
    }
}
