import { Controller, Post, Body } from '@nestjs/common';
import * as fs from 'fs'
// import { appendFileSync } from 'fs';


@Controller('log-receaver')
export class LogReceaverController {

/*
* method to receaves data from client and console.log the receaved data
*  */

@Post()
addLog(
    @Body() createTaskDto: any) {
        // write the createTaskDto to a local json file
    console.log(createTaskDto);
    // write createTaskDto to a local json file
        // write the createTaskDto to a local json file seperated by a new line and a comma and adding a timestamp prperty

            /* TODO make proper JSON FIlE  */
        fs.appendFileSync('src/log/log-receaver.json', JSON.stringify(createTaskDto) + ',\r \n' + 'timestamp: ' + Date.now() + ',\r \n');

    // fs.appendFileSync('./log.json', createTaskDto);
    // fs.writeFileSync('src/log/log-receaver.json', JSON.stringify(createTaskDto.prop));
    // fs.write('log.json', createTaskDto);
    // fs.writeFile('log.json', JSON.stringify(createTaskDto));
    // fs.writeFileSync('./log.json', JSON.stringify(createTaskDto));
}

    

    
}
