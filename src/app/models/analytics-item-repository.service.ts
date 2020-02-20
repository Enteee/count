import { Injectable } from '@angular/core';

import { VolatileModelRepositoryService } from './model-repository.service';
import { AnalyticsItem } from './analytics-item';

import { DayOfWeekHistogramComponent } from '../components/day-of-week-histogram/day-of-week-histogram.component';
import { DayOfWeekHistogramApexComponent } from '../components/day-of-week-histogram-apex/day-of-week-histogram-apex.component';
import { HourOfDayRadarComponent } from '../components/hour-of-day-radar/hour-of-day-radar.component';

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
          description: 'Anychart Demo',
          icon: 'calendar',
          url: 'day-of-week-histogram',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        DayOfWeekHistogramApexComponent,
        {
          name: 'Day of Week Histogram',
          description: 'Apex Demo',
          icon: 'calendar',
          url: 'day-of-week-histogram-apex',
        }
      )
    );

    this.save(
      new AnalyticsItem(
        HourOfDayRadarComponent,
        {
          name: 'Hour of Day Radar',
          description: 'Apex Demo',
          icon: 'calendar',
          url: 'hour-of-day-radar',
        }
      )
    );
  }
}
