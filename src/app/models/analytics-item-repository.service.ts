import { Injectable } from '@angular/core';

import { VolatileModelRepositoryService } from './model-repository.service';
import { AnalyticsItem } from './analytics-item';

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
        DayOfWeekHistogramComponent,
        {
          name: 'Day of Week Histogram',
          description: '',
          icon: 'calendar',
          url: 'day-of-week-histogram',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        DayOfMonthHistogramComponent,
        {
          name: 'Day of Month Histogram',
          description: '',
          icon: 'calendar',
          url: 'day-of-month-histogram',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        HourOfDayRadarComponent,
        {
          name: 'Hour of Day Radar',
          description: '',
          icon: 'calendar',
          url: 'hour-of-day-radar',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        YearHeatmapComponent,
        {
          name: 'Year Heatmap',
          description: '',
          icon: 'calendar',
          url: 'year-heatmap',
        }
      )
    );
  }
}
