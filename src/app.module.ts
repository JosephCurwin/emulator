import { Module } from '@nestjs/common';
import { RestEmulatorModule } from './rest-emulator/rest-emulator.module';
import { ServerSentEventModule } from './server-sent-event/server-sent-event.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [RestEmulatorModule, ServerSentEventModule, LogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
