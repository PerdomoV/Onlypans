import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create_product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    fetchAllProducts(res: any): Promise<any>;
    fetchProduct(res: any, productID: any): Promise<any>;
    createProduct(res: any, createProductDTO: CreateProductDTO): Promise<any>;
    updateProduct(res: any, editProduct: CreateProductDTO, productID: any): Promise<any>;
    deleteProduct(res: any, productID: any): Promise<any>;
}
