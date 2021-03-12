import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';

import { IBookToBuy } from '../../../../models/cart.model';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
    @Input() cartItem: IBookToBuy;
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

    onIncreaseBuyCount(id: number): void {
        this.increaseBuyCount.emit(id);
    }

    onDecreaseBuyCount(id: number): void {
        this.decreaseBuyCount.emit(id);
    }

    onRemove(id: number): void {
        this.deleteBuyBook.emit(id);
    }

    ngOnInit(): void {
        console.log(this.cartItem);
    }
}
