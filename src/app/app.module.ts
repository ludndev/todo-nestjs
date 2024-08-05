import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from '../todos/todos.controller';
import { TodosService } from '../todos/todos.service';
import { PrismaService } from '../prisma/prisma.service';
import { TodosModule } from '../todos/todos.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [TodosModule, PrismaModule],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService, PrismaService],
})
export class AppModule {}
