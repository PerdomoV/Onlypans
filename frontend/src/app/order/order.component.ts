import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from './IOrder';
import { OrderService } from './order.service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  mensaje: string | null = null;

  name: string | null = " ";
  address: string | null = " ";
  price: string | null = " ";
  id: string | null = " ";

  constructor(private readonly orderService: OrderService, 
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log(this.name, this.price);
  }

  createOrder(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.price = params.get('price');
      this.id = params.get('id');
    })
    const order: IOrder = { id: this.id, price: this.price, address: this.address };
    this.orderService.ordenar(order).subscribe(
      res =>{
        this.mensaje = "Pedido realizado con éxito, llegará pronto a tu casa";
      },
      err => console.log(err)
    );
  }

}
