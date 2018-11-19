import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';
import { HomeComponent } from './home.component';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { CardComponent } from '../../components/card/card.component';
import { SalesComponent } from './sales/sales.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { LineChartService } from '../../components/line-chart/line-chart.service';
import { TasksComponent } from '../../pages/home/tasks/tasks.component';
import { TaskComponent } from '../../pages/home/tasks/task/task.component';
import { MessagesComponent } from '../../pages/home/messages/messages.component';
import { MessageComponent } from '../../pages/home/messages/message/message.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { FirstCharPipe } from '../../pipes/first-char.pipe';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from '../../components/doughnut-chart/doughnut-chart.component';
//import { BaSlimScroll } from '../../directives/ba-slim-scroll.directive';


@NgModule({
  declarations: [
    HomeComponent,
    PieChartComponent,
    CardComponent,
    SalesComponent,
    LineChartComponent,
    TasksComponent,
    TaskComponent,
    MessagesComponent,
    MessageComponent,
    ActivitiesComponent,
    ActivityComponent,
    FirstCharPipe,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    routing,
    ChartsModule,
    //BaSlimScroll
  ],
  providers: [
    LineChartService
  ]
})
export class HomeModule { }