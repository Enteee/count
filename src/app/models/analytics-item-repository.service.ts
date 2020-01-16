import { Injectable } from '@angular/core';

import { VolatileModelRepositoryService } from './model-repository.service';
import { AnalyticsItem } from './analytics-item';

import { DayOfWeekHistogramComponent } from '../components/day-of-week-histogram/day-of-week-histogram.component';

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
          description: 'Shows count events grouped by the the day of week.',
          icon: 'calendar',
          url: 'day-of-week-histogram',
        }
      )
    );
  }
}
