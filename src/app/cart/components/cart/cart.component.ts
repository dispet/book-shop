import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BookModel, IbookToBuy } from '../../../models/book.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    @Input() cartItems: IbookToBuy[];
    @Output() increaseBuyCount = new EventEmitter<number>();
    @Output() decreaseBuyCount = new EventEmitter<number>();
    @Output() deleteBuyBook = new EventEmitter<number>();
    constructor() {
        this.cartItems = [];
    }

    onIncr(id: number) {
        this.increaseBuyCount.emit(id);
    }
    onDcr(id: number) {
        this.decreaseBuyCount.emit(id);
    }

    onDel(id: number) {
        this.deleteBuyBook.emit(id);
    }

    ngOnInit(): void {
        console.log('init');
    }
}
