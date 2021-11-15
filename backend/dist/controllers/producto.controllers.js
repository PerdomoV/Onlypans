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
exports.ProductoController = void 0;
const common_1 = require("@nestjs/common");
const producto_schema_1 = require("../schemas/producto.schema");
const producto_service_1 = require("../services/producto.service");
let ProductoController = class ProductoController {
    constructor(productoService) {
        this.productoService = productoService;
    }
    async createBook(response, producto) {
        const newProducto = await this.productoService.create(producto);
        return response.status(common_1.HttpStatus.CREATED).json({
            newProducto
        });
    }
    async fetchAll(response) {
        const productos = await this.productoService.readAll();
        return response.status(common_1.HttpStatus.OK).json({
            productos
        });
    }
    async findById(response, id) {
        const producto = await this.productoService.readById(id);
        return response.status(common_1.HttpStatus.OK).json({
            producto
        });
    }
    async update(response, id, book) {
        const updatedProducto = await this.productoService.update(id, book);
        return response.status(common_1.HttpStatus.OK).json({
            updatedProducto
        });
    }
    async delete(response, id) {
        const deletedProducto = await this.productoService.delete(id);
        return response.status(common_1.HttpStatus.OK).json({
            deletedProducto
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, producto_schema_1.Producto]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "createBook", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, producto_schema_1.Producto]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "delete", null);
ProductoController = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controllers.js.map