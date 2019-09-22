import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlistComponent } from './components/watchlist/watchlist.component'; 
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  // The root path should leave it ''
  { path: '', component: WatchlistComponent },
  { path: 'about', component: AboutComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
