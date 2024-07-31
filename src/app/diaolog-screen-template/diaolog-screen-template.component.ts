import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent } from '@angular/material/dialog';
import { ProductService } from '../product-manager/services/product.service';
import { SnackBarTemplateComponent } from '../snack-bar-template/snack-bar-template.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-diaolog-screen-template',
  template: `
  <h2>Confirma exclusão do produto {{product.product.productName}}</h2>
  <mat-dialog-actions>
  <button mat-button mat-dialog-close>Cancelar</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial (click)="deleteProduct()">Excluir</button>
  </mat-dialog-actions>
  `,
  styleUrl: './diaolog-screen-template.component.scss'
})
export class DiaologScreenTemplateComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public product: any,
    private productService: ProductService,
    private _snackBar: MatSnackBar
  ) { }

  openSnackBarSucess(){
    this._snackBar.openFromComponent(SnackBarTemplateComponent,{
      data: {
        message: "Produto excluido com sucesso",
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
        message: "Não foi possível excluir o produto",
        icon: "close",
        class: "erro"
      },
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    })
  }

  deleteProduct(){
    console.log(this.product.product)
    this.productService.productDelete(this.product.product).subscribe({
      next: () => this.openSnackBarSucess(),
      error: () => this.openSnackBarErro()

  })
  }
}
