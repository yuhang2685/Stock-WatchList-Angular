import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { QuoteItemComponent } from './components/quote-item/quote-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    QuoteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
