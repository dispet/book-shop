import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { BookModel, Category } from './models/book.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
    // title = 'bookShop';
    @ViewChild('appTitle', { static: true }) title!: ElementRef;

    book: BookModel = {
        name: 'The Hobbit',
        description:
            "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory",
        price: 23.99,
        category: Category.Fantasy,
        createDate: Date.now(),
        isAvailable: true,
    };

    cartItems!: BookModel[];

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.cartItems = [];
    }

    buyItem(book: BookModel): void {
        this.cartItems.push(book);
    }

    // tslint:disable-next-line:typedef
    remove(name) {
        this.cartItems = this.cartItems.filter(
            (book: BookModel) => name !== book.name
        );
    }

    ngAfterViewInit(): void {
        this.title.nativeElement.textContent = 'Book Shop';
    }
}
