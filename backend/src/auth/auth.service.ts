import { Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAuth } from './interfaces/auth.interface';
const bcrypt = require('bcrypt');
import { Document } from 'mongoose';

@Injectable()
export class AuthService {

    constructor(@InjectModel('Auth') private readonly authModel: Model<IAuth> ){}

    async signinLocal(authDTO: AuthDTO){
        //retrieve the user
        const auth = await this.authModel.find({email: authDTO.email}); 
        //Esta linea retorna un arreglo con todos los documentos de la coleccion cuyo email coincida
        const user = auth[0];
        if(!user) throw new UnauthorizedException('Credenciales incorrectas');
        const passHashed = user.password;
        //Aquí va el hasheo de la contraseña con bcrypt
        const passComparisionResult: boolean = await bcrypt.compare(authDTO.password, passHashed);
        if( !passComparisionResult ) throw new UnauthorizedException('Credenciales incorrectas');
        return user;
    }

    async signupLocal(authDTO: AuthDTO){
        
        const passwordHashed = await bcrypt.hash(authDTO.password, 10);
        authDTO.password = passwordHashed;
        const user = await new this.authModel(authDTO);

    }
}

