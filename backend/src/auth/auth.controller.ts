import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('local/signin')
    signinLocal(@Body() authDTO: AuthDTO){
        return this.authService.signinLocal(authDTO);
    }

    @Post('local/signup')
    signupLocal(@Body() authDTO: AuthDTO){
        return this.authService.signupLocal(authDTO);
    }

}
