"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create_product.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async fetchAllProducts(res) {
        const products = await this.productService.getProducts();
        return res.status(common_2.HttpStatus.CREATED).json(products);
    }
    async fetchProduct(res, productID) {
        const product = await this.productService.getProduct(productID);
        if (!product)
            throw new common_2.NotFoundException('El producto no existe');
        return res.status(common_2.HttpStatus.OK).json(product);
    }
    async createProduct(res, createProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(common_2.HttpStatus.CREATED).json({
            message: 'Product created',
            product: product
        });
    }
    async updateProduct(res, editProduct, productID) {
        const updatedProduct = await this.productService.updateProduct(productID, editProduct);
        if (!updatedProduct)
            throw new common_2.NotFoundException('El producto no existe');
        return res.status(common_2.HttpStatus.OK).json({
            message: 'Producto actualizado exitosamente',
            updatedProduct: updatedProduct
        });
    }
    async deleteProduct(res, productID) {
        const deletedProduct = await this.productService.deleteProduct(productID);
        if (!deletedProduct)
            throw new common_2.NotFoundException('El producto no existe');
        return res.status(common_2.HttpStatus.OK).json({
            message: 'Producto borrado exitosamente',
            productDeleted: deletedProduct
        });
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "fetchAllProducts", null);
__decorate([
    (0, common_2.Get)('/:productID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "fetchProduct", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_2.Put)('/:productID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_2.Delete)('/:productID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('ProductID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map