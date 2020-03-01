import { Counter } from '../models/counter';
import { CountEvent, CountEventType } from '../models/count-event';
import { CountEventRepositoryService } from '../models/count-event-repository.service';

import { CounterAnalyticsService } from './counter-analytics.service';

describe('CounterAnalyticsService', () => {
  let counter: Counter;
  let countEvents: CountEvent[];
  let countEventRepositoryService: CountEventRepositoryService;
  let service: CounterAnalyticsService;

  beforeEach(() => {
    counter = new Counter();

    // make first test set
    countEvents = [];

    countEventRepositoryService = new CountEventRepositoryService(
      {} as any
    );
    spyOn(
      countEventRepositoryService,
      'getByCounter'
    ).and.returnValue(countEvents);

    service = new CounterAnalyticsService(countEventRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get day of week histogram', () => {

    countEvents.push(new CountEvent(counter.id, 1));
    countEvents[0].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');

    countEvents.push(new CountEvent(counter.id, 1));
    countEvents[1].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');

    countEvents.push(new CountEvent(counter.id, -3));
    countEvents[2].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');

    countEvents.push(new CountEvent(counter.id, 69));
    countEvents[3].timestamp = new Date('Fri Nov 1 2019 11:11:11 GMT+0100 (CET)');

    const result = service.extractHistogramData(
      counter,
      'getDay',
      () => true,
      7
    );

    expect(countEventRepositoryService.getByCounter).toHaveBeenCalledTimes(1);
    expect(countEventRepositoryService.getByCounter).toHaveBeenCalledWith(counter);
    expect(result).toEqual([
      0,  // sunday
      0,  // monday
      5,  // tuesday
      0,  // wednesday
      0,  // thursday
      69, // friday
      0,  // saturday
    ]);
  });

  it('can filter', () => {

    countEvents.push(new CountEvent(counter.id, 1));
    countEvents[0].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');

    countEvents.push(new CountEvent(counter.id, -1));
    countEvents[1].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');

    const result = service.extractHistogramData(
      counter,
      'getDay',
      (e) => e.delta > 0, // only positives
      7
    );

    expect(countEventRepositoryService.getByCounter).toHaveBeenCalledTimes(1);
    expect(countEventRepositoryService.getByCounter).toHaveBeenCalledWith(counter);
    expect(result).toEqual([
      0,  // sunday
      0,  // monday
      1,  // tuesday
      0,  // wednesday
      0,  // thursday
      0,  // friday
      0,  // saturday
    ]);
  });

  it('can get totals', () => {

    countEvents.push(new CountEvent(counter.id, 1));
    countEvents[0].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');

    countEvents.push(new CountEvent(counter.id, 1));
    countEvents[1].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');

    countEvents.push(new CountEvent(counter.id, -3));
    countEvents[2].timestamp = new Date('Tue Oct 29 2019 19:41:25 GMT+0100 (CET)');

    countEvents.push(new CountEvent(counter.id, 69));
    countEvents[3].timestamp = new Date('Fri Nov 1 2019 11:11:11 GMT+0100 (CET)');

    countEvents.push(new CountEvent(counter.id, 0, null, CountEventType.Reset));
    countEvents[3].timestamp = new Date('Fri Nov 1 2019 12:12:12 GMT+0100 (CET)');

    const result = service.extractTotalData(counter);

    expect(countEventRepositoryService.getByCounter).toHaveBeenCalledTimes(1);
    expect(countEventRepositoryService.getByCounter).toHaveBeenCalledWith(counter);
    expect(result).toEqual({
      totals: {
        positive: 71,
        negative: 3,
        neutral: 0,
      },
      events: {
        change: 4,
        reset: 1,
        positive: 3,
        negative: 1,
        neutral: 1,
      }
    });
  });
});
