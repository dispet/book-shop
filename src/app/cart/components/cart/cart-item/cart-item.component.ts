import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';

import { IBookToBuy } from '../../../../shared/models/cart.model';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
    @Input() cartItem: IBookToBuy;
    @Output() increaseQuantity = new EventEmitter<number>();
    @Output() decreaseQuantity = new EventEmitter<number>();
    @Output() removeBook = new EventEmitter<number>();

    constructor() {
        this.cartItem = {
            name: '',
            price: 0,
            id: 1,
            booksInCart: 1,
        };
    }

    onIncreaseBuyCount(id: number): void {
        this.increaseQuantity.emit(id);
    }

    onDecreaseBuyCount(id: number): void {
        this.decreaseQuantity.emit(id);
    }

    onRemove(id: number): void {
        this.removeBook.emit(id);
    }

    ngOnInit(): void {
        console.log('ngOnInit', this.cartItem);
    }
}
