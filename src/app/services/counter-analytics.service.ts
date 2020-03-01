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
)


@Injectable({
  providedIn: 'root'
})
export class CounterAnalyticsService {

  constructor(
    private countEventRepository: CountEventRepositoryService,
  ) {}

  public extractHistogramData(
    counter:Counter,
    dateAggregationFunction: DateAggregationFunctions,
    countEventFilterCallback: CountEventFilterCallback = () => true,
    minBuckets: number = 0,
    undefinedValue: any = 0,
  ): HistogramData {
    const countEvents = this.countEventRepository.getByCounter(counter);
    let data = [];

    for (let i = 0; i < minBuckets; ++i){
      data.push(undefined);
    }

    for (const countEvent of countEvents) {

      if (!countEventFilterCallback(countEvent)) {
        continue;
      }

      const aggregationBucketIndex = countEvent.timestamp[dateAggregationFunction]();
      if ( data[aggregationBucketIndex] == undefined ){
        data[aggregationBucketIndex] = 0;
      }
      data[aggregationBucketIndex] += Math.abs(countEvent.delta);
    }

    // replace all undefined values
    for (let i = 0; i < data.length; ++i){
      if (data[i] == undefined) {
        data[i] = undefinedValue;
      }
    }

    return data;
  }

}
