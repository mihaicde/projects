import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites-page',
  templateUrl: 'favorites-page.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor (private quotesService: QuotesService){

  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

}
