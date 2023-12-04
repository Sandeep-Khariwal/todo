import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { List } from './schema/list.schema';
import { Model, Types } from 'mongoose';
import { todoDto } from './dto/todo.dto';
import { Response } from './dto/response.dto';


@Injectable()

export class ListService {
    constructor(@InjectModel(List.name) private listModel: Model<List>){}

    async AddToDo(todoDto: todoDto):Promise<Response>{
        try {
            const {todo} = todoDto
            const result = await this.listModel.create({todo})
            const response = {success:true,message:"todo Addedd"}
            return response
        } catch (error) {
            console.log("Error in AddToDo ", error);
            const response = {success:false,message:"todo Addedd"}
            return response
        }
    }

    async GetById(id:string):Promise<Response>{
        try {
            
            const findtodo = await this.listModel.findById(id)
            if(findtodo){
                const response = {success:true,message:"todofound",todo:findtodo}
                return response
            } else {
                const response = {success:false,message:"todo not found"}
                return response 
            }
    
        } catch (error) {
            console.log("Error in GetById ", error);
            const response = {success:false,message:"error in GetById"}
            return response 
        }
    }

    async EditToDo(todo:todoDto , id:string):Promise<Response>{
        try {

            // const myid = JSON.stringify(id)
            // console.log("now id is : ", myid , typeof(myid));
            
         
            const eddited = await this.listModel.findByIdAndUpdate(id,todo,{new:true})
            const response = {success:true,message:"todo edditted",eddited}
            return response
        } catch (error) {
            console.log("Error in EditToDo ", error);
            const response = {success:false,message:"todo not Editted"}
            return response 
        }
    }

    async GetAllToDo():Promise<Response>{
        try {
            const alltodo = await this.listModel.find({})
            if(alltodo){
                const response = {success:true,message:"list found",alltodo}
                return response
            } else {
                const response = {success:false,message:"ToDo Empty"}
                return response
            }
        } catch (error) {
            console.log("Error in GetAllToDo ", error);
            const response = {success:false,message:"Alltodo not found"}
            return response 
        }
    }

}