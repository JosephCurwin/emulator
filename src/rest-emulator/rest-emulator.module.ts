import { Module } from '@nestjs/common';
import { RestEmulatorController } from './rest-emulator.controller';
import { RestEmulatorService } from './rest-emulator.service';

@Module({
  controllers: [RestEmulatorController],
  providers: [RestEmulatorService]
})
export class RestEmulatorModule {}
