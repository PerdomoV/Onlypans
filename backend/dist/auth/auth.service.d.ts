import { AuthDTO } from './dto/auth.dto';
import { Model } from 'mongoose';
import { IAuth } from './interfaces/auth.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly authModel;
    private jwtService;
    constructor(authModel: Model<IAuth>, jwtService: JwtService);
    signinLocal(authDTO: AuthDTO): Promise<string>;
    signupLocal(authDTO: AuthDTO): Promise<{
        success: boolean;
        message: string;
    }>;
    signUser(userId: number, email: string, type: string): Promise<string>;
}
