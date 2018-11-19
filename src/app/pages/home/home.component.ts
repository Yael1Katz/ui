import { Component, OnInit } from '@angular/core';
import { LineChartService } from '../../components/line-chart/line-chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private lineChartService: LineChartService) { }

  ngOnInit() {
    //this.data = this.lineChartService.geData();
  }

}
