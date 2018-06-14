
import { Component, OnInit,Input  } from '@angular/core';
 
  
 
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';


 
 @Component({
 
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  // encapsulation: ViewEncapsulation.None,

})
export class DetailsComponent implements OnInit {

 
  public city: object;
 
// public gsDayNames = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday'
// ];

// var d = new Date("2013-07-31");
// var dayName = gsDayNames[d.getDay()];



  constructor(
    private route:ActivatedRoute,
    private http: Http,
  
  
    // private flashMessage: FlashMessagesService
  ) { 

 


  
  }
  woeid:string;

  ngOnInit() {
    
    this.woeid = this.route.snapshot.params['woeid'];
  
    let headers = new Headers();
    this.http.get('http://localhost/weather-app-angular/weather.php?command=location&woeid='+this.woeid, {headers: headers})
    .pipe(map((response: any) => response.json())).subscribe(profile => {
      this.city = profile;
      },  err => { console.log(err);  return false; });
  }






        






}
