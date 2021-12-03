import { Model } from 'mongoose';
import { CreatePedidoDTO } from './dto/create_order-dto';
import { IPedido } from './interfaces/order.interface';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<IPedido>);
    createOrder(createProductDTO: CreatePedidoDTO): Promise<IPedido>;
}
