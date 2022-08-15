import { Module } from '@nestjs/common';
import { RestEmulatorModule } from './rest-emulator/rest-emulator.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [RestEmulatorModule],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
