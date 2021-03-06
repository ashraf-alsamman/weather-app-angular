
import { Component, OnInit,Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
 
 
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
 


  
  @Input()  woeid: string;

  constructor(
    private route:ActivatedRoute,
    private http: Http,
  
    // private flashMessage: FlashMessagesService
  ) { 

 


  
  }
  keyword:string;

  ngOnInit() {
 
    this.keyword = this.route.snapshot.params['keyword'];

    
    this.http.get('http://localhost/weather-app-angular/weather.php?command=search&keyword='+this.keyword)
    .pipe(map((response: any) => response.json())).subscribe(profile => {
      this.city = profile;
      },  err => { console.log(err);  return false; });
  }






        






}
