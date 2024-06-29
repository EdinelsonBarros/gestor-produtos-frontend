import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  {path: 'register', component: TelaCadastroComponent},
  {path: '', component: TelaLoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }