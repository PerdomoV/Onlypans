import { IProduct } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/create_product.dto';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<IProduct>);
    getProducts(): Promise<IProduct[]>;
    getProduct(productID: string): Promise<IProduct>;
    createProduct(createProductDTO: CreateProductDTO): Promise<IProduct>;
    deleteProduct(productID: string): Promise<IProduct>;
    updateProduct(productID: string, editProduct: CreateProductDTO): Promise<IProduct>;
}
