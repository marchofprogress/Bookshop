import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../../../books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-title-filter',
  templateUrl: './simple-title-filter.component.html',
  styleUrls: ['./simple-title-filter.component.css']
})
export class SimpleTitleFilterComponent implements OnInit {

  // searched titles
  searchedTitle: string;
  // event for emit the titles we search for
  @Output() searchedTitleEvent =  new EventEmitter<string>();

  constructor(public booksService:BooksService) { }

  ngOnInit() {
  }

  // emitting the input value to parent
  search(form: NgForm){
    if(form.invalid){
      return;
    }
    this.searchedTitle = form.value.title;
    this.searchedTitleEvent.emit(this.searchedTitle);
  }

}
