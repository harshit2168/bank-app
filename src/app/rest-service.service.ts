import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/rx';
import { Response } from '@angular/http/src/static_response'
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  userLoggedIn:boolean;


  constructor(private http: Http) {
    this.userLoggedIn=false;
   }
  url: string="http://localhost:3000/users/"
  static msg="LOGIN |";
 
   getUser(id): Observable<any>
   {
      return this.http.get(this.url + id)
      .map((response : any) => response)
     
   }
 
   postUser(user:User)
   {
     return this.http.post(this.url, user)
     .map((response:any)=>response);
   }

   setUserLoggedin(value:boolean)
   {
     this.userLoggedIn=value;
   }
 
   getUserLoggedin()
   {
     return this.userLoggedIn;
   }
 }
 
