import { ProductResponse } from '../interfaces/productsResponse';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DiaologScreenTemplateComponent } from '../../diaolog-screen-template/diaolog-screen-template.component';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.scss'
})
export class ProductsViewComponent implements OnInit{
  displayedColumns: string[] = ['productName',  'costPrice', 'salePrice', 'editar', 'excluir'];
  
  products: ProductResponse[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
     this.getProducts();
  }

  getProducts(){
    this.productService.findAllProducts().subscribe(
     (products) => this.products = products
    )
  }

  openDilogDelete(product: ProductResponse){
    this.dialog.open(DiaologScreenTemplateComponent,{
      data:{
        product: product
        
      }
    })
  }

}
