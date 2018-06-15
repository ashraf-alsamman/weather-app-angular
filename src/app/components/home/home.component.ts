import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
 
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(  private router:Router,    private route:ActivatedRoute,
) { }
     location:string ;

 
 doclick()
  {
       if ( this.location != undefined )
        { 
        
          this.router.navigate(['/search', this.location]);
 
         }
  } 
 

 
 
   
      
     
    


  }

}
