import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../Models/MessageModel';
import { ConnectionRequestService } from '../service/connection-request.service';

@Component({
  selector: 'app-sender-component',
  templateUrl: './sender-component.component.html',
  styleUrls: ['./sender-component.component.css']
})
export class SenderComponent implements OnInit {

  Message: string;
  constructor(private ConnectionService: ConnectionRequestService) { }

  ngOnInit() {
    
  }

  SendMessage() {
    this.ConnectionService.sendMessage(new MessageModel(1, this.Message));
  }

}
