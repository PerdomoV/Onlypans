import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/create_order-dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(res: any, orderDTO: CreateOrderDTO): Promise<any>;
}
