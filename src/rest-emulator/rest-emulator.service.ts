import { Injectable } from '@nestjs/common';

// import json file 
import {data} from './data'

@Injectable()
export class RestEmulatorService {

    
    
    getAllData(){
        return data
    }

    /**
     * function changes randomly 200 values of the data array property "status" from "Open" to "Closed" or vice versa
     */
    rndChangeData(){
        let rnd = Math.floor(Math.random() * 200);
        let rndStatus = Math.floor(Math.random() * 2);
        let rndStatusValue = rndStatus == 0 ? "Open" : "Closed";
        data[rnd].status = rndStatusValue;
        console.log(data[rnd].status)
        return data;

        
       
    }

      /**
     * function changes randomlyfirst 10 values from data array property "status" from "Open" to "Closed" or vice versa
     */
       rndChangefirstDataValues(){
        for(let i=0; i<300; i++){
            let rndStatus = Math.floor(Math.random() * 2);
            let rndStatusValue = rndStatus == 0 ? "Open" : "Closed";
            data[i].status = rndStatusValue;
        }
        console.log(data[0].status)
        return data;

        
       

       
        
       
    }
        
        
       
}
