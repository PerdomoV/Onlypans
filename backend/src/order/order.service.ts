import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePedidoDTO } from './dto/create_order-dto';
import { IPedido } from './interfaces/order.interface';

@Injectable()
export class OrderService {

    constructor(@InjectModel('Order') private readonly orderModel: Model<IPedido>){}

        async createOrder(createProductDTO: CreatePedidoDTO): Promise<IPedido>{
            const product = await new this.orderModel(createProductDTO);
            return await product.save();
        }
       
    }



