import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { ListService } from "./list.service";
import { Response } from "./dto/response.dto";
import { todoDto } from "./dto/todo.dto";

@Controller("list")
export class ListController {
   constructor(private listService: ListService){}

   @Post("/add")
   AddToDo(@Body() todo:todoDto):Promise<Response>{
    return this.listService.AddToDo(todo)
   }

   @Get("/getbyid/:id")
   GetById(@Param('id') id:string):Promise<Response>{
     return this.listService.GetById(id)
   }

   @Post("/edit/:id")
   EditToDo(@Body() todo:todoDto, @Param('id') id:string ):Promise<Response>{
    return this.listService.EditToDo(todo,id)
  }

  @Get("/getalltodo")
  GetAllToDo():Promise<Response>{
   return this.listService.GetAllToDo()
  }
}