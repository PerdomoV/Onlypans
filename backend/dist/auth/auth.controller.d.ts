import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signinLocal(res: any, authDTO: AuthDTO): Promise<any>;
    signupLocal(res: any, authDTO: AuthDTO): Promise<any>;
}
