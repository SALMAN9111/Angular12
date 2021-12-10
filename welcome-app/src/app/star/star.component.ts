import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-starrating',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarratingComponent implements OnInit {


  constructor() {

  }

  ratingHandler(message: String) {
    console.log(message);
  }

  ngOnInit(): void {
  }

}