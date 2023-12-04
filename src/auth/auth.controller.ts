import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthService } from "./auth.service";
import { Login } from "./schema/user.schema";
import { Response } from "src/List/dto/response.dto";


@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/register')
    Register(@Body() registerDto: RegisterDto): Promise<Response> {
        return this.authService.Register(registerDto)
    }
    
    @Post('/login')
    Login(@Body() loginDto: LoginDto): Promise<Response> {
        return this.authService.Login(loginDto)
    }
    
}