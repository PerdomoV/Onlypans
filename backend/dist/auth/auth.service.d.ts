import { AuthDTO } from './dto/auth.dto';
import { Model } from 'mongoose';
import { IAuth } from './interfaces/auth.interface';
export declare class AuthService {
    private readonly authModel;
    constructor(authModel: Model<IAuth>);
    signinLocal(authDTO: AuthDTO): Promise<IAuth & {
        _id: any;
    }>;
    signupLocal(authDTO: AuthDTO): Promise<void>;
}
