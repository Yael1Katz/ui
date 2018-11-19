import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models/message';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public messages: Array<any>;
  public cardTitle: string = "Messages";
  
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

}
