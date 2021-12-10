import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { DataService } from './dataService';

@Component({
  selector: 'app-datacomponent',
  templateUrl: './datacomponent.component.html',
  styleUrls: ['./datacomponent.component.css']
})

export class DatacomponentComponent implements OnInit {
  data : any
  constructor(private dataService: DataService) {
   }

  handleData1Click() {
    console.log(this.dataService.getData1());
    console.log("End of data1 click")
  }

  handleData2Click() {
    this.dataService.getData2()
      .pipe(filter(x=>x>25),map(x=> x/10 ))
      .subscribe(function (data) {
        console.log(data)
      })
    console.log("End of data2 click");
  }

  handleData3Click(){
    this.dataService.getData3()
    .subscribe( (jsonData) =>{
      this.data = jsonData
      console.log(jsonData.text)
      // this.result = JSON.parse();
    })
      
  }

  ngOnInit(): void {
  }
}
