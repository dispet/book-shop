import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IBookToBuy } from '../../models/cart.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    @Input() cartItems: IBookToBuy[];
    @Output() increaseBuyCount = new EventEmitter<number>();
    @Output() decreaseBuyCount = new EventEmitter<number>();
    @Output() deleteBuyBook = new EventEmitter<number>();

    constructor() {
        this.cartItems = [];
    }

    onIncreaseBuyCount(id: number): void {
        this.increaseBuyCount.emit(id);
    }

    onDecreaseBuyCount(id: number): void {
        this.decreaseBuyCount.emit(id);
    }

    onDeleteBuyBook(id: number): void {
        this.deleteBuyBook.emit(id);
    }

    ngOnInit(): void {
        console.log('init');
    }
}
