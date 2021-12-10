import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { springService } from './spring-service';
@Component({
  selector: 'app-spring-api',
  templateUrl: './spring-api.component.html',
  styleUrls: ['./spring-api.component.css']
})
export class SpringApiComponent implements OnInit {

  data1: any

  constructor(private http: HttpClient, private service: springService) {
    this.data1 = "";
  }



  getHandler() {
    this.service.get().subscribe((data) => {
      this.data1 = data
      console.log(data)
    })
  }

  postHandler(data: any) {
    console.log(data);
    this.service.post(data).subscribe((info) => {
      console.log(info)
    })
  }

  putHandler() {
    this.service.put().subscribe((data) => {
      this.data1 = data
      console.log(data)
    })
  }



  deleteHandler() {
    this.service.delete().subscribe((data) => {
      this.data1 = data
      console.log(data)

    })
  }

  ngOnInit(): void {
  }
}

