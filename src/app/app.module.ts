import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardListingComponent } from './card-listing/card-listing.component';

import { HttpModule } from '../../node_modules/@angular/http';
import { FormsModule } from '@angular/forms';
import { CardService } from '../shared/services/card.service';
import { HttpClientModule } from '@angular/common/http';
import { DndModule } from 'ng2-dnd';

@NgModule({
   declarations: [
      AppComponent,
      CardListingComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      HttpClientModule,
      FormsModule,
      DndModule.forRoot()
   ],
   providers: [
       CardService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
