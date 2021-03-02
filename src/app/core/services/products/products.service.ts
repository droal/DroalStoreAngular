import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';

import {environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product): Observable<any>{
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<any>{
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
