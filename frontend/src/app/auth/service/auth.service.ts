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

  async login(user: IUser): Promise< Observable<ILoginStatus> >{
    return await this.httpClient.post<ILoginStatus>(`${this.API_URL}/auth/login`, user);
  }

  async register(user: IUser): Promise< Observable<IRegistrationStatus> >{
    return await this.httpClient.post<IRegistrationStatus>(`${this.API_URL}/auth/register`, user);
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

