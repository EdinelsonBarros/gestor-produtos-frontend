import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { RouterLink } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    TelaLoginComponent,
    TelaCadastroComponent,
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatButtonModule, 
    MatIconModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    RouterLink,
    
   
    
  ],
  providers: [provideHttpClient()]
})
export class LoginModule { }
