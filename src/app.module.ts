import { Module } from '@nestjs/common';
import { RestEmulatorModule } from './rest-emulator/rest-emulator.module';

@Module({
  imports: [RestEmulatorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
