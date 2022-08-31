import { Controller, Get } from '@nestjs/common';
import { RestEmulatorService } from './rest-emulator.service';

@Controller('restemulator')
export class RestEmulatorController {
    constructor(private restService: RestEmulatorService){}

    @Get()
    getAllData(){
        // return this.restService.getAllData();
        return this.restService.rndChangefirstDataValues();
    }
}
//  cli command to create a new module:
//  ng generate module rest-emulator


