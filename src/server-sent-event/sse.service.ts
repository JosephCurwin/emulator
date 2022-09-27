import { Injectable } from '@nestjs/common';


import { mockTicketData_300 } from 'src/data/mock_ticket_data_300';

import { data10k } from 'src/data/mock_ticket_data_10k';

export interface Ticket {
    id: number;
    name: string;
    status: string;
    category: string;
    text: string;
}

@Injectable()
export class SseService {


    

    getAllData(): Ticket[] {
        return mockTicketData_300
    }

    
    /* get data and change rndmly first 6 values of  */
    
        /* 
        * rnd change first 6 objects of data property values on every call 
        **/
        getRndData(): Ticket[] {
            let data = data10k;
            let rnd = Math.floor(Math.random() * 6);
            for (let i = 0; i <= 7; i++) {
                data[i].id = Math.floor(Math.random() * 1000);
            }
            return data;
        }


        getRndBigData(): Ticket[] {
            let data = data10k;
            for (let i = 0; i <= 10000 ; i++) {
                data[i].id = Math.floor(Math.random() * 1000);
                data[i].name = "Ticket " + Math.floor(Math.random() * 1000);
            }
            // console.log(data) test me or other 
            return data;
        }

        returnSingleTicket(): Ticket {

            let data = {id: 1, name: "Ticket 1", status: "open", category: "bug", text: "text"}
            // randomly change status from open to closed and vice versa with 50% chance

            let rnd = Math.floor(Math.random() * 2);
            if (rnd == 0) {
                data.status = "closed"
            } else {
                data.status = "open"
            }
            return data;
          

           
                      
        }




}



// command to create new module:
