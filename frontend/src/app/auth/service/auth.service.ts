import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../user.interface';
import { Observable } from 'rxjs';
import { ILoginStatus } from '../login-status.interface';
import { IRegistrationStatus } from '../registration-status.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:3000'; 

  constructor(private readonly httpClient: HttpClient) { }

  login(user: IUser): Observable<ILoginStatus>{
    return this.httpClient.post<ILoginStatus>(`${this.API_URL}/auth/local/signin`, user);
  }

  register(user: IUser): Observable<IRegistrationStatus>{
    return this.httpClient.post<IRegistrationStatus>(`${this.API_URL}/auth/local/signup`, user);
  }

  isLoggedIn():boolean{
    return false;
  }

  logout():void{

  }

  getToken():string{
    
    return '';
  }
}

