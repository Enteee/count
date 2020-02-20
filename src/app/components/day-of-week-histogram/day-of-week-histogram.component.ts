import { AfterViewInit, Component, Input, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CounterAnalyticsService, DayOfWeek } from '../../services/counter-analytics.service';
import { Counter } from '../../models/counter';

import 'anychart';


@Component({
  selector: 'app-day-of-week-histogram',
  templateUrl: './day-of-week-histogram.component.html',
  styleUrls: ['./day-of-week-histogram.component.scss'],
})
export class DayOfWeekHistogramComponent implements OnInit, AfterViewInit {

  @Input() counter: Counter;
  @ViewChild('chartContainer', {static: true}) container: ElementRef;

  chart: anychart.charts.Cartesian = anychart.column();

  constructor(
    private route: ActivatedRoute,
    private counterAnalytics: CounterAnalyticsService
  ) { }

  ngOnInit() {
    const dayOfWeekHistogramData = this.counterAnalytics.getDayOfWeekHistogramData(this.counter);

    const positiveData = this.getDayOfWeekOrder().map((dayOfWeek) => [
      this.translateDayOfWeek(dayOfWeek),
      dayOfWeekHistogramData[dayOfWeek].positive
    ]);

    const positiveSeries = this.chart.column(positiveData);
    positiveSeries.name('Plus Count');
    positiveSeries.stroke('green');
    positiveSeries.fill('green');

    const negativeData = this.getDayOfWeekOrder().map((dayOfWeek) => [
      this.translateDayOfWeek(dayOfWeek),
      dayOfWeekHistogramData[dayOfWeek].negative
    ]);

    const negativeSeries = this.chart.column(negativeData);
    negativeSeries.name('Minus Count');
    negativeSeries.stroke('red');
    negativeSeries.fill('red');

    this.chart.legend().enabled(true);
    this.chart.xAxis().labels().rotation(45);
    this.chart.yScale().ticks().allowFractional(false);
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

  translateDayOfWeek(dayOfWeek: DayOfWeek): string {
    // TODO: Delegate to i18n framework
    switch (dayOfWeek) {
      case 'monday': return 'Monday';
      case 'tuesday': return 'Tuesday';
      case 'wednesday': return 'Wednesday';
      case 'thursday': return 'Thursday';
      case 'friday': return 'Friday';
      case 'saturday': return 'Saturday';
      case 'sunday': return 'Sunday';
    }
  }

  getDayOfWeekOrder(): DayOfWeek[] {
    // TODO: Delegate to i18n framework
    return [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ];
  }

}
