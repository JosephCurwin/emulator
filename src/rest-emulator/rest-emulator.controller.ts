import { Controller, Get } from '@nestjs/common';
import { RestEmulatorService } from './rest-emulator.service';
import { readFileSync, writeFileSync } from 'fs';



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


/**
 * method to receaves data from client and saves data to local json file
 *  */ 

