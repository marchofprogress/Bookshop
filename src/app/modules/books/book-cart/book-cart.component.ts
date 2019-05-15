import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Book} from '../../../shared/models/book.model';
import {ShoppingCartService} from 'src/app/modules/books/book-cart/shopping-cart.service';

@Component({
    selector: 'app-book-cart',
    templateUrl: './book-cart.component.html',
    styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit, OnDestroy {
    private cartSub: Subscription;
    cart: Book[] = [];
    cartDetails = false;

    constructor(public cartService: ShoppingCartService) {
    }

    ngOnInit(): void {
        // subscribe to subject and getting cart items
        this.cartSub = this.cartService
            .getCartUpdateListener()
            .subscribe(bookData => {
                this.cart = bookData.cart;
            });
        this.cartService.getCart();
    }

    // deleting book from cart
    onItemDelete(bookId): void {
        console.log('delete');
        this.cartService.deleteFromCart(bookId);
    }

    // show/hide cart content based on mouse position
    mouseEnter(): void {
        this.cartDetails = true;
    }

    mouseLeave(): void {
        this.cartDetails = false;
    }

    // when adding to cart no ngFor tree re-render occurs only adds new element
    trackByFn(index, item): number {
        return item.id; // unique id corresponding to the item
    }

    // unsubscribing from subject when components destroyed
    ngOnDestroy(): void {
        this.cartSub.unsubscribe();
    }
}
