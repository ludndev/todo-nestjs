import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TodoDto } from './dto/todo.dto';

// @todo: check if Todo from @prisma/client is the same as todo.interface. if not, use todo from todo.interface

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async count(status?: boolean) {
    if (typeof status === 'boolean') {
      return await this.prisma.todo.count({
        where: {
          status: status
        },
      });
    }

    return await this.prisma.todo.count();
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.todo.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  async search(query: string) {
    return await this.prisma.todo.findMany({
      where: {
        content: {
          contains: query,
          mode: 'insensitive',
        }
      }
    });
  }

  async store(todo: TodoDto) {
    return await this.prisma.todo.create({
      data: todo,
    });
  }

  async update(id: number, todoDto: TodoDto) {
    return await this.prisma.todo.update({
      where: { id: id },
      data: todoDto,
    });
  }

  async delete(id: number) {
    return await this.prisma.todo.delete({
      where: {
        id: id,
      },
    });
  }
}
