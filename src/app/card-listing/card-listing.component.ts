import { Component, OnInit } from '@angular/core';
import { CardService } from '../../shared/services/card.service';

import { Http,Response } from '@angular/http';


@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',

  styleUrls: ['./card-listing.component.css']
})
export class CardListingComponent implements OnInit {
   peopl : any[];
   filteredpeopl : any[];
   i:number;
  constructor(private omar:CardService) { 

    this.filteredpeopl = [];
    
      
    
  }
  onchanged(event:any){
    
    if(event.target.value != ""){
      if (event.keyCode != 13) {
      this.omar.getname(event.target.value).subscribe((res: Response) => {
        this.peopl = res.json().results;});
      }
    }
    else{
      this.peopl = [];
    }
 }
 onpressed(event:any){
   
  if (event.keyCode == 13) {
    for( this.i = 0 ; this.i < this.peopl.length;this.i++ )
    {
      this.filteredpeopl.push(this.peopl[this.i]);
    }
    this.peopl = [];
}

 }



  ngOnInit() {
  }

}
