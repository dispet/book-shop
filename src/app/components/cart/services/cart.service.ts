import { Injectable } from '@angular/core';

import { IBook } from '../../../models/book.model';
import { IBookToBuy } from '../../../models/cart.model';

@Injectable()
export class CartService {
    cartProduct: Array<IBookToBuy> = [];
    totalQuantity: number;
    totalSum: number;

    getCart() {
        return this.cartProduct;
    }

    findBookById(id: number) {
        return this.cartProduct.findIndex((item) => {
            return item.id === id;
        });
    }

    addBook(book: IBook) {
        const { name, price, id } = book;
        const existedBookIdx = this.findBookById(id);
        if (existedBookIdx !== -1) {
            this.cartProduct[existedBookIdx] = {
                ...this.cartProduct[existedBookIdx],
                booksInCart: this.cartProduct[existedBookIdx].booksInCart + 1,
            };
        } else {
            const bookToBuy: IBookToBuy = {
                name,
                id,
                price,
                booksInCart: 1,
            };
            this.cartProduct.push(bookToBuy);
        }
        this.updateCartData();
    }

    removeBook(id: number): void {
        const existedBookIdx = this.findBookById(id);
        this.cartProduct.splice(existedBookIdx, 1);
    }

    increaseQuantity(id: number): void {
        const existedBookIdx = this.findBookById(id);
        this.cartProduct[existedBookIdx] = {
            ...this.cartProduct[existedBookIdx],
            booksInCart: this.cartProduct[existedBookIdx].booksInCart + 1,
        };
        this.updateCartData();
    }

    decreaseQuantity(id: number): void {
        const existedBookIdx = this.findBookById(id);
        this.cartProduct[existedBookIdx] = {
            ...this.cartProduct[existedBookIdx],
            booksInCart: this.cartProduct[existedBookIdx].booksInCart - 1,
        };
        this.updateCartData();
        console.log('removeBook', id);
    }

    removeAllBooks() {
        this.cartProduct = [];
    }

    updateCartData() {
        this.totalSum = this.cartProduct.reduce(
            (acc, cartItem) => acc + cartItem.price,
            0
        );
        this.totalQuantity = this.cartProduct.length;
    }
}
