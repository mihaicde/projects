import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadImob: boolean =false;
  index:number=-1;


  onImobClicked(data: { index: number}){
      this.index=data.index;
      this.loadImob=true;
  
  }


}
