
import { Component, OnInit,Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
 
 
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';


 
 @Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
    private route:ActivatedRoute,
    private http: Http,
  
    private router: Router,
    // private flashMessage: FlashMessagesService
  ) { 

 


  
  }
  bankName:string;

  ngOnInit() {
 
    this.bankName = this.route.snapshot.params['bank'];
    console.log(this.bankName);
    let headers = new Headers();
    this.http.get('http://localhost/weather-app-angular/weather.php?command=search&keyword='+this.bankName, {headers: headers})
    .pipe(map((response: any) => response.json())).subscribe(profile => {
      this.city = profile;
      },  err => { console.log(err);  return false; });
  }






        






}
