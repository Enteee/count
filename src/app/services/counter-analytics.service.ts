import { Injectable } from '@angular/core';
import { CountEventRepositoryService } from '../models/count-event-repository.service';
import { Counter } from '../models/counter';
import { CountEvent } from '../models/count-event';

export type CountEventFilterCallback = (CountEvent) => boolean;

export type HistogramData = number[];

export type DateAggregationFunctions = (
  | 'getDate'
  | 'getDay'
  | 'getFullYear'
  | 'getHours'
  | 'getMilliseconds'
  | 'getMinutes'
  | 'getSeconds'
  | 'getTime'
  | 'getUTCDate'
  | 'getUTCDay'
  | 'getUTCFullYear'
  | 'getUTCHours'
  | 'getUTCMilliseconds'
  | 'getUTCMinutes'
  | 'getUTCMonth'
  | 'getUTCSeconds'
);

export interface TotalData {
  totals: {
    positive: number;
    negative: number;
    neutral: number;
  };
  events: {
    change: number;
    reset: number;
    positive: number;
    negative: number;
    neutral: number;
  };
}


@Injectable({
  providedIn: 'root'
})
export class CounterAnalyticsService {

  constructor(
    private countEventRepository: CountEventRepositoryService,
  ) {}

  public extractHistogramData(
    counter: Counter,
    dateAggregationFunction: DateAggregationFunctions,
    countEventFilterCallback: CountEventFilterCallback = () => true,
    minBuckets: number = 0,
    undefinedValue: any = 0,
  ): HistogramData {
    const countEvents = this.countEventRepository.getByCounter(counter);
    const data = [];

    for (let i = 0; i < minBuckets; ++i) {
      data.push(undefined);
    }

    for (const countEvent of countEvents) {

      if (!countEventFilterCallback(countEvent)) {
        continue;
      }

      const aggregationBucketIndex = countEvent.timestamp[dateAggregationFunction]();
      if ( data[aggregationBucketIndex] === undefined ) {
        data[aggregationBucketIndex] = 0;
      }
      data[aggregationBucketIndex] += Math.abs(countEvent.delta);
    }

    // replace all undefined values
    for (let i = 0; i < data.length; ++i) {
      if (data[i] === undefined) {
        data[i] = undefinedValue;
      }
    }

    return data;
  }

  public extractTotalData(
    counter: Counter,
    countEventFilterCallback: CountEventFilterCallback = () => true,
  ): TotalData {
    const countEvents = this.countEventRepository.getByCounter(counter);
    const data = {
      totals: {
        positive: 0,
        negative: 0,
        neutral: 0,
      },
      events: {
        change: 0,
        reset: 0,
        positive: 0,
        negative: 0,
        neutral: 0,
      }
    };

    for (const countEvent of countEvents) {

      if (!countEventFilterCallback(countEvent)) {
        continue;
      }

      // aggregate counts
      if (countEvent.delta > 0) {
        data.events.positive += 1;
        data.totals.positive += countEvent.delta;
      } else if (countEvent.delta < 0) {
        data.events.negative += 1;
        data.totals.negative -= countEvent.delta;
      } else {
        data.events.neutral += 1;
        data.totals.neutral += countEvent.delta; // should always  be 0
      }

      // aggregate types
      switch (countEvent.type) {
        case 'change':
          data.events.change += 1;
          break;
        case 'reset':
          data.events.reset += 1;
          break;
      }

    }

    return data;
  }
}
