import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterAnalyticsService, DayOfWeek } from '../../services/counter-analytics.service';
import 'anychart';
import { Counter } from '../../models/counter';
import { AnalyticsPage } from '../analytics-page-info';

@AnalyticsPage({
  title: 'Day Of Week Histogram',
  description: 'Shows count events grouped by the the day of week.',
  icon: 'calendar',
  link: 'day-of-week-histogram',
})
@Component({
  selector: 'app-counter-analytics',
  templateUrl: './day-of-week-histogram.page.html',
  styleUrls: ['./day-of-week-histogram.page.scss'],
})
export class DayOfWeekHistogramPage implements OnInit, AfterViewInit {

  counter: Counter;
  chart: anychart.charts.Cartesian = anychart.column();

  @ViewChild('chartContainer', {static: true}) container: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private counterAnalytics: CounterAnalyticsService
  ) {}

  ngOnInit() {
    this.counter = this.route.snapshot.data.counter;
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
