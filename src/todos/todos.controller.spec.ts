import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';

describe('TodosController', () => {
  let controller: TodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
    }).compile();

    controller = module.get<TodosController>(TodosController);
  });

  // it('should return 200 status code', async () => {
  //   const response = await controller.listTodos();
  //   expect(response).toBe(200);
  // });
});
