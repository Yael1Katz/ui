import { Component, OnInit } from '@angular/core';
import { NotificationsCenterService } from './notifications-center.service';

@Component({
  selector: 'app-notifications-center',
  templateUrl: './notifications-center.component.html',
  styleUrls: ['./notifications-center.component.scss']
})
export class NotificationsCenterComponent implements OnInit {
  public messages: Array<Object>;
  public notifications: Array<Object>;

  constructor(notificationsCenterService: NotificationsCenterService) {
    this.messages = notificationsCenterService.getMessages();
    this.notifications = notificationsCenterService.getNotifications();
  }

  ngOnInit() {
  }

}
