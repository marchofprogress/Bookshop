import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-running-title-filter",
  templateUrl: "./running-title-filter.component.html",
  styleUrls: ["./running-title-filter.component.css"]
})
export class RunningTitleFilterComponent implements OnInit {

  // event for emit the titles we search for
  @Output() searchedTitleEvent =  new EventEmitter<HTMLInputElement>();

  constructor() {}

  ngOnInit() {
    // setting const input to the value of the #input1 reference and emitting to parent this value
    const input: HTMLInputElement = document.querySelector("#input1");
    this.searchedTitleEvent.emit(input);
  }
}
