import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from "@angular/common";
 

import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
 import { WeatherComponent } from './components/weather/weather.component';
 import { SearchComponent } from './components/search/search.component';
  import { DetailsComponent } from './components/details/details.component';
const appRoutes: Routes =  [

 
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
{path:'search/:bank', component: SearchComponent},
{path:'details/:woeid', component: DetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    // FlashMessagesModule.forRoot(),
    CommonModule
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

