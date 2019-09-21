import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/Quote';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  quoteList: Quote[];

  constructor() { }

  ngOnInit() {
    this.quoteList = [
      {
        id:     1,
        symbol: 'MSFT',
        price:  138.25,
        open:   141.01,
        high:   141.65,
        low:    138.25,
        volumn: 32979846,
        change: -1.16
      },
      {
        id:     2,
        symbol: 'GOOG',
        price:  1229.93,
        open:   1233.12,
        high:   1243.27,
        low:    1223.08,
        volumn: 1573080,
        change: -0.7
      },
      {
        id:     3,
        symbol: 'AAPL',
        price:  217.73,
        open:   221.38,
        high:   222.56,
        low:    217.48,
        volumn: 32105176,
        change: -1.46
      },
      {
        id:     4,
        symbol: 'AMZN',
        price:  1794.16,
        open:   1821.71,
        high:   1830.63,
        low:    1781.00,
        volumn: 4324478,
        change: -1.5
      }
    ]
  }

}
