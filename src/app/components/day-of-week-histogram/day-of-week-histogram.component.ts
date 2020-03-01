import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexPlotOptions, ApexXAxis, ApexTheme } from 'ng-apexcharts';

import { CounterAnalyticsService } from '../../services/counter-analytics.service';
import { Counter } from '../../models/counter';

@Component({
  selector: 'app-day-of-week-histogram',
  templateUrl: './day-of-week-histogram.component.html',
  styleUrls: ['./day-of-week-histogram.component.scss'],
})
export class DayOfWeekHistogramComponent implements OnInit {

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
      horizontal: true,
      columnWidth: '80%',
    }
  };

  xaxis: ApexXAxis = {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  };

  colors: string[] = ['#10dc60', '#f04141', '#ffce00'];

  constructor(
    private counterAnalyticsService: CounterAnalyticsService,
  ) {}

  ngOnInit() {
    const plusData = this.counterAnalyticsService.extractHistogramData(
      this.counter,
      'getDay',
      (e) => e.delta > 0,
      7,
    );
    // make sunday last day
    plusData.push(plusData.shift());

    const minusData = this.counterAnalyticsService.extractHistogramData(
      this.counter,
      'getDay',
      (e) => e.delta < 0,
      7,
    );
    // make sunday last day
    minusData.push(minusData.shift());

    this.series = [
      {
        name: 'Plus',
        data: plusData,
      },
      {
        name: 'Minus',
        data: minusData,
      },
    ];
  }

}
