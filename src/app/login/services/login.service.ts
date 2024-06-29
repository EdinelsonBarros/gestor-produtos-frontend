import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginDTO } from './../interfaces/loginDTO';
import { RegisterDTO } from '../interfaces/registerDTO';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../interfaces/loginResponser';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:8080/auth";
  acessToken = "";

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  register(registerData: RegisterDTO,) {
    return this.http.post<LoginResponse>(`${this.url}/register`, registerData).pipe(
      tap(value => {
        sessionStorage.setItem("acess-token", value.token)
        sessionStorage.setItem("login", value.login)
      }) 
    )

  }

  login(loginDTO: LoginDTO) {
   return this.http.post<LoginResponse>(`${this.url}/login`, loginDTO).pipe(
      tap(value => {
        sessionStorage.setItem("acess-token", value.token)
        sessionStorage.setItem("login", value.login)
      }) 
    )
  }

  logout(){
    sessionStorage.clear();
    this.route.navigate(["home"])
  }

  isAuthenticated(): boolean{
    return !!sessionStorage.getItem("acess-token")

  }
  
}
