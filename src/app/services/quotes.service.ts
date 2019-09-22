import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// HttpHeaders is for contents of type JSON
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Quote } from '../models/Quote';


@Injectable({
  providedIn: 'root'
})

export class QuotesService {

  quotesUrl: string = "http://127.0.0.1:8301/rest/stock/";
  userName: string = "JINFANG";

  constructor(private http:HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(`${this.quotesUrl}${this.userName}`);
  }
}
