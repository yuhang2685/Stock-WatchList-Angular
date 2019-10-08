import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/Quote';
import { timer } from 'rxjs';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})

export class WatchlistComponent implements OnInit {

  // This field holds the data returned from external webservices.
  quoteList: Quote[];
 
  // After dependency injection, this.quotesService can be used.
  constructor(private quotesService:QuotesService) { }

  // Through HttpService "quotesService", asynchronously by |subscribe|,
  // it obtains quote list from external web service.
  // ISSUE:
  // We might get null stockQuote in the quote list due to the limitation of the market data provider.
  // Instead of breaking down the app (by the display function accessing a null object), 
  // or displaying blank (if we filter away any null stockQuotes),
  // we try to access the null stockQuote in the filter method 
  // and which (I believe) will throw an exception (see console output) and keep the display unchanged 
  // until next quotelist containing non-null quotes arrives and displayed.
  // The elegant way is to EXPLICITLY throw exception for this error but not through the filter method.
  ngOnInit() {

    const source = timer(0, 15000);
    source.subscribe(_ => this.quotesService.getQuotes().subscribe(quoteList => 
      this.quoteList = quoteList.filter(t => t.symbol !== null)));
  }

  deleteQuote(quote:Quote){
    // Delete the stock quote from UI.
    //this.quoteList = this.quoteList.filter(t => t.id !== quote.id);
    this.quoteList = this.quoteList.filter(t => t.symbol !== quote.symbol);
    // Delete the stock symbol from the user watchlist 
    // which is stored in the external webservice.
    this.quotesService.deleteSymbol(quote).subscribe();
  }

  addSymbol(symbol:string) {
    this.quotesService.addSymbol(symbol).subscribe(
      //quote => {this.quoteList.push(quote);});
    );
  }

}
