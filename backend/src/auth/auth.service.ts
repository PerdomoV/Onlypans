import { Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAuth } from './interfaces/auth.interface';

@Injectable()
export class AuthService {

    constructor(@InjectModel('Auth') private readonly userModel: Model<IAuth> ){}

    async signinLocal(authDTO: AuthDTO){
        //retrieve the user
        const user = await this.userModel.find({email: authDTO.email}); 
        if(!user) throw new UnauthorizedException('Credenciales incorrectas');
        //Aquí va el hasheo de la contraseña con bcrypt
        // const passwordHashed = bcryptHash(authDTO.password)
        const passwordHashed = 'contraseña hasheada';
        if( passwordHashed !== authDTO.password ) throw new UnauthorizedException('Credenciales incorrectas');
        return user;
    }

    signupLocal(authDTO: AuthDTO){

    }
}

