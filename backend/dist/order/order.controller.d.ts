import { OrderService } from './order.service';
import { CreatePedidoDTO } from './dto/create_order-dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(res: any, orderDTO: CreatePedidoDTO): Promise<any>;
}
