import { Injectable } from '@angular/core';

import { VolatileModelRepositoryService } from './model-repository.service';
import { AnalyticsItem } from './analytics-item';

import { PlusMinusTotalsPieChartComponent } from '../components/plus-minus-totals-pie-chart/plus-minus-totals-pie-chart.component';
import { DayOfWeekHistogramComponent } from '../components/day-of-week-histogram/day-of-week-histogram.component';
import { DayOfMonthHistogramComponent } from '../components/day-of-month-histogram/day-of-month-histogram.component';
import { HourOfDayRadarComponent } from '../components/hour-of-day-radar/hour-of-day-radar.component';
import { YearHeatmapComponent } from '../components/year-heatmap/year-heatmap.component';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsItemRepositoryService extends VolatileModelRepositoryService<AnalyticsItem> {

  public async loadAll() {

    this.save(
      new AnalyticsItem(
        PlusMinusTotalsPieChartComponent,
        {
          name: 'Plus Minus Totals Pie Chart',
          description: 'Total plus and minus as a pie chart',
          icon: 'pie-chart-outline',
          url: 'plus-minus-totals-pie-chart',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        DayOfWeekHistogramComponent,
        {
          name: 'Day of Week Histogram',
          description: 'Total grouped by day of the week as a bar chart',
          icon: 'bar-chart-outline',
          url: 'day-of-week-histogram',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        DayOfMonthHistogramComponent,
        {
          name: 'Day of Month Histogram',
          description: 'Total grouped by day of the month as a bar chart',
          icon: 'bar-chart-outline',
          url: 'day-of-month-histogram',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        HourOfDayRadarComponent,
        {
          name: 'Hour of Day Radar',
          description: 'Total grouped by hour of the day as radar chart',
          icon: 'time-outline',
          url: 'hour-of-day-radar',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        YearHeatmapComponent,
        {
          name: 'Year Heatmap',
          description: 'Total for each day of the year on a two dimensional heatmap',
          icon: 'calendar-outline',
          url: 'year-heatmap',
        }
      )
    );
  }
}
