import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private _activityList = [
    { name: 'Nina Johns', time: "Just now", action: "added a new project", feature: "Free UI Kit", photo:"https://media.licdn.com/dms/image/C4E03AQEltA8TYBSk8w/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=8NXBD00gJbBHBzwh7snaUlr6NTESaSA69M3VTJo8p6k" },
    { name: 'James Smith', time: "40 minutes ago", action: "commented project", feature: "Free PSD Template", photo:"https://media.licdn.com/dms/image/C4E03AQHO3rlvg7qQcA/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=ozS5s0QxLfXf_iOhsAJEzm5klWHGLV8hEWMbgWYTpow" },
    { name: 'Alex Clooney', time: "1 hour ago", action: "completed task", feature: "Symo Website", photo:"https://media.licdn.com/dms/image/C4E03AQHqzkmD8gepAA/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=p9i4DoVT9G83oolD-WB0thhu5w0CXyflg0FgMoC01c8" },
    { name: 'Alexandra Spears', time: "3 hours ago", action: "added a new project", feature: "Free PSD (...)", photo:"https://media.licdn.com/dms/image/C5603AQG6FEy1eBDzBw/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=ap61x2Uzvv-NQmupJShPG1MyEP5rjkqJ4eaBIUYVn_c" }
  ];

  constructor() { }

  getActivityList() {
    return this._activityList;
  }
}
