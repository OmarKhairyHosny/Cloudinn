import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Http } from '@angular/http';


@Injectable()
export class CardService {

constructor( public http : Http) {

 }

 getname(name:string):Observable<any>{
    return this.http.get('https://swapi.co/api/people/?search='+name);
   }

}
//  getname(name:string):Observable<any>{
//      return this.http.get('https://swapi.co/api/people/?search='+name).pipe(map( res => {
//         return res;
//     }));
         
    

 




