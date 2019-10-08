import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// HttpHeaders is for contents of type JSON
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Quote } from '../models/Quote';
import { UserSymbol } from '../models/UserSymbol';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})


export class QuotesService {

  baseUrl: string = "http://127.0.0.1:8301/rest/stock/";
  userName: string = "YUHANG";

  constructor(private http:HttpClient) { }

  getQuotes(): Observable<Quote[]> {
      return this.http.get<Quote[]>(`${this.baseUrl}${this.userName}`);
  }

  
  deleteSymbol(quote: Quote):Observable<any> {    

    let deleteSymbolUrl: string = this.baseUrl + this.userName + "/" + quote.symbol;
    return this.http.delete<void>(deleteSymbolUrl, httpOptions);
  }


  addSymbol(symbol:string):Observable<any>{

    let addSymbolUrl: string = this.baseUrl + "add";    
    let userSymbol: UserSymbol = new UserSymbol(this.userName, symbol);    

    return this.http.post<void>(addSymbolUrl, userSymbol, httpOptions);
  }
  
}
