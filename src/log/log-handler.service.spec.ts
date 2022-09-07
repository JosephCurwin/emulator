import { Test, TestingModule } from '@nestjs/testing';
import { LogHandlerService } from './log-handler.service';

describe('LogHandlerService', () => {
  let service: LogHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogHandlerService],
    }).compile();

    service = module.get<LogHandlerService>(LogHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
