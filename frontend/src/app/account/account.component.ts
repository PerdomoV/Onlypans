import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  logged: any = localStorage.getItem("accessToken");

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
    
  }

  logOut(){
    localStorage.setItem("accessToken", "null");
    this.router.navigate(['/login']);
  }

}
