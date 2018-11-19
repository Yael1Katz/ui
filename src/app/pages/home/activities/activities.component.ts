import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  public activities: Array<any>;
  public cardTitle: string = "Activity";

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getActivityList();
  }

}
