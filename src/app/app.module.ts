import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginModule } from './login/login.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RouterOutlet, 
    RouterLink, 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
