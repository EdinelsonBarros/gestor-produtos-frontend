import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginModule } from './login/login.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SnackBarTemplateComponent } from './snack-bar-template/snack-bar-template.component';
import { MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnackBarTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RouterOutlet,
    RouterLink,
    MatIconModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
