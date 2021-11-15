import { Model } from "mongoose";
import { Producto, ProductoDocument } from "src/schemas/producto.schema";
export declare class ProductoService {
    private productoModel;
    constructor(productoModel: Model<ProductoDocument>);
    create(producto: Producto): Promise<Producto>;
    readAll(): Promise<Producto[]>;
    readById(id: any): Promise<Producto>;
    update(id: any, producto: Producto): Promise<Producto>;
    delete(id: any): Promise<any>;
}
