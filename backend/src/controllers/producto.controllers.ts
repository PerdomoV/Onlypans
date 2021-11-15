import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Producto } from "src/schemas/producto.schema";
import { ProductoService } from "src/services/producto.service";

@Controller('productos')
export class ProductoController {
    constructor(private readonly productoService: ProductoService){}

    @Post()
    async createBook(@Res() response, @Body() producto: Producto) {
        const newProducto = await this.productoService.create(producto);
        return response.status(HttpStatus.CREATED).json({
            newProducto
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const productos = await this.productoService.readAll();
        return response.status(HttpStatus.OK).json({
            productos
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const producto = await this.productoService.readById(id);
        return response.status(HttpStatus.OK).json({
            producto
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() book: Producto) {
        const updatedProducto = await this.productoService.update(id, book);
        return response.status(HttpStatus.OK).json({
            updatedProducto
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedProducto = await this.productoService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedProducto
        })
    }
}