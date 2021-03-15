import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    Input,
    ChangeDetectionStrategy,
} from '@angular/core';

import { IBook } from '../../../../shared/models';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
    @Input() book: IBook | null = null;
    @Output() buyItemEvent = new EventEmitter<IBook>();

    onBuy(book: IBook): void {
        this.buyItemEvent.emit(book);
    }

    ngOnInit(): void {
        console.log('init');
    }
}
