import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signinLocal(authDTO: AuthDTO): Promise<import("./interfaces/auth.interface").IAuth & {
        _id: any;
    }>;
    signupLocal(authDTO: AuthDTO): Promise<void>;
}
