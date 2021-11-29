import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  logged: any = localStorage.getItem("accessToken");

  constructor() { }

  ngOnInit(): void {
    
  }

}
