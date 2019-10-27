import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterAnalyticsService } from '../../services/counter-analytics.service';
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
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.counter = this.route.snapshot.data.counter;

    const positiveData = this.counterAnalytics.getDayOfWeekHistogramData(this.counter, 'positive');
    const positiveSeries = this.chart.column(positiveData.map((value, index) => [weekDays[index], value]));
    positiveSeries.name('Plus Count');
    positiveSeries.stroke('green');
    positiveSeries.fill('green');

    const negativeData = this.counterAnalytics.getDayOfWeekHistogramData(this.counter, 'negative');
    const negativeSeries = this.chart.column(negativeData.map((value, index) => [weekDays[index], -value]));
    negativeSeries.name('Minus Count');
    negativeSeries.stroke('red');
    negativeSeries.fill('red');
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

}
