import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// HttpHeaders is for contents of type JSON
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Quote } from '../models/Quote';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class QuotesService {

  url: string = "http://127.0.0.1:8301/rest/stock/";
  userName: string = "YUHANG";

  constructor(private http:HttpClient) { }

  getQuotes(): Observable<Quote[]> {
      return this.http.get<Quote[]>(`${this.url}${this.userName}`);
  }

  deleteSymbol(quote: Quote):Observable<any> {    
    let deleteUrl: string = this.url + this.userName + "/" + quote.symbol;
    return this.http.delete<void>(deleteUrl, httpOptions);
  }
}
