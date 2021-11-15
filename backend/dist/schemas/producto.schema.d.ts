import { Document } from "mongoose";
export declare type ProductoDocument = Producto & Document;
export declare class Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    url_imagen: string;
}
export declare const ProductoSchema: import("mongoose").Schema<Document<Producto, any, any>, import("mongoose").Model<Document<Producto, any, any>, any, any, any>, {}>;
