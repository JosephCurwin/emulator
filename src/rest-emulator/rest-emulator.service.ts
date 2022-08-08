import { Injectable } from '@nestjs/common';



@Injectable()
export class RestEmulatorService {

    private data = [1,2,3];
    
    getAllData(){

        return this.data;
    }
}
