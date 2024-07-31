import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ProductResponse } from '../interfaces/productsResponse';
import { HttpClient } from '@angular/common/http';
import { ProductRequest } from '../interfaces/productRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:8080/product";

  constructor(private http: HttpClient) { }

  findAllProducts(): Observable<ProductResponse[]>{
   return this.http.get<ProductResponse[]>(`${this.baseUrl}/findall`,{
    headers: {
      'Authorization': `${sessionStorage.getItem("acess-token")}`
    }
   })      
  }

  productRegister(product: ProductRequest){
    return this.http.post(`${this.baseUrl}/create`, product,{
      headers: {
        'Authorization': `${sessionStorage.getItem("acess-token")}`
      }
    })
  }

  productDelete(product: ProductResponse){
    console.log(product.id)
    return this.http.delete(`${this.baseUrl}/delete/${product.id}`,  {
      headers: {
        'Authorization': `${sessionStorage.getItem("acess-token")}`
      }
    })
  }
}
