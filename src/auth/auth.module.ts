import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { Login, LoginSchema } from './schema/user.schema';
import { jwtConstants } from './auth.constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports:[MongooseModule.forFeature([{ name: Login.name, schema:LoginSchema }]),
    JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '5d' },
      })
    ],
    controllers:[AuthController],
    providers:[AuthService]
})

export class AuthModule {}
