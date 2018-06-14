import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    user:Object;
    title='ddfsdf';
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {

 
 
   
      
     
    


  }

}
