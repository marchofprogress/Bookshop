import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-multi-title-filter',
  templateUrl: './multi-title-filter.component.html',
  styleUrls: ['./multi-title-filter.component.css']
})
export class MultiTitleFilterComponent implements OnInit {

  // show input field or not
  multibutton = false;
  // searched titles
  searchedTitles: string;

  // event for emit the titles we search for
  @Output() searchedTitleEvent =  new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  // emitting the input value to parent
  multisearch(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.searchedTitles = form.value.title;
    this.searchedTitleEvent.emit(this.searchedTitles);
  }
}
