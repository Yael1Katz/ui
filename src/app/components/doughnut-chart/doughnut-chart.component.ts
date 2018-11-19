import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartData } from '../../models/chartData';
import { PieChartService } from '../pie-chart/pie-chart.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  @Input() cardTitle: string;
  @ViewChild(BaseChartDirective) baseChart: BaseChartDirective;
  legendData: any;
  public doughnutChartLabels: Array<any>;
  public doughnutChartData: Array<any>;
  public doughnutChartType = 'doughnut';
  // public doughnutChartColors: Array<any>;
  public doughnutChartColors: any[] = [{ backgroundColor: [] }];
  pieChartOptions: any = {};
  partsChartLegendItems: any;

  constructor(private pieChartService: PieChartService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    let data = this.pieChartService.getData();
    this.doughnutChartData = data.map(x => x.value);
    this.doughnutChartLabels = data.map(x => x.label);
    this.doughnutChartColors[0].backgroundColor = data.map(x => x.color);
    this.cdRef.detectChanges();
    this.legendData = this.baseChart.chart.legend.legendItems
  }



  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(101,120,196,0.3)',
      borderColor: 'rgb(101,120,196)',
      pointBackgroundColor: 'rgb(101,120,196)',
      pointBorderColor: '#fff',
    },
    {
      backgroundColor: 'rgba(25,209,185,0.3)',
      borderColor: 'rgb(25,209,185)',
      pointBackgroundColor: 'rgb(25,209,185)',
      pointBorderColor: '#fff',
    }
  ];

  public chartColors2: Array<any> = [
    {
      backgroundColor: 'rgba(217,93,121,0.3)',
      borderColor: 'rgb(217,93,121)',
      pointBackgroundColor: 'rgb(217,93,121)',
      pointBorderColor: '#fff',
    },
    {
      backgroundColor: 'rgba(249,174,91,0.3)',
      borderColor: 'rgb(249,174,91)',
      pointBackgroundColor: 'rgb(249,174,91)',
      pointBorderColor: '#fff',
    }
  ];

}
