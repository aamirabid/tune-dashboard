import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() name:string | any;
  @Input() data:Array<Number> | any;
  declare chartOptions: Partial<ChartOptions> | any;
  constructor() {}

  ngOnInit(): void {
    this.initChart();
  }

  private initChart():void{
    this.chartOptions = {
      series: [
        {
          name: this.name,
          data: this.data
        }
      ],
      chart: {
        height: 150,
        type: "line",
        toolbar: {
          show: false
        },
      },
      colors: ["#7f88bb"],
      grid: {
        show: false
      },
      xaxis:{
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis:{
        show:false
      },
      markers:{
        size:5
      }
    };
  }

}
