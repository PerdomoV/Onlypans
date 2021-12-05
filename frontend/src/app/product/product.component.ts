import { Component, Input, OnInit } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() name: string = "";
  @Input() description: string = "";
  @Input() price: string = "";
  @Input() urlToImage: string = "";
  @Input() id: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
