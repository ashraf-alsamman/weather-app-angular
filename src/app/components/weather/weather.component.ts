
import { Component, OnInit,Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';
// @Input() data;

 
 @Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // public woeid: string;
  public city: object;
  public name: string;
  public icon: string;
  public temperature: number;
  public maximum_temperature: number;
  public minimum_temperature: number;
    public question: string;


  
  @Input()  woeid: string;

  constructor(
 
    private http: Http,
    private authService: AuthService,
    private router: Router,
    // private flashMessage: FlashMessagesService
  ) { 

 


  
  }

  ngOnInit() {
 
 
    let headers = new Headers();
     this.http.get('http://localhost/weather-app-angular/weather.php?command=location&woeid='+this.woeid, {headers: headers})
     .pipe(map((response: any) => response.json())).subscribe(profile => {
       this.city = profile;
       },  err => { console.log(err);  return false; });
 
  }






        






}
