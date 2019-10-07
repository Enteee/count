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

  getDayOfWeekHistogramData(counter: Counter): Array<number> {
    const countEvents = this.countEventRepository.getByCounter(counter);
    const data = [ 0, 0, 0, 0, 0, 0, 0 ];

    for (const countEvent of countEvents) {
      const weekDay = countEvent.timestamp.getDay();
      data[weekDay] += 1;
    }

    return data;
  }

}
