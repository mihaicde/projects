import { Component, OnInit } from '@angular/core';
import { ImobService } from './../services/imob.service';
import { Imobil } from './../models/imob.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  imob: Imobil[];

  constructor(private imobService:ImobService) { }

  ngOnInit() {
     this.imob =  this.imobService.getImob();
  }

}
