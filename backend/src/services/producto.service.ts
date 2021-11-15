import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Producto, ProductoDocument } from "src/schemas/producto.schema";

@Injectable()
export class ProductoService {

    constructor(@InjectModel(Producto.name) private productoModel: Model<ProductoDocument>) {}
    
    async create(producto: Producto): Promise<Producto> {
        const newProducto = new this.productoModel(producto);
        return newProducto.save();
    }

    async readAll(): Promise<Producto[]> {
        return await this.productoModel.find().exec();
    }

    async readById(id): Promise<Producto> {
        return await this.productoModel.findById(id).exec();
    }

    async update(id, producto: Producto): Promise<Producto> {
        return await this.productoModel.findByIdAndUpdate(id, producto, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.productoModel.findByIdAndRemove(id);
    }
}