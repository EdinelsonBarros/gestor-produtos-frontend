import { Component, inject, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { ProductResponse } from '../interfaces/ProductsResponse';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarTemplateComponent } from '../../snack-bar-template/snack-bar-template.component';

@Component({
  selector: 'app-dialog-screen-update-product',
  template: `
  
  <div class="formUpdate">
    <h2>{{data.title}}</h2>
    <input type="text" [(ngModel)]="product.productName">
    <input type="number" [(ngModel)]="product.costPrice">
    <input type="number" [(ngModel)]="product.salePrice">
    <mat-dialog-actions class="actions">
    <button mat-button mat-dialog-close id="cancel">Cancelar</button>
    <button mat-button [mat-dialog-close]="true" cdkFocusInitial id="update" (click)="updateProduct()">Atualizar</button>
    </mat-dialog-actions>
  </div>
  
  `,
  styleUrl: './dialog-screen-update-product.component.scss'
})
export class DialogScreenUpdateProductComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<DialogScreenUpdateProductComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  product: ProductResponse = {
    id: '',
    productName: '',
    costPrice: 0,
    salePrice: 0,
  }

  constructor(
    private productService: ProductService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
      this.getProduct()
  }

  getProduct(){
    this.product.id = this.data.product.id
    this.product.productName = this.data.product.productName
    this.product.costPrice = this.data.product.costPrice
    this.product.salePrice = this.data.product.salePrice
  }

  updateProduct(){
    this.productService.productUpdate(this.product).subscribe({
      next: () => {
        this.dialogRef.close(this.product)
        this.openSnackBarSucess()
      }, 
      // implementar snack bar sucess
      error: () => this.openSnackBarErro()

    }
    );
  }

  openSnackBarSucess(){
    this._snackBar.openFromComponent(SnackBarTemplateComponent,{
      data: {
        message: "Produto editado com sucesso",
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
        message: "Não foi possível editar o produto",
        icon: "close",
        class: "erro"
      },
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    })
  }
}
