import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: IProduct[] = [];


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.fetchAll().subscribe(
      res =>{
        //console.log(res[0]);  res es un array
        // this.router.navigate(['/dashboard']);
        this.products = res;

      },
      err => console.log(err)
    );

  }

}
