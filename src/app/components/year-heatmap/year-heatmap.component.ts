import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexDataLabels, ApexXAxis, ApexTheme, ApexMarkers } from 'ng-apexcharts';

import { CounterAnalyticsService } from '../../services/counter-analytics.service';
import { Counter } from '../../models/counter';

@Component({
  selector: 'app-year-heatmap',
  templateUrl: './year-heatmap.component.html',
  styleUrls: ['./year-heatmap.component.scss'],
})
export class YearHeatmapComponent implements OnInit {

  @Input() counter: Counter;

  chart: ApexChart = {
    type: 'heatmap',
    height: 500,
    toolbar: {
      show: false,
    },
  };

  series: ApexAxisChartSeries = [];

  xaxis: ApexXAxis = {
    type: 'numeric',
    categories: [
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      30, 31
    ],
    labels: {
      formatter: (value, raw) => 'Day ' + value,
    },
    tooltip: {
      enabled: false,
    },
    tickPlacement: 'on',
  };

  colors: string[] = ['#10dc60'];

  dataLabels: ApexDataLabels = {
    enabled: false
  };

  constructor(
    private counterAnalyticsService: CounterAnalyticsService,
  ) {}

  ngOnInit() {
    this.series = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'
    ].map(
      (v, i) => (
        {
          name: v,
          data: this.counterAnalyticsService.extractHistogramData(
            this.counter,
            'getDate',
            (e) => e.delta > 0 && e.timestamp.getMonth() === i,
            31,
          )
        }
      )
    ).reverse();
  }

}
