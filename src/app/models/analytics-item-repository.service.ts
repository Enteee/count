import { Injectable } from '@angular/core';

import { VolatileModelRepositoryService } from './model-repository.service';
import { AnalyticsItem } from './analytics-item';

import { DayOfWeekHistogramComponent } from '../components/day-of-week-histogram/day-of-week-histogram.component';
import { DayOfWeekHistogramApexComponent } from '../components/day-of-week-histogram-apex/day-of-week-histogram-apex.component';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsItemRepositoryService extends VolatileModelRepositoryService<AnalyticsItem> {

  public async loadAll() {
    this.save(
      new AnalyticsItem(
        DayOfWeekHistogramComponent,
        {
          name: 'Day Of Week Histogram',
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
          name: 'Day Of Week Histogram',
          description: 'Apex Demo',
          icon: 'calendar',
          url: 'day-of-week-histogram-apex',
        }
      )
    );
  }
}
