import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class springService {
    student:Array<String> | undefined

    url = "http://localhost:8111/api/v1/student";

    constructor(private httpClient: HttpClient) {
        console.log("From Service")
    }

    HttpHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'text/plain'
        })
    }
    

    get(): Observable<any> {
        return this.httpClient.get(this.url+"/allstudents",{responseType:'text'})
    }

    post(data :any): Observable<any> {
        console.log("Inside Service")
        return this.httpClient.post(this.url+"/addstudent",data,{responseType : 'text'})
    }


    put(): Observable<any> {
        return this.httpClient.put(this.url,null,{responseType:'text'})    
    }

    
    delete(): Observable<any> {
        return this.httpClient.delete(this.url,{responseType:'text'})
    }
}