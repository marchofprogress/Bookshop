import {Injectable} from '@angular/core';
import {share} from 'rxjs/operators';
import {Book} from 'src/app/shared/models/book.model';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    private cart: Book[] = [];
    private cartUpdated = new Subject<{ cart: Book[] }>();

    constructor() {
    }

    // returning cartUpdated Subject as Observable
    getCartUpdateListener() {
        return this.cartUpdated.asObservable().pipe(share());
    }

    addToCart(element: Book) {

        if (localStorage.getItem('cart') === null) {
            this.cart.push(element);
            localStorage.setItem('cart', JSON.stringify(this.cart));
            this.cartUpdated.next({
                cart: [...this.cart]
            });
        } else {
            this.cart = JSON.parse(localStorage.getItem('cart'));
            this.cart = [...this.cart, element];
            localStorage.setItem('cart', JSON.stringify(this.cart));
            this.cartUpdated.next({
                cart: [...this.cart]
            });
        }
    }

    deleteFromCart(bookId: string) {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        const updatedCart = this.cart.filter(book => book.id !== bookId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        this.cartUpdated.next({
            cart: [...updatedCart]
        });
    }

    // get cart items from LS and emit to cartUpdated Subject
    getCart() {

        if (localStorage.getItem('cart') !== null) {
            this.cart = JSON.parse(localStorage.getItem('cart'));
            this.cartUpdated.next({
                cart: [...this.cart]
            });
        }

    }
}
