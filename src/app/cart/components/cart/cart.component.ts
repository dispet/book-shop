import { Component, OnInit } from '@angular/core';

import { IBookToBuy } from '../../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    cartItems: IBookToBuy[];
    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartItems = this.cartService.getCart();
    }

    removeBook(index) {
        return this.cartService.removeBook(index);
    }

    increaseQuantity(index) {
        return this.cartService.increaseQuantity(index);
    }

    decreaseQuantity(index) {
        return this.cartService.decreaseQuantity(index);
    }

    onClearCart() {
        this.cartService.removeAllBooks();
        this.cartItems = this.cartService.getCart();
    }
}
