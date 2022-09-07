import { Module } from '@nestjs/common';
import { LogReceaverController } from './log-receaver.controller';
import { LogHandlerService } from './log-handler.service';

@Module({
  controllers: [LogReceaverController],
  providers: [LogHandlerService]
})
export class LogModule {}
