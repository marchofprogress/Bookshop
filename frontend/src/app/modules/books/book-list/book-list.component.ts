import {Component, OnDestroy, OnInit} from '@angular/core';

import {BooksService} from '../books.service';

import {fromEvent, Observable, Subject} from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    switchMap,
    takeUntil,
    tap,
    toArray
} from 'rxjs/operators';
import {Book} from '../../../shared/models/book.model';
import {ShoppingCartService} from 'src/app/modules/books/book-cart/shopping-cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  multibooks: string[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  isLoading = false;

  // DI for BooksService
  constructor(
    public booksService: BooksService,
    public cartService: ShoppingCartService
  ) {}

  ngOnInit() {}

  // destroying subs
  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }

  // adding books to cart
  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

  // search by 1 title
  simpleTitleSearch(event: string) {
    this.booksService
      .getBookByTitle(event)
      .pipe(
        tap( () => this.isLoading = true),
        takeUntil(this.destroy$))
      .subscribe(transformedBookData => {
        console.log(transformedBookData);
        this.books = transformedBookData.books;
        this.isLoading = false;
        console.log(this.books);
      });
  }

  // search by more titles with dividing by ;
  multiTitleSearch(event: string) {
    console.log(event);
    this.multibooks = event.split(';');
    this.booksService
      .getMultipleBooks(this.multibooks)
      .pipe(
        tap( () => this.isLoading = true),
        toArray(),
        takeUntil(this.destroy$)
      )
      .subscribe(transformedBookData => {
        console.log(transformedBookData);
        // add the books from returned array to books variable and update booksUpdated Subject
        transformedBookData.forEach(booksArray => {
          console.log(booksArray);
          this.books = booksArray.books.concat(this.books);
        });
        this.isLoading = false;
      });
  }

  // searching without pressing enter
  runningTitleSearch(event: HTMLInputElement) {
      const keypress: Observable<Event> = fromEvent(event, 'keyup');
      const keyValue = keypress.pipe(
      map(pressEvent => (pressEvent.target as HTMLInputElement).value)
    );
    // subscribe to the key pressing observable and calling getBookByTitle method
    // every 0.5s if the value changed
      keyValue
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(keyvalue => keyvalue !== ''),
        tap( () => this.isLoading = true),
        switchMap(title => this.booksService.getBookByTitle(title)),
        takeUntil(this.destroy$)
      )
      .subscribe(transformedBookData => {
        console.log(transformedBookData);
        // add the books from returned array to books variable and update booksUpdated Subject
        if (transformedBookData) {
        this.books = transformedBookData.books;
        }
        this.isLoading = false;
      });
  }
}
