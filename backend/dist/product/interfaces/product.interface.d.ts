import { Document } from "mongoose";
export interface IProduct extends Document {
    readonly name: String;
    readonly description: String;
    readonly price: Number;
    readonly urlToImage: String;
}
