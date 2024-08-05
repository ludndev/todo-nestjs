import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from '../todos/todos.controller';
import { TodosService } from '../todos/todos.service';
import { PrismaService } from '../prisma/prisma.service';
import { TodosModule } from '../todos/todos.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';

@Module({
  imports: [TodosModule, UsersModule, PrismaModule],
  controllers: [AppController, UsersController, TodosController],
  providers: [AppService, UsersService, TodosService, PrismaService],
})
export class AppModule {}
