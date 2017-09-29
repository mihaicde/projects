import { ImobService } from './../services/imob.service';
import { Imobil } from './../models/imob.model';
import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-imob-list',
  templateUrl: './imob-list.component.html',
  styleUrls: ['./imob-list.component.css']
})
export class ImobListComponent implements OnInit{

  imob: Imobil[];
  @Output() imobClicked = new EventEmitter<{index: number}>();
  
  constructor(private imobService:ImobService){
  }
 
  ngOnInit() {
    this.imobService.newImob.subscribe(
      (reload: boolean) =>{
          this.reload();
      }
    );
  this.reload();
  }

  onEditItem( index : number, newEl: boolean ){
    this.imobClicked.emit(
      {index: index});
      this.reload();
  }

  reload(){
        console.log("reload before ");
        console.log(this.imob)
        this.imob =  this.imobService.getImob();


        console.log("reload after");
        console.log(this.imob)
  }

}
