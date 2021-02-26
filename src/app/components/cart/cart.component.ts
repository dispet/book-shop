import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    @Input() cartItems!: BookModel[];
    @Output() removeItemEvent = new EventEmitter<number>();

    constructor() {}

    // tslint:disable-next-line:typedef
    remove(name) {
        this.removeItemEvent.emit(name);
    }

    ngOnInit(): void {
        console.log('init');
    }
}
