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
}



// command to create new module:
