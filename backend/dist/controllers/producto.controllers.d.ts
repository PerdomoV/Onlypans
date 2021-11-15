import { Producto } from "src/schemas/producto.schema";
import { ProductoService } from "src/services/producto.service";
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    createBook(response: any, producto: Producto): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    update(response: any, id: any, book: Producto): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
