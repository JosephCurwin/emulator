import { Test, TestingModule } from '@nestjs/testing';
import { LogReceaverController } from './log-receaver.controller';

describe('LogReceaverController', () => {
  let controller: LogReceaverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogReceaverController],
    }).compile();

    controller = module.get<LogReceaverController>(LogReceaverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
