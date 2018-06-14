import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';
// import { ajax } from 'rxjs/ajax';
 
 
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
 
  user: any;
  // wid:string;
  constructor(private http: Http) {
   //   this.isDev = true;  // Change to false before deployment
      }

 

 

 
       


 
  
 

 
 
}
