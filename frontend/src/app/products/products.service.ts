import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL: string = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  fetchAll(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.API_URL}/product`);
  }

}
