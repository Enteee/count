import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ApexAxisChartSeries, ApexPlotOptions, ApexXAxis, ApexTheme, ApexMarkers } from 'ng-apexcharts';

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
    type: "radar",
    height: 500,
    toolbar: {
      show: false,
    },
  };

  series: ApexAxisChartSeries = []

  plotOptions: ApexPlotOptions = {
  }

  xaxis: ApexXAxis = {
    categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  };

  colors: string[] = ['#10dc60', '#f04141', '#86edae', '#f79f9f', '#ffce00'];

  markers: ApexMarkers = {
    size: 0
  }

  constructor(
    private counterAnalyticsService: CounterAnalyticsService,
  ) {}

  ngOnInit() {
    let data = this.counterAnalyticsService.getHourOfDayHistogramData(this.counter);
    this.series = [
      {
        name: "Plus",
        data: [
          // AM
          data[0].positive, data[1].positive, data[2].positive, data[3].positive,
          data[4].positive, data[5].positive, data[6].positive, data[7].positive,
          data[8].positive, data[9].positive, data[10].positive, data[11].positive,

          // PM
          data[12].positive, data[13].positive, data[14].positive, data[15].positive,
          data[16].positive, data[17].positive, data[18].positive, data[19].positive,
          data[20].positive, data[21].positive, data[22].positive, data[23].positive,
        ]
      },
      {
        name: "Minus",
        data: [
          // AM
          data[0].negative, data[1].negative, data[2].negative, data[3].negative,
          data[4].negative, data[5].negative, data[6].negative, data[7].negative,
          data[8].negative, data[9].negative, data[10].negative, data[11].negative,

          // PM
          data[12].negative, data[13].negative, data[14].negative, data[15].negative,
          data[16].negative, data[17].negative, data[18].negative, data[19].negative,
          data[20].negative, data[21].negative, data[22].negative, data[23].negative,
        ]
      },
    ];
  }

}
