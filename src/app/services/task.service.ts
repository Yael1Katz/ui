import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasksList = [
    { details: 'New website for Symu.co', days: "5 days delay", color: "pink" },
    { details: 'Free business  PSD Template', days: "2 days delay", color: "pink" },
    { details: 'New logo for JCD.pl', days: "5 days left", color: "grey" },
    { details: 'Free Icons Set vol. 3', days: "10 days left", color: "grey" },
  ];

  constructor() { }

  getTasks() {
    return this._tasksList;
  }
}
