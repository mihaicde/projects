import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-quotes-page',
  templateUrl: 'quotes-page.html',
})
export class QuotesPage  implements OnInit{

  quoteGroup: {
    category: string, 
    quotes: Quote[], 
    icon: string
  }

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
    ){  }

  ngOnInit(){
    this.quoteGroup=this.navParams.data;
  }
  // ionViewDidLoad(){
  //  this.quoteGroup=this.navParams.data;
  //}

  onAddToFavorite(selectedQuote: Quote){
    const alert=this.alertCtrl.create({
      title:'Add Quote',
      subTitle:'Are you sure?',
      message:'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No',
          role: 'Canceled',
          handler: () =>{
            console.log('Canceled');
          }
        }]

    });

    alert.present();
      

  }

}
