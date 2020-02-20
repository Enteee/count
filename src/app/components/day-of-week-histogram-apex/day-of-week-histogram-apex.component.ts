import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexNonAxisChartSeries, ApexTitleSubtitle, ApexPlotOptions, ApexXAxis } from 'ng-apexcharts';

import { Counter } from '../../models/counter';

@Component({
  selector: 'app-day-of-week-histogram-apex',
  templateUrl: './day-of-week-histogram-apex.component.html',
  styleUrls: ['./day-of-week-histogram-apex.component.scss'],
})
export class DayOfWeekHistogramApexComponent implements OnInit {

  @Input() counter: Counter;

  @Input() chart: ApexChart = {
      type: "bar",
      height: 500,
      toolbar: {
        show: false,
      },
  };
  @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63]
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91]
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52]
    }
  ];
  @Input() plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
      columnWidth: "80%",
      endingShape: "rounded",
    }
  }
  @Input() xaxis: ApexXAxis = {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  }

  constructor() {}

  ngOnInit() {}

}
