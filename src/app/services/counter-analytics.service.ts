import { Injectable } from '@angular/core';
import { CountEventRepositoryService } from '../models/count-event-repository.service';
import { Counter } from '../models/counter';

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
const dayOfWeekMappingList: DayOfWeek[] = ['sunday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'monday'];

export type DayOfWeekHistogramData = {
  [key in DayOfWeek]: {positive, negative: number}
};

@Injectable({
  providedIn: 'root'
})
export class CounterAnalyticsService {

  constructor(
    private countEventRepository: CountEventRepositoryService,
  ) {}

  getDayOfWeekHistogramData(counter: Counter): DayOfWeekHistogramData {
    const countEvents = this.countEventRepository.getByCounter(counter);

    const data: DayOfWeekHistogramData = {
      monday: {positive: 0, negative: 0},
      tuesday: {positive: 0, negative: 0},
      wednesday: {positive: 0, negative: 0},
      thursday: {positive: 0, negative: 0},
      friday: {positive: 0, negative: 0},
      saturday: {positive: 0, negative: 0},
      sunday: {positive: 0, negative: 0},
    };

    for (const countEvent of countEvents) {
      const dayOfWeek = dayOfWeekMappingList[countEvent.timestamp.getDay()];
      if (countEvent.delta > 0) {
        data[dayOfWeek].positive += countEvent.delta;
      } else {
        data[dayOfWeek].negative -= countEvent.delta;
      }
    }

    return data;
  }

}
