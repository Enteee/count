import { Injectable } from '@angular/core';
import { CountEventRepositoryService } from '../models/count-event-repository.service';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterAnalyticsService {

  constructor(
    private countEventRepository: CountEventRepositoryService,
  ) {}

  getDayOfWeekHistogramData(counter: Counter, eventType: 'positive'|'negative'|'combined'): Array<number> {
    const countEvents = this.countEventRepository.getByCounter(counter);
    const data = [ 0, 0, 0, 0, 0, 0, 0 ];

    for (const countEvent of countEvents) {
      if (eventType === 'positive' && countEvent.delta < 0) {
        continue;
      }
      if (eventType === 'negative' && countEvent.delta > 0) {
        continue;
      }
      const dayOfWeek = countEvent.timestamp.getDay();
      data[dayOfWeek] += countEvent.delta;
    }

    return data;
  }

}
