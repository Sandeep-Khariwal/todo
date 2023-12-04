import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { List, ListSchema } from './schema/list.schema';
import { ListController } from './list.controller';
import { ListService } from './list.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: List.name, schema:ListSchema }])],
    controllers:[ListController],
    providers:[ListService]
})

export class ListModule {}