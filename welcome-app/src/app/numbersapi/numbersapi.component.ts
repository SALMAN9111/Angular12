import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NumberApiService } from './numbersapiService';

@Component({
  selector: 'app-numbersapi',
  templateUrl: './numbersapi.component.html',
  styleUrls: ['./numbersapi.component.css']
})

export class NumbersapiComponent implements OnInit {
  time: any 
  factData: any
  number: any

  constructor(private numberService: NumberApiService) {
    this.time = moment().format('dddd ,MMMM Do YYYY,H:mm:ss a')
    this.factData = ""
  }

  handleGetData(val: any) {
    this.time = moment().format('dddd ,MMMM Do YYYY,H:mm:ss a');
    this.number = val;
    this.numberService.getData(this.number)
      .subscribe((data) => {
        this.factData = data.text + this.time
        console.log(this.factData);

      })
  }

  ngOnInit(): void {
  }

}

