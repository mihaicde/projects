import { Component } from '@angular/core';

@Component({
  selector: 'app-imob',
  templateUrl: './imob.component.html',
  styleUrls: ['./imob.component.css']
})
export class ImobComponent{

 
  loadImob: boolean =false;
  index:number=-1;


  onImobClicked(data: { index: number}){
      this.index=data.index;
      this.loadImob=true;
  
  }



}
