import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexPlotOptions, ApexXAxis, ApexTheme } from 'ng-apexcharts';

import { CounterAnalyticsService } from '../../services/counter-analytics.service';
import { Counter } from '../../models/counter';

@Component({
  selector: 'app-day-of-week-histogram-apex',
  templateUrl: './day-of-week-histogram-apex.component.html',
  styleUrls: ['./day-of-week-histogram-apex.component.scss'],
})
export class DayOfWeekHistogramApexComponent implements OnInit {

  @Input() counter: Counter;

  chart: ApexChart = {
    type: "bar",
    height: 500,
    toolbar: {
      show: false,
    },
  };

  series: ApexAxisChartSeries = []

  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
      columnWidth: "80%",
    }
  }

  xaxis: ApexXAxis = {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  };

  colors: string[] = ['#10dc60', '#f04141', '#ffce00'];

  constructor(
    private counterAnalyticsService: CounterAnalyticsService,
  ) {}

  ngOnInit() {
    let data = this.counterAnalyticsService.getDayOfWeekHistogramData(this.counter);
    this.series = [
      {
        name: "Plus",
        data: [
          data.monday.positive,
          data.tuesday.positive,
          data.wednesday.positive,
          data.thursday.positive,
          data.friday.positive,
          data.saturday.positive,
          data.sunday.positive,
        ]
      },
      {
        name: "Minus",
        data: [
          data.monday.negative,
          data.tuesday.negative,
          data.wednesday.negative,
          data.thursday.negative,
          data.friday.negative,
          data.saturday.negative,
          data.sunday.negative,
        ]
      },
    ];
  }

}
