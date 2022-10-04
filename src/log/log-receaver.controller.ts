import { Controller, Post, Body } from '@nestjs/common';
import * as fs from 'fs'
// import { appendFileSync } from 'fs';


// create a interface for x to be used in the post method
export interface Dto {
    log: {
        apiRoute: string,
        timestamp: string,
        streamOutput: string
    }
}



@Controller('log-receaver')
export class LogReceaverController {

/*
* method to receaves data from client and console.log the receaved data
*  */
/* TODO create a new file with name for log file  */
@Post()
addLog(
    @Body() dto: any) {
        console.log(`receaved log is  ${dto}`)
        // check the value of the apiRoute and create a new file with the name of the apiRoute if it does not exist
        
        // let x = JSON.parse(dto.log.streamOutput) /* transforms string into human readable object */
        // dto.log.streamOutput = x
        // fs.appendFileSync(`src/log/${dto.log.apiRoute}.json`, JSON.stringify(dto) + ',\r');


        // let parsedDto = JSON.parse(dto)
        console.log(dto)
        fs.appendFileSync("changedObj.json",JSON.stringify(dto) + ',\r');



        // check if the file exist
        // if (fs.existsSync(`src/log/${dto.log.apiRoute}.json`)) {   
        //     // if the file exist append the data to the file
        //     fs.appendFileSync(`./${dto.log.apiRoute}.json`, JSON.stringify(dto) + ',\r');
        // } else {
        //     // if the file does not exist create a new file and append the data to the file
        //     fs.appendFileSync(`src/log/${dto.log.apiRoute}.json`, JSON.stringify(dto) + ',\r');
        // }
        // console.log the data

        // fs.appendFileSync('src/log/log-receaver.json', JSON.stringify(dto) + ',\r');
}

    

    
}
