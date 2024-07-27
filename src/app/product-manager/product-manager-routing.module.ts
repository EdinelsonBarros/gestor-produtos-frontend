import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductRegisterComponent } from './product-register/product-register.component';

const routes: Routes = [
  { path: 'view', component: ProductsViewComponent },
  { path: 'product-register', component: ProductRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagerRoutingModule { }
