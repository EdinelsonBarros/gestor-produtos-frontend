import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagerRoutingModule } from './product-manager-routing.module';
import { ProductsViewComponent } from './products-view/products-view.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ProductsViewComponent
  ],
  imports: [
    CommonModule,
    ProductManagerRoutingModule,
    MatTableModule
  ]
})
export class ProductManagerModule { }
