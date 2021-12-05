import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  accessToken = localStorage.getItem('accessToken')
  //private authService: AuthService

  constructor(private readonly authService: AuthService, private readonly router:Router) { }

  ngOnInit(): void {
  
  }

  getValues(){
    console.log(this.email, this.password);
    const user: IUser = { "email": this.email, "password": this.password };
    this.authService.login(user).subscribe(
      res =>{
        console.log(res.accessToken);
        localStorage.setItem('accessToken',res.accessToken);
        // localStorage.setItem('username',res.email);
        // localStorage.setItem('userId',res.id);
        this.router.navigate(['/cuenta']);
      },
      err => console.log(err)
    );
  }

  // signIn(){

  // this.authService.login(this.user)
  //   .subscribe(
  //     res =>{
  //       console.log(res);
  //       localStorage.setItem('accessToken',res.accessToken);
  //       localStorage.setItem('username',res.username);
  //       localStorage.setItem('userId',res.id);

  //       this.router.navigate(['/dashboard']);
  //     },
  //     err => console.log(err)
  //     );

  // }




}
