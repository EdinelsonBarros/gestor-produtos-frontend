import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagerRoutingModule } from './product-manager-routing.module';
import { ProductsViewComponent } from './products-view/products-view.component';
import { MatTableModule } from '@angular/material/table';
import { provideHttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToolBarComponent } from './tool-bar/tool-bar.component';


@NgModule({
  declarations: [
    ProductsViewComponent,
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    ProductManagerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [provideHttpClient()]
})
export class ProductManagerModule { }
