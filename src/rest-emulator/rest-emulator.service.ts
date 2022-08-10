import { Injectable } from '@nestjs/common';

// import json file 
import {data} from './data'

@Injectable()
export class RestEmulatorService {

    private data = [1,2,3];
    
    getAllData(){
        return data
    }
}
