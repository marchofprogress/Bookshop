import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {  merge, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Book } from "../../shared/models/book.model";

@Injectable({
  providedIn: "root"
})
export class BooksService {

  constructor(private http: HttpClient) {}

  // setting book objects based on saleability
  getBookData(book):Book {

    if (book.saleInfo.saleability == "FOR_SALE") {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        thumbnail:  book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null ,
        price: book.saleInfo.listPrice.amount,
        currency: book.saleInfo.listPrice.currencyCode
      };
    } else {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null ,
        price: null,
        currency: null
      };
    }
  }

  getBookByTitle(title: string) {
    const queryParams = `?q=${title}`;
    console.log(queryParams);
    return this.http
      .get<{ items: any }>(
        "https://www.googleapis.com/books/v1/volumes" + queryParams
      )
      .pipe(
        map(bookData => {
          console.log(bookData);
          if(bookData.items){
            return {
              books: bookData.items.map(book => {
                return this.getBookData(book);
              })
            };
          }
          else{return;}

        })
      );
  }

  // getting books by it's id
  getBookById(bookId: string) {
    const queryParams = `?q=id:${bookId}`;
    console.log(queryParams);
    // returning observable
    return this.http
      .get<{ items: any }>(
        "https://www.googleapis.com/books/v1/volumes" + queryParams
      )
      .pipe(
        map(bookData => {
          return {
            books: bookData.items.map(book => {
              return this.getBookData(book);
            })
          };
        })
      );
  }

  //return an array of observables
  getRequestBuilder(multibooks: string[]): Observable<any>[] {
    const requests = [];
    multibooks.forEach(title => {
      const queryParams = `?q=${title}`;
      requests.push(
        this.http.get<{ items: any }>(
          "https://www.googleapis.com/books/v1/volumes" + queryParams
        )
      );
    });
    return requests;
  }

  // emits the books to booksUpdated Subject
  getMultipleBooks(multibooks: string[]) {
    //build an array of observables(get requests) based on the titles of the books
    const requestList: Observable<{ items: any }>[] = this.getRequestBuilder(
      multibooks
    );
    console.log(requestList);
    // turn multiple observable (get requests) into a single observable
    return merge(...requestList).pipe(
      map(bookData => {
        console.log(bookData);
        return {
          books: bookData.items.map(book => {
            return this.getBookData(book);
          })
        };
      })
    );
  }
}
