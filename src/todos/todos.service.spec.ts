import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import now = jest.now;

describe('TodosService', () => {
  let service: TodosService;
  let prisma: DeepMockProxy<PrismaClient>;

  const testTodos = [
    {
      id: 1,
      content: 'test content',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      content: 'test content',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      content: 'test content',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      content: 'test content',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get(TodosService);
    prisma = module.get(PrismaService);
  });

  it('should return all todos', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    prisma.todo.findMany.mockResolvedValue(testTodos); // why those rules make it work ?

    await expect(service.findAll()).resolves.toEqual(testTodos);
  });
  
  // it('should found 1 todo with status true', async () => {
  //
  // });
  //
  // it('should found 3 todos with status false', async () => {
  //
  // });
  //
  // it('should create todo', async () => {
  //
  // });
  //
  // it('should retrieve all todos', async () => {
  //
  // });
  //
  // it('should update todo [id:1] status to true', async () => {
  //
  // });
  //
  // it('should update todo [id:1] content', async () => {
  //
  // });
  //
  // it('should delete todo [id:1]', async () => {
  //
  // });
  //
  // it('should not found deleted todo [id:1]', async () => {
  //
  // });
});
