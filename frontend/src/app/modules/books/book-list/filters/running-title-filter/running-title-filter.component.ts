import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-running-title-filter',
    templateUrl: './running-title-filter.component.html',
    styleUrls: ['./running-title-filter.component.css']
})
export class RunningTitleFilterComponent implements OnInit {
    @ViewChild('input') inputElementRef: ElementRef;

    // event for emit the titles we search for
    @Output() searchedTitleEvent = new EventEmitter<HTMLInputElement>();

    constructor() {
    }

    ngOnInit() {
        this.searchedTitleEvent.emit(this.inputElementRef.nativeElement);
    }
}
