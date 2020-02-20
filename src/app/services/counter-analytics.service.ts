import { Injectable } from '@angular/core';
import { CountEventRepositoryService } from '../models/count-event-repository.service';
import { Counter } from '../models/counter';

export type HistogramData = {
  positive: number,
  negative: number,
};

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
const dayOfWeekMappingList: DayOfWeek[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export type DayOfWeekHistogramData = {
  [key in DayOfWeek]: HistogramData
};

export type HourOfDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

export type HourOfDayHistogramData = {
  [key in HourOfDay]: HistogramData
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

  getHourOfDayHistogramData(counter: Counter): HourOfDayHistogramData {
    const countEvents = this.countEventRepository.getByCounter(counter);

    const data: HourOfDayHistogramData = {
      0: {positive: 0, negative: 0},
      1: {positive: 0, negative: 0},
      2: {positive: 0, negative: 0},
      3: {positive: 0, negative: 0},
      4: {positive: 0, negative: 0},
      5: {positive: 0, negative: 0},
      6: {positive: 0, negative: 0},
      7: {positive: 0, negative: 0},
      8: {positive: 0, negative: 0},
      9: {positive: 0, negative: 0},
      10: {positive: 0, negative: 0},
      11: {positive: 0, negative: 0},
      12: {positive: 0, negative: 0},
      13: {positive: 0, negative: 0},
      14: {positive: 0, negative: 0},
      15: {positive: 0, negative: 0},
      16: {positive: 0, negative: 0},
      17: {positive: 0, negative: 0},
      18: {positive: 0, negative: 0},
      19: {positive: 0, negative: 0},
      20: {positive: 0, negative: 0},
      21: {positive: 0, negative: 0},
      22: {positive: 0, negative: 0},
      23: {positive: 0, negative: 0},
    };

    for (const countEvent of countEvents) {
      const hourOfDay = countEvent.timestamp.getHours();
      if (countEvent.delta > 0) {
        data[hourOfDay].positive += countEvent.delta;
      } else {
        data[hourOfDay].negative -= countEvent.delta;
      }
    }

    return data;
  }

}
