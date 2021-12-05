import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from './IOrder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  API_URL: string = 'http://localhost:3000'; 

  constructor(private readonly httpClient: HttpClient) { }

  ordenar(order: IOrder): Observable<IOrder>{
    return this.httpClient.post<IOrder>(`${this.API_URL}/order`, order);
  }

}
