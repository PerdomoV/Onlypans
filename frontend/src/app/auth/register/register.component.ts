import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { IUser } from '../user.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mensajeError: string | null = null;
  mensaje: string | null = null;
  email: string = "";
  password: string = "";
  password2: string = "";
  passCorrect: boolean = true;

  accessToken = localStorage.getItem('accessToken')

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  getValues(){
    console.log(this.email, this.password);
    if(this.password === this.password2){
      const user: IUser = { "email": this.email, "password": this.password };
      this.authService.register(user).subscribe(
        res =>{
          console.log(res);
          // localStorage.setItem('username',res.email);
          // localStorage.setItem('userId',res.id);
          if(res.message !== null){
            this.mensaje = res.message;
          }
        },
        err => this.mensajeError = "¡El email ingresado NO es válido!"
      );
    } else {
      this.passCorrect = false;
    }
  }
}
