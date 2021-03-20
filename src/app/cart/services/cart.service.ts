import { Injectable } from '@angular/core';
import { IBook, IBookToBuy } from '../../shared/models';

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
        this.updateCartData();
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
        if (this.cartProduct[existedBookIdx].booksInCart) {
            this.cartProduct[existedBookIdx] = {
                ...this.cartProduct[existedBookIdx],
                booksInCart: this.cartProduct[existedBookIdx].booksInCart - 1,
            };
        }
        this.updateCartData();
        console.log('removeBook', id);
    }

    removeAllBooks() {
        return (this.cartProduct = this.cartProduct.filter(
            (it: IBookToBuy) => it.id === 0
        ));
    }

    updateCartData() {
        this.totalSum = 0;
        this.totalQuantity = 0;
        this.cartProduct.forEach((cartItem) => {
            this.totalSum += cartItem.price * cartItem.booksInCart;
            this.totalQuantity += cartItem.booksInCart;
        });
    }
}
