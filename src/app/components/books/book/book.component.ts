import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    Input,
    ChangeDetectionStrategy,
} from '@angular/core';

import { BookModel } from '../../../models/book.model';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
    @Input() book: BookModel | null = null;
    @Output() buyItemEvent = new EventEmitter<BookModel>();

    constructor() {}

    onBuy(book: BookModel): void {
        this.buyItemEvent.emit(book);
    }

    ngOnInit(): void {
        console.log('init');
    }
}
