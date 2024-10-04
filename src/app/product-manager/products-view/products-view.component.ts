import { ProductResponse } from '../interfaces/ProductsResponse';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DiaologScreenTemplateComponent } from '../../diaolog-screen-template/diaolog-screen-template.component';
import { DialogScreenUpdateProductComponent } from '../dialog-screen-update-product/dialog-screen-update-product.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.scss'
})
export class ProductsViewComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'costPrice', 'salePrice', 'editar', 'excluir'];

  productsDataSource = new MatTableDataSource<ProductResponse>();
  products: ProductResponse[] = []

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
    
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.findAllProducts().subscribe(
      (products) => {
        this.products = products
        this.productsDataSource.data = this.products
      }
      
    )
  }

  openDialogDelete(product: ProductResponse) {
    const dialogRef = this.dialog.open(DiaologScreenTemplateComponent, {
      data: {
        operation: "delete",
        title: `Deseja mesmo excluir ${product.productName}?`,
        product: product

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
       this.products = this.products.filter((element) => element.id != result)
       this.productsDataSource.data = this.products
      }
    })
  }

  openDialogUpdate(product: ProductResponse) {
    const dialogRef = this.dialog.open(DialogScreenUpdateProductComponent, {
      data: {
        operation: "update",
        title: "Altere os dados que deseja.",
        product: product

      }
    })
    dialogRef.afterClosed().subscribe(result => {
      const indice = this.products.indexOf(product)
      this.products.splice(indice, 1, result)
      this.productsDataSource.data = this.products 
      console.log(this.products)
      console.log(indice)
    })

  }


}
