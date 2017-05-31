import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesPage } from './quotes-page';

@NgModule({
  declarations: [
    QuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesPage),
  ],
  exports: [
    QuotesPage
  ]
})
export class QuotesPageModule {}
