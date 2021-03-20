import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { BooksService } from '../../../../services/books.service';
import { IBook } from '../../../../../shared/models';
import { DEFAULT_BOOK } from '../../../../../core';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
    book: IBook;
    private ngUnsubscribe: Subject<any> = new Subject();

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private bookService: BooksService
    ) {
        this.book = DEFAULT_BOOK;
    }

    ngOnInit(): any {
        this.getBook();
    }
    getBook(): any {
        if (this.route.snapshot.paramMap.get('id')) {
            const id = +this.route.snapshot.paramMap.get('id');

            this.bookService
                .getBook(id)
                .subscribe((book) => (this.book = book));
        }
    }

    ngOnDestroy(): any {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    goBack(): void {
        this.location.back();
    }
}
