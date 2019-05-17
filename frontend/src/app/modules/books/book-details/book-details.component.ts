import {Component, OnDestroy, OnInit} from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Book } from 'src/app/shared/models/book.model';
import { ShoppingCartService } from 'src/app/modules/books/book-cart/shopping-cart.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: any = {};
  id: string;
  bookSub: Subscription;
  isLoading = false;

  constructor(private booksService: BooksService, private cartService: ShoppingCartService, private route: ActivatedRoute) { }

  ngOnInit() {
    // request books by id in route.params property
  this.bookSub = this.route.params
  .pipe(
    tap( () => this.isLoading = true),
    switchMap((params: Params) => this.booksService.getBookById(params.id))
  )
    .subscribe(
      bookData => {
          this.book = bookData.books[0];
          console.log(this.book);
          if (this.book.thumbnail) {
            this.isLoading = false;
          }
        });
    }

  ngOnDestroy(): void {
    this.bookSub.unsubscribe();
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

}
