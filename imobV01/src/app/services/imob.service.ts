import { Init } from './init.imob';
import { Imobil } from './../models/imob.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ImobService extends Init{

    public newImob = new EventEmitter<Boolean>();

    private imob: Imobil[];


    constructor(){
        super();
        console.log('InitService initalized...');
        this.load();
    }
   
    public getImob(){
        this.imob = JSON.parse(localStorage.getItem('imob'));
        return this.imob;
    }

    public getImobItem(index:number){
        return this.imob[index];
    }
    
    public addImob(imob: Imobil, index: number){
        this.getImob();
        if(index<0)
          this.imob.push(imob);
        else
         this.imob[index]=imob;
      localStorage.setItem('imob', JSON.stringify(this.imob));
    }
    

    public removeImob(index: number){
        this.getImob();
        this.imob.splice(index,1);
        localStorage.setItem('imob', JSON.stringify(this.imob));

    }

}
