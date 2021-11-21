import { Controller, Res, Body } from '@nestjs/common';
import { Get, Post, Put, Delete, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create_product.dto';


@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get()
    async fetchAllProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.CREATED).json(
            {
                message: 'Products listed',
                products: products
            }
        );
    }

    @Post()
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.CREATED).json({
            message: 'Product created',
            product: product
        });
    }
}
