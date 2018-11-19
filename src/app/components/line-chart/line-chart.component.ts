import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { LineChartService } from './line-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) baseChart: BaseChartDirective;
  public lineChartLabels: Array<any>;
  public lineChartData: Array<any>;
  public lineChartType = 'line';
  public lineChartColors: Array<any>;
  public lineChartOptions: any;
  data: any;

  constructor(private lineChartService: LineChartService) {
  }

  ngOnInit() {
    this.data = this.lineChartService.getData();
    this.lineChartData = this.data.simpleLineData.datasets;
    this.lineChartLabels = this.data.simpleLineData.labels;
    this.lineChartOptions = this.data.simpleLineOptions;
    //this.lineChartColors = this.data.map(x => x.color);
    //this.cdRef.detectChanges();
    //this.data = this.baseChart.chart.legend.legendItems
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
