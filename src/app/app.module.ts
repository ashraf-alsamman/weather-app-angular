import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from "@angular/common";
import { AuthService } from './services/auth.service';


import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
 import { WeatherComponent } from './components/weather/weather.component';

 
const appRoutes: Routes =  [

 
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    // FlashMessagesModule.forRoot(),
    CommonModule
  ],
  providers: [  AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

