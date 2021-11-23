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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require('bcrypt');
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(authModel, jwtService) {
        this.authModel = authModel;
        this.jwtService = jwtService;
    }
    async signinLocal(authDTO) {
        const auth = await this.authModel.find({ email: authDTO.email });
        const user = auth[0];
        if (!user)
            throw new common_2.UnauthorizedException('Credenciales incorrectas');
        const passHashed = user.password;
        const passComparisionResult = await bcrypt.compare(authDTO.password, passHashed);
        if (!passComparisionResult)
            throw new common_2.UnauthorizedException('Credenciales incorrectas');
        return await this.signUser(user.id, user.email, 'user');
    }
    async signupLocal(authDTO) {
        const passwordHashed = await bcrypt.hash(authDTO.password, 10);
        authDTO.password = passwordHashed;
        const user = new this.authModel(authDTO);
        const usuario = await user.save();
        if (!usuario)
            throw new common_2.InternalServerErrorException('Internal server error');
        return 'Registro completado exitosamente';
    }
    async signUser(userId, email, type) {
        return await this.jwtService.sign({
            sub: userId,
            email,
            type: type,
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Auth')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map