import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/Quote';

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

  ngOnInit() {
    this.quotesService.getQuotes().subscribe(quoteList => 
      this.quoteList = quoteList);
  }

  deleteQuote(quote:Quote){
    // Delete the stock quote from UI
    this.quoteList = this.quoteList.filter(t => t.id !== quote.id);
    // Delete the stock symbol from the user watchlist 
    // which is stored in the external webservice.
    this.quotesService.deleteSymbol(quote).subscribe();
  }

}
