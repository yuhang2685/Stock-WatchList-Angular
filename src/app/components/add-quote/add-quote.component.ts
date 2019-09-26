import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  @Output() addSymbol: EventEmitter<any> = new EventEmitter();

  symbol:string;

  constructor() { }

  ngOnInit() {
  }

  // addSymbol will be emitted to parent component which includes it.
  onSubmit(){
    this.addSymbol.emit(this.symbol);
  }
}
