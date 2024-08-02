import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDto } from './dto/todo.dto';

@Controller('api/todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('/')
  async listTodos() {
    console.log('list todos');
    const data = await this.todosService.findAll();
    console.log(data);
    return data;
  }

  @Get('/:id')
  async viewTodo(@Param() params: any) {
    console.log('view todo');
    const todoId = parseInt(params.id);
    return await this.todosService.findOne(todoId);
  }

  @Post('/')
  @HttpCode(201)
  async createTodo(@Body() todoDto: TodoDto) {
    console.log('create todo');
    return await this.todosService.store(todoDto);
  }

  @Put('/:id')
  async updateTodo(@Param() params: any, @Body() todoDto: TodoDto) {
    console.log('update todo');
    const todoId = parseInt(params.id);
    return await this.todosService.update(todoId, todoDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteTodo(@Param() params: any) {
    console.log('delete todo');
    const todoId = parseInt(params.id);
    return await this.todosService.delete(todoId);
  }
}
