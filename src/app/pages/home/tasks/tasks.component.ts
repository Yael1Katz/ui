import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  public tasks:Array<Task>;
  public cardTitle: string = "Tasks";

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

}
