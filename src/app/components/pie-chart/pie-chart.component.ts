import { Component, OnInit } from '@angular/core';
import { PieChartService } from './pie-chart.service';
//import * from 'chart.js';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public chartData: Array<Object>;
  private init = false;

  constructor(private pieChartService: PieChartService) {
    this.chartData = pieChartService.getData();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    // let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    // new Chart(el.getContext('2d'), null).Doughnut(this.chartData, {
    //   segmentShowStroke: false,
    //   percentageInnerCutout : 64,
    //   responsive: true
    // });
  }

  private updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    // jQuery('.pie-charts .chart').each(function(index, chart) {
    //   jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    // });
  }

}
