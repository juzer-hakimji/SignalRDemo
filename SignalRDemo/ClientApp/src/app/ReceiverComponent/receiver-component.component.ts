import { Component, NgZone, OnInit } from '@angular/core';
import { MessageModel } from '../Models/MessageModel';
import { ConnectionRequestService } from '../service/connection-request.service';

@Component({
  selector: 'app-receiver-component',
  templateUrl: './receiver-component.component.html',
  styleUrls: ['./receiver-component.component.css']
})
export class ReceiverComponent implements OnInit {

  UniqueUserId: number = 1;
  Message: string;
  constructor(private ConnectionService: ConnectionRequestService, private _ngZone: NgZone) { }

  ngOnInit() {

    this.ConnectionService.MessageSubject.subscribe({
      next: (request: MessageModel) => {
        this._ngZone.run(() => {
          if (request.userId == this.UniqueUserId) {
            this.Message = request.message;
          }
        });
      }
    });
  }

}
