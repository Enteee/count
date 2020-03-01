import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexXAxis, ApexTheme, ApexMarkers } from 'ng-apexcharts';

import { CounterAnalyticsService } from '../../services/counter-analytics.service';
import { Counter } from '../../models/counter';

@Component({
  selector: 'app-hour-of-day-radar',
  templateUrl: './hour-of-day-radar.component.html',
  styleUrls: ['./hour-of-day-radar.component.scss'],
})
export class HourOfDayRadarComponent implements OnInit {

  @Input() counter: Counter;

  chart: ApexChart = {
    type: 'radar',
    height: 500,
    toolbar: {
      show: false,
    },
  };

  series: ApexAxisChartSeries = [];

  xaxis: ApexXAxis = {
    categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  };

  colors: string[] = ['#10dc60', '#f04141', '#ffce00'];

  markers: ApexMarkers = {
    size: 0
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
          'getHours',
          (e) => e.delta > 0,
          24,
        )
      }, {
        name: 'Minus',
        data: this.counterAnalyticsService.extractHistogramData(
          this.counter,
          'getHours',
          (e) => e.delta < 0,
          24,
        )
      },
    ];
  }

}
