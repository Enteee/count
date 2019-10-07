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

  chart: anychart.charts.Cartesian;

  @ViewChild('chartContainer', {static: true}) container: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private counterAnalytics: CounterAnalyticsService
  ) {}

  ngOnInit() {
    const counter = this.route.snapshot.data.counter;
    const data = this.counterAnalytics.getDayOfWeekHistogramData(counter);

    this.chart = anychart.bar([
      ['Sunday', data[0]],
      ['Monday', data[1]],
      ['Tuesday', data[2]],
      ['Wednesday', data[3]],
      ['Thursday', data[4]],
      ['Friday', data[5]],
      ['Saturday', data[6]],
    ]);
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

}
