import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../../../cart/services/cart.service';
import { BooksService } from '../../services/books.service';
import { IBook } from '../../../shared/models';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit, OnDestroy {
    books: IBook[];
    subscription!: Subscription;
    books$: Observable<IBook[]> = new Observable<IBook[]>();

    constructor(
        private booksService: BooksService,
        private cartService: CartService
    ) {}

    onBuy(book: IBook) {
        this.cartService.addBook(book);
    }

    ngOnInit(): void {
        this.subscription = this.booksService
            .getBooks()
            .subscribe((books) => (this.books = books));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnChange(): void {
        console.log('ngOnChange', this.books);
    }
}
