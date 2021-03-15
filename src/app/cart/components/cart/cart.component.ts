import { Component, OnInit } from '@angular/core';

import { IBookToBuy } from '../../../shared/models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    cartItems: IBookToBuy[];
    sortFlag: string;
    sortParam: string;
    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartItems = this.cartService.getCart();
    }

    onRemoveBook(index) {
        return this.cartService.removeBook(index);
    }

    onIncreaseQuantity(index) {
        return this.cartService.increaseQuantity(index);
    }

    onDecreaseQuantity(index) {
        return this.cartService.decreaseQuantity(index);
    }

    onClearCart() {
        this.cartService.removeAllBooks();
        this.cartItems = this.cartService.getCart();
    }
}
