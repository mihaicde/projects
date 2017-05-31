import { QuotesPage } from './../quotes-page/quotes-page';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library-page',
  templateUrl: 'library-page.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: {
    category: string, 
    quotes: Quote[], 
    icon: string
  }[];
  quotesPage = QuotesPage;

  ngOnInit(){
    this.quoteCollection= quotes;
  }

}
