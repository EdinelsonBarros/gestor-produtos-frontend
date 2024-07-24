import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ProductReponse } from '../interfaces/productsReponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8080/product";

  constructor(private http: HttpClient) { }

  findAllProducts(): Observable<ProductReponse[]>{
   return this.http.get<ProductReponse[]>(`${this.baseUrl}/findall`,{
    headers: {
      'Authorization': `${sessionStorage.getItem("acess-token")}`
    }
   })      
  }
}
