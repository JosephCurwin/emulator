import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer() private server: any;
  wsClients=[];
  afterInit() {
    this.server.emit('testing', { do: 'stuff' });
  }


  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {

    console.log("hello")
    return "hello"
  }
}
