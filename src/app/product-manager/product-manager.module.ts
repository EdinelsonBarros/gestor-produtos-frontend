import { DEFAULT_CURRENCY_CODE,LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

import { ProductManagerRoutingModule } from './product-manager-routing.module';
import { ProductsViewComponent } from './products-view/products-view.component';
import { MatTableModule } from '@angular/material/table';
import { provideHttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogScreenUpdateProductComponent } from './dialog-screen-update-product/dialog-screen-update-product.component';
import { MatDialogModule } from '@angular/material/dialog';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    ProductsViewComponent,
    ToolBarComponent,
    ProductRegisterComponent,
    DialogScreenUpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductManagerRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    {provide: LOCALE_ID, useValue: 'pt' },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class ProductManagerModule { }
