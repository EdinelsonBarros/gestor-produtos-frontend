import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'product', loadChildren: () => import('./product-manager/product-manager.module').then(m => m.ProductManagerModule)},
  {path: '', redirectTo: "HomeComponent", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
