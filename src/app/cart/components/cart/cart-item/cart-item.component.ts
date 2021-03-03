import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import { BookModel, IbookToBuy } from '../../../../models/book.model';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
    @Input() cartItem: IbookToBuy;
    @Output() increaseBuyCount = new EventEmitter<number>();
    @Output() decreaseBuyCount = new EventEmitter<number>();
    @Output() deleteBuyBook = new EventEmitter<number>();

    constructor() {
        this.cartItem = {
            name: '',
            price: 0,
            id: 1,
            booksInCart: 1,
        };
    }

    onIncr(id: number) {
        this.increaseBuyCount.emit(id);
    }
    onDcr(id: number) {
        this.decreaseBuyCount.emit(id);
    }
    onRemove(id: number) {
        this.deleteBuyBook.emit(id);
    }

    ngOnInit(): void {
        console.log(this.cartItem);
    }
}
