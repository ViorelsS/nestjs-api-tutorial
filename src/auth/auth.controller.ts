import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    //Qui creiamo degli endpoints

    //metodo ('nome')
    //Il ruote quindi sarà POST /auth/signup perchè abbiamo impostate nel controller il nome principale
    @Post('signup')
    signup() {
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }
}