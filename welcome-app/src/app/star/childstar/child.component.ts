import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'childstar-app',
  templateUrl: './childstar.component.html',

})
export class ChildStarComponent implements OnInit {

  @Input()
  rating: number;

  @Output()
  hoveOverRating: EventEmitter<string>;

  constructor() {

    this.rating = 0;
    this.hoveOverRating = new EventEmitter<string>();
  }


  showRating() {
    this.hoveOverRating.emit('you have got ' + this.rating + ' star ratings');
  }

  hideRating() {
    this.hoveOverRating.emit("Hover again");

  }

  ngOnInit(): void {
  }

}