import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from './schema/user.schema'; 
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'src/List/dto/response.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(Login.name) private loginModel: Model<Login>,
    private jwtService: JwtService
    ) {}

    async Register(registerDto:RegisterDto): Promise<Response>{
        const { name, email, password } = registerDto;

        const existUser = await this.loginModel.findOne({email:email})

        if(existUser){
            throw new UnauthorizedException('Email already exist');
        }
        else{
            const user = await this.loginModel.create({
                name,
                email,
                password
              });
          
            const payload = { sub: user.id, username: user.name };
            const token = await this.jwtService.signAsync(payload)
            const response = {success:false,message:"todo Addedd",user,token}
            return response
        }
    }

    async Login(loginDto: LoginDto): Promise<Response>{
        const { email, password } = loginDto;
    
        const user = await this.loginModel.findOne({ email:email });
    
        if (!user) {
         throw new UnauthorizedException('User not Registered');
        }
        else{
            const isPasswordMatched = user.password === password? true : false 
            if (!isPasswordMatched) {
            throw new UnauthorizedException('Invalid email or password');
        }
        const payload = { sub: user.id, username: user.name };
        const token = await this.jwtService.signAsync(payload)
        
        const response = {success:false,message:"todo Addedd",user,token}
        return response
        }
  }
}
