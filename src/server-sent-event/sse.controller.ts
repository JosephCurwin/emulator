import { Controller, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

interface MessageEvent {
    data: string | object;
}

@Controller('sse')
export class SseController {

    @Sse('event')
    sendEvent(): Observable<MessageEvent> {
        return interval(1000).pipe(
            map((num: number)=> ({  
                data: 'hello' + num
            }))
        )
    }

}
