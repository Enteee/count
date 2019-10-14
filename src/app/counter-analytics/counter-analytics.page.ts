import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterAnalyticsService } from '../services/counter-analytics.service';
import 'anychart';

@Component({
  selector: 'app-counter-analytics',
  templateUrl: './counter-analytics.page.html',
  styleUrls: ['./counter-analytics.page.scss'],
})
export class CounterAnalyticsPage implements OnInit, AfterViewInit {

  chart: anychart.charts.Cartesian = anychart.column();

  @ViewChild('chartContainer', {static: true}) container: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private counterAnalytics: CounterAnalyticsService
  ) {}

  ngOnInit() {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const counter = this.route.snapshot.data.counter;

    const positiveData = this.counterAnalytics.getDayOfWeekHistogramData(counter, 'positive');
    const positiveSeries = this.chart.column(positiveData.map((value, index) => [weekDays[index], value]));
    positiveSeries.name('Plus Count');
    positiveSeries.stroke('green');
    positiveSeries.fill('green');

    const negativeData = this.counterAnalytics.getDayOfWeekHistogramData(counter, 'negative');
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
