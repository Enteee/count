import { TestBed } from '@angular/core/testing';

import { Counter } from '../models/counter';
import { CountEvent } from '../models/count-event';
import { CountEventRepositoryService } from '../models/count-event-repository.service';

import { CounterAnalyticsService } from './counter-analytics.service';

describe('CounterAnalyticsService', () => {
  let countEventRepositoryService: CountEventRepositoryService;
  let service: CounterAnalyticsService;

  beforeEach(() => {
    countEventRepositoryService = new CountEventRepositoryService(
      {} as any
    );

    service = new CounterAnalyticsService(countEventRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get day of week histogram', () => {
    const counter = new Counter();
    const countEvents = [
      new CountEvent(counter.id, 1),
      new CountEvent(counter.id, 1),
      new CountEvent(counter.id, -3),
      new CountEvent(counter.id, 69),
    ];
    countEvents[0].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');
    countEvents[1].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');
    countEvents[2].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');
    countEvents[3].timestamp = new Date('Fri Nov 1 2019 11:11:11 GMT+0100 (CET)');

    const countEventRepositoryServiceGetByCounterSpy = spyOn(
      countEventRepositoryService,
      'getByCounter'
    ).and.returnValue(countEvents);

    const result = service.getDayOfWeekHistogramData(counter);

    expect(countEventRepositoryServiceGetByCounterSpy).toHaveBeenCalledTimes(1);
    expect(countEventRepositoryServiceGetByCounterSpy).toHaveBeenCalledWith(counter);
    expect(result).toEqual({
      monday: {positive: 0, negative: 0},
      tuesday: {positive: 2, negative: 3},
      wednesday: {positive: 0, negative: 0},
      thursday: {positive: 0, negative: 0},
      friday: {positive: 69, negative: 0},
      saturday: {positive: 0, negative: 0},
      sunday: {positive: 0, negative: 0},
    });
  });
});
