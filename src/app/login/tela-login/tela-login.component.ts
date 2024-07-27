import { LoginResponse } from './../interfaces/loginResponser';
import { Component, OnChanges, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from './Usuario';
import { LoginService } from '../services/login.service';
import { LoginDTO } from '../interfaces/loginDTO';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.scss',
})
export class TelaLoginComponent {
  usuario = new Usuario();

  dataSingin: LoginDTO = {
    login: "",
    password: ""
  };

  token!: LoginResponse;



  formUsuario = new FormGroup({
    userName: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(2)]
    ),
    password: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(6)]
    )
  })

  constructor(private loginService: LoginService, private route: Router) { }

  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  logar() {
    this.dataSingin.login = this.formUsuario.get('userName')?.value
    this.dataSingin.password = this.formUsuario.get('password')?.value

    this.loginService.login(this.dataSingin).subscribe({
      next: () => this.route.navigate(["product/view"]),
      error: () => alert("Usuário e ou senha inválido!")
    })


  }


}
