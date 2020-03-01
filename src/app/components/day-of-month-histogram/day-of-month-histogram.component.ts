import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexPlotOptions, ApexXAxis, ApexTheme, ApexDataLabels } from 'ng-apexcharts';

import { CounterAnalyticsService } from '../../services/counter-analytics.service';
import { Counter } from '../../models/counter';

@Component({
  selector: 'app-day-of-month-histogram',
  templateUrl: './day-of-month-histogram.component.html',
  styleUrls: ['./day-of-month-histogram.component.scss'],
})
export class DayOfMonthHistogramComponent implements OnInit {

  @Input() counter: Counter;

  chart: ApexChart = {
    type: 'bar',
    height: 500,
    toolbar: {
      show: false,
    },
  };

  series: ApexAxisChartSeries = [];

  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: '95%',
    }
  };

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

  colors: string[] = ['#10dc60', '#f04141', '#ffce00'];

  dataLabels: ApexDataLabels = {
    enabled: false,
  };

  constructor(
    private counterAnalyticsService: CounterAnalyticsService,
  ) {}

  ngOnInit() {
    this.series = [
      {
        name: 'Plus',
        data: this.counterAnalyticsService.extractHistogramData(
          this.counter,
          'getDate',
          (e) => e.delta > 0,
          31,
        )
      },
      {
        name: 'Minus',
        data: this.counterAnalyticsService.extractHistogramData(
          this.counter,
          'getDate',
          (e) => e.delta < 0,
          31,
        )
      },
    ];
  }

}
