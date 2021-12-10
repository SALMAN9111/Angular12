import { Injectable } from "@angular/core";
import { asyncScheduler, Observable, Subscriber } from "rxjs";
import { observeOn } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    url = "http://numbersapi.com/30?json";

    constructor(private httpClient: HttpClient) {
        console.log("From Service")
    }

    HttpHeaders = {
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        })
    }

    getData1(): Number {
        return Math.random() * 10;
    }

    getData2(): Observable<number> {
        let publisher = new Observable<number>(function (subscriber) {
            subscriber.next(10);
            subscriber.next(20);
            subscriber.next(30);
            subscriber.next(40);
            subscriber.complete();
        }).pipe(
            observeOn(asyncScheduler)
        );
        return publisher;
    }

    getData3(): Observable<any> {
        return this.httpClient.get<any>(this.url);
    }


    // .subscriber(function (response: { text: any; }){
    // return response.text;
    // }) 

    // .subscribe(Function(jsonResp){
    // console.log(jsonResp);
    // })

    // return this.httpClient;


}
