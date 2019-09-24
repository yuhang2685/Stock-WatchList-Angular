import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from 'src/app/models/Quote';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {

  // Accept data from watchlist.component.html 
  // where <app-quote-item ... [quote]="quote"> is used.
  @Input() quote: Quote;
  // Output data to watchlist.component.html by EventEmitter :
  @Output() deleteQuote: EventEmitter<Quote> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(quote){
    this.deleteQuote.emit(quote);
  }
}
