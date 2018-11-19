import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messagesList = [
    { name: 'Nina Johns', time: "5 minutes ago", message: "Hey You! it's me again :-) I attached new (...)", photo:"https://media.licdn.com/dms/image/C4E03AQEltA8TYBSk8w/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=8NXBD00gJbBHBzwh7snaUlr6NTESaSA69M3VTJo8p6k", isNew : true },
    { name: 'Nina Johns', time: "About 20 hours ago", message: "Hey! I attached some new PSD files for (...)", photo:"https://media.licdn.com/dms/image/C4E03AQEltA8TYBSk8w/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=8NXBD00gJbBHBzwh7snaUlr6NTESaSA69M3VTJo8p6k", isNew : true },
    { name: 'James Smith', time: "2 days ago", message: "Good morning, you are fired!", photo:"https://media.licdn.com/dms/image/C4E03AQHO3rlvg7qQcA/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=ozS5s0QxLfXf_iOhsAJEzm5klWHGLV8hEWMbgWYTpow", isNew : false },
    { name: 'Nina Johns', time: "About 2 weeks ago", message: "Hello! Could You bring me coffee please?", photo:"https://media.licdn.com/dms/image/C4E03AQEltA8TYBSk8w/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=8NXBD00gJbBHBzwh7snaUlr6NTESaSA69M3VTJo8p6k", isNew : false }
  ];

  constructor() { }

  getMessages() {
    return this._messagesList;
  }
}
