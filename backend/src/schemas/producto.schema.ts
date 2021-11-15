import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {

    @Prop()
    nombre: string;

    @Prop()
    descripcion: string;

    @Prop()
    precio: number;

    @Prop()
    url_imagen: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);