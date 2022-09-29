import { Controller, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';
import { SseService } from './sse.service';

interface MessageEvent {
    data: string | object;
}

import { Ticket } from './sse.service';

@Controller('sse')
export class SseController {

    constructor(private serverSendEventServ: SseService) {}

    // @Sse('event')
    // sendEvent(): Observable<MessageEvent> {
    //     return interval(1000).pipe(
    //         map((num: number)=> ({  
    //             data: 'hello' + num
    //         }))
    //     )
    // }

    /* alternative */
    @Sse('event')
    sendEvent(): Observable<MessageEvent> {
            // return the number of current listeners for the event
        //  
        process.on('SSE', e => {
            console.log(e.stack)
        })
        // https://stackoverflow.com/questions/9768444/possible-eventemitter-memory-leak-detected
        return interval(4000).pipe(

            map((num: number)=> ({  
                // data: this.serverSendEventServ.getRndBigData() /* set which changes */
                data: this.serverSendEventServ.returnSingleTicket() 
            }))
        )
    }


    // @Sse('datachunk')
    // sendData(): Observable<{data: number}> {

    // //    return data from servie in an intervall of 1 second
    //     return interval(1000).pipe(
    //         map((num: number)=> { 
    //             return {data: 5}
    //             // return this.serverSendEventServ.getAllData()
               
    //         })
    //     )   
    //     }

     
}
