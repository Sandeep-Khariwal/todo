import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ListModule } from './List/list.module';

@Module({
  imports: [ AuthModule , ListModule , MongooseModule.forRoot("mongodb+srv://sandeepkharival123:6TerDEFnxfDX5MLk@cluster0.gfuzmle.mongodb.net/todo?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
