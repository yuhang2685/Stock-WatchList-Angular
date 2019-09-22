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
    this.quoteList = this.quotesService.getQuotes();
  }

}
