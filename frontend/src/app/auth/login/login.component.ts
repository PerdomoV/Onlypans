import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginStatus } from '../login-status.interface';
import { AuthService } from '../service/auth.service';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  
  }

  async getValues(){
    console.log(this.email, this.password);
    // const user: IUser = { "email": this.email, "password": this.password };
    // const access = await this.authService.login(user);
    // console.log(access);
  }



}
