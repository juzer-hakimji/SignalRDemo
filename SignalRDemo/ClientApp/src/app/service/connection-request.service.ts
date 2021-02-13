import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr/dist/esm/HubConnection';
import { HubConnectionBuilder } from '@aspnet/signalr/dist/esm/HubConnectionBuilder';
import { Subject } from 'rxjs';
import { MessageModel } from '../Models/MessageModel';

@Injectable({
  providedIn: 'root'
})
export class ConnectionRequestService {

  BaseUrl: string;
  MessageSubject = new Subject<MessageModel>();
  private Connection: HubConnection;

  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.BaseUrl = baseUrl;

    //create connection
    this.Connection = new HubConnectionBuilder()
      .withUrl(this.BaseUrl + 'chat')
      .build();

    //listen for incoming request
    this.Connection.on('NewMessage', (data: any) => {
      this.MessageSubject.next(data);
    });

    //start connection
    this.Connection.start()
  }

  sendMessage(Message: MessageModel) {
    this.Connection.invoke('SendMessage', Message);
  }
}
