import { Component } from '@angular/core';
import { RegisterDTO } from '../interfaces/registerDTO';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginDTO } from '../interfaces/loginDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.scss'
})
export class TelaCadastroComponent {
  registerData: RegisterDTO = { login: '', password: '', role: '', };
  loginData: LoginDTO = { login: '', password: '' };

  password = "";

  registerForm = new FormGroup({
    userName: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(3)]
    ),
    password: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(6)]
    ),
    passwordConfirm: new FormControl(
      '',
      [Validators.required,
      Validators.minLength(6)]
    ),
    role: new FormControl(
      '',
      [Validators.required]
    )

  })

  constructor(
    private loginService: LoginService,
    private route: Router
  ) { }

  onSubmit() {
    if (
      this.registerForm.get("password")?.value == this.registerForm.get("passwordConfirm")?.value
    ) {
      this.registerData.login = this.registerForm.get("userName")?.value
      this.registerData.password = this.registerForm.get("password")?.value
      this.registerData.role = this.registerForm.get("role")?.value
      console.log(this.registerData)
      this.loginService.register(this.registerData).subscribe({
        next: () => this.route.navigate(["product/view"]),
        error: () => alert("Não foi possível realizar cadastro.")
      });

      

    } else {
      console.log("A senha e a confirmação da senha são diferentes.")
    }
  }

  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }


}
