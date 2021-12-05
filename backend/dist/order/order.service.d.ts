import { Model } from 'mongoose';
import { CreateOrderDTO } from './dto/create_order-dto';
import { IPedido } from './interfaces/order.interface';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<IPedido>);
    createOrder(createOrderDTO: CreateOrderDTO): Promise<IPedido>;
}
