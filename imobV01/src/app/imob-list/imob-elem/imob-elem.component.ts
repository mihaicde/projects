import { Imobil } from './../../models/imob.model';
import { ImobService } from './../../services/imob.service';
import { Component, OnChanges, Input, Output, SimpleChanges, OnInit, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-imob-elem',
  templateUrl: './imob-elem.component.html',
  styleUrls: ['./imob-elem.component.css']
})
export class ImobElemComponent implements OnInit, OnChanges {

  @Input('loadImobByIndex') id: number;
 

  imob: Imobil;
  imobForm: FormGroup;
  action : string = "Adauga";
 // reloadNeeded = new EventEmitter<Boolean>();

  constructor(private imobService:ImobService){}

  ngOnChanges(changes: SimpleChanges){
    this.initForm();
  }

  ngOnInit()
  { 
      this.initForm();

  }

  private initForm(){
    
     let rooms = 0;
     let baths = 0;
     let address = '';
     let price = 0;
     let surface = 0;
     let imgUrl='https://cdn1.iconfinder.com/data/icons/web-essentials-circle-style/48/home-2-512.png ';
   
     if(this.id>-1){
        this.action="Modifica "; 

        this.imob=this.imobService.getImobItem(this.id);
        rooms=this.imob.roomsNr;
        baths=this.imob.bathsNr;
        address=this.imob.address;
        price=this.imob.price;
        surface=this.imob.surface;
        if(this.imob.imgUrl!= null || this.imob.imgUrl != '')
          imgUrl=this.imob.imgUrl;
      
        this.imobForm = new FormGroup({
        'rooms': new FormControl(rooms, Validators.required),
        'baths': new FormControl(baths),
        'address':new FormControl(address),
        'price': new FormControl(price),
        'surface': new FormControl(surface),
        'imgUrl': new FormControl(imgUrl)  
      });
     } else {
       
       this.action="Adauga ";

        this.imobForm = new FormGroup({
        'rooms': new FormControl(rooms, Validators.required),
        'baths': new FormControl(baths),
        'address':new FormControl(address),
        'price': new FormControl(price),
        'surface': new FormControl(surface),
        'imgUrl': new FormControl(imgUrl)  
      });
     }

  }

 
  onSubmit(){
    const imobilForm: Imobil= {
        address: this.imobForm.get('address').value,
        bathsNr: this.imobForm.get('baths').value,
        roomsNr: this.imobForm.get('rooms').value,
        price: this.imobForm.get('price').value,
        surface: this.imobForm.get('surface').value,
        imgUrl: this.imobForm.get('imgUrl').value
    };

    this.imobService.addImob(imobilForm, this.id);
    
    this.imobService.newImob.emit(true);
  }

  onDelete(){
   
      if(this.id!==-1)
      this.imobService.removeImob(this.id);     
    this.imobService.newImob.emit(true);
   // this.imobService.getImob();
  }

}
