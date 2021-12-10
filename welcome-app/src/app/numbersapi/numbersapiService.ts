import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class NumberApiService {
    url = "http://numbersapi.com/";

    constructor(private httpClient: HttpClient) {
        console.log("From Service")
    }

    HttpHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getData(val:any): Observable<any> {
        console.log(val);
        return this.httpClient.get<any>(this.url+val+"?json");
    }
}