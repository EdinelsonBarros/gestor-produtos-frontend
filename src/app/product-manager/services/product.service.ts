import { ProductRequest } from './../interfaces/ProductRequest';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ProductResponse } from '../interfaces/ProductsResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:8085/product";

  constructor(private http: HttpClient) { }

  findAllProducts(): Observable<ProductResponse[]>{
   return this.http.get<ProductResponse[]>(`${this.baseUrl}/findall`,{
    headers: {
      'Authorization': `${sessionStorage.getItem("acess-token")}`
    }
   })      
  }

  atualizarPagina(){
    this.findAllProducts();
  }

  productRegister(product: ProductRequest){
    return this.http.post(`${this.baseUrl}/create`, product,{
      headers: {
        'Authorization': `${sessionStorage.getItem("acess-token")}`
      }
    })
  }

  productUpdate(product: ProductResponse){
    return this.http.put(`${this.baseUrl}/update/${product.id}`, product, {
      headers: {
        'Authorization': `${sessionStorage.getItem("acess-token")}`
      }
    })
  }

  productDelete(product: ProductResponse){
    return this.http.delete(`${this.baseUrl}/delete/${product.id}`,  {
      headers: {
        'Authorization': `${sessionStorage.getItem("acess-token")}`
      }
    })
  }
}
