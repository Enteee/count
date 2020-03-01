import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions, ApexXAxis, ApexTheme, ApexDataLabels, ApexLegend } from 'ng-apexcharts';

import { CounterAnalyticsService } from '../../services/counter-analytics.service';
import { Counter } from '../../models/counter';

@Component({
  selector: 'app-plus-minus-totals-pie-chart',
  templateUrl: './plus-minus-totals-pie-chart.component.html',
  styleUrls: ['./plus-minus-totals-pie-chart.component.scss'],
})
export class PlusMinusTotalsPieChartComponent implements OnInit {

  @Input() counter: Counter;

  chart: ApexChart = {
    type: 'pie',
    height: 500,
    toolbar: {
      show: false,
    },
  };

  series: ApexNonAxisChartSeries = [];

  labels: string[] = ['Plus', 'Minus'];

  colors: string[] = ['#10dc60', '#f04141', '#ffce00'];

  dataLabels: ApexDataLabels = {};

  legend: ApexLegend = {
    position: 'bottom',
  };

  constructor(
    private counterAnalyticsService: CounterAnalyticsService,
  ) {}

  ngOnInit() {
    const data = this.counterAnalyticsService.extractTotalData(this.counter);
    this.series = [data.totals.positive, data.totals.negative];
  }

}
