import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<List>;


@Schema()
export class List {
    @Prop()
    todo: string;
}

export const ListSchema = SchemaFactory.createForClass(List);