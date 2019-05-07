import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { BooksService } from "../books.service";
import { Book } from '../../../shared/models/book.model';
import { ShoppingCartService } from 'src/app/modules/books/book-cart/shopping-cart.service';

@Component({
  selector: "app-book-cart",
  templateUrl: "./book-cart.component.html",
  styleUrls: ["./book-cart.component.css"]
})
export class BookCartComponent implements OnInit {
  private cartSub: Subscription;
  cart: Book[] = [];
  cartDetails: boolean = false;

  constructor(public cartService: ShoppingCartService, public bookService: BooksService) {}

  ngOnInit(): void {
    // subscribe to subject and getting cart items
    this.cartSub = this.cartService
      .getCartUpdateListener()
      .subscribe(bookData => {
        console.log(bookData);
        this.cart = bookData.cart;
      });
    this.cartService.getCart();
  }

  // deleting book from cart
  onItemDelete(bookId): void {
    console.log("delete");
    this.cartService.deleteFromCart(bookId);
  }

  //  clicking on a book navigates us to it's deatils page
  onItemClick(id: string): void {
    this.bookService.getBookById(id);
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

  //unsubscribing from subject when components destroyed
  ngOnDestroy(): void {
    this.cartSub.unsubscribe;
  }
}
