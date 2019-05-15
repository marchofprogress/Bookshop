import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../../shared/models/book.model';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

    // getting book object to show
    @Input() book: Book;
    // event for emit the book we add to cart
    @Output() addToCartEvent = new EventEmitter<Book>();

    constructor() {
    }

    ngOnInit() {
    }

    // emit book to parent
    addToCart(book: Book) {
        this.addToCartEvent.emit(book);

    }

}
