import { ProductRequest } from './../interfaces/ProductRequest';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../services/product.service';
import { SnackBarTemplateComponent } from '../../snack-bar-template/snack-bar-template.component';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.scss'
})
export class ProductRegisterComponent {
productRequest: ProductRequest = {
  productName: '',
  costPrice: 0,
  salePrice: 0
};

constructor(
  private productService: ProductService,
  private _snackBar: MatSnackBar
){}
formProduct = new FormGroup({
  productName: new FormControl('Coca Lata'),
  costPrice: new FormControl(2.79),
  salePrice: new FormControl(5.00)
});



openSnackBarSucess(){
  this._snackBar.openFromComponent(SnackBarTemplateComponent,{
    data: {
      message: "Produto registrado com sucesso",
      icon: "check",
      class: "sucess"
    },
    duration: 4000,
    horizontalPosition: 'end',
    verticalPosition: 'top'
  })
}
openSnackBarErro(){
  this._snackBar.openFromComponent(SnackBarTemplateComponent,{
    data: {
      message: "Não foi possível cadastrar o produto",
      icon: "close",
      class: "erro"
    },
    duration: 4000,
    horizontalPosition: 'end',
    verticalPosition: 'top'
  })
}

registeProduct(){
  this.productRequest.productName = this.formProduct.get('productName')?.value
  this.productRequest.costPrice = this.formProduct.get('costPrice')?.value
  this.productRequest.salePrice = this.formProduct.get('salePrice')?.value
  this.productService.productRegister(this.productRequest).subscribe({
    next: () => this.openSnackBarSucess(),
    error: () => this.openSnackBarErro()
    
  })
  console.log(this.productRequest)
}

}
