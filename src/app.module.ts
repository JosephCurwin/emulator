import { Module } from '@nestjs/common';
import { RestEmulatorModule } from './rest-emulator/rest-emulator.module';
import { ServerSentEventModule } from './server-sent-event/server-sent-event.module';

@Module({
  imports: [RestEmulatorModule, ServerSentEventModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
