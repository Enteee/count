import { Counter } from '../models/counter';
import { CounterRepositoryService } from '../models/counter-repository.service';

import { CountEvent } from '../models/count-event';
import { CountEventRepositoryService } from '../models/count-event-repository.service';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let counterRepositoryService: CounterRepositoryService;
  let counterRepositoryServiceSaveSpy;

  let countEventRepositoryService: CountEventRepositoryService;
  let countEventRepositoryServiceSaveSpy;

  let service: CounterService;

  beforeEach(() => {
    counterRepositoryService = new CounterRepositoryService(
      {} as any
    );
    counterRepositoryServiceSaveSpy = spyOn(
      counterRepositoryService,
      'save'
    );

    countEventRepositoryService = new CountEventRepositoryService(
      {} as any
    );
    countEventRepositoryServiceSaveSpy = spyOn(
      countEventRepositoryService,
      'save'
    );

    service = new CounterService(
      counterRepositoryService,
      countEventRepositoryService,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should count', async () => {
    let counter = new Counter();
    let delta = 1;

    await service.count(counter, delta);

    expect(counter.count).toEqual(1);

    expect(counterRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(counterRepositoryService.save).toHaveBeenCalledWith(counter);

    expect(countEventRepositoryService.save).toHaveBeenCalledTimes(1);
    let countEvent = countEventRepositoryServiceSaveSpy.calls.argsFor(0)[0];
    expect(countEvent.type).toEqual('change');
    expect(countEvent.counterId).toEqual(counter.id);
    expect(countEvent.delta).toEqual(delta);
  });

  it('should do positive wrap around', async () => {
    let counter = new Counter();
    let delta = 1;

    counter.count = 10;
    counter.positiveWrapAroundActive = true;
    counter.positiveWrapAround = 10;

    await service.count(counter, delta);

    expect(counter.count).toEqual(1);
  });

  it('should do negative wrap around', async () => {
    let counter = new Counter();
    let delta = -1;

    counter.count = -10;
    counter.negativeWrapAroundActive = true;
    counter.negativeWrapAround = -10;

    await service.count(counter, delta);

    expect(counter.count).toEqual(-1);
  });

  it('should do negative wrap around', async () => {
    let counter = new Counter();
    let delta = -1;

    counter.count = -10;
    counter.negativeWrapAroundActive = true;
    counter.negativeWrapAround = -10;

    await service.count(counter, delta);

    expect(counter.count).toEqual(-1);
  });

  it('should reset', async () => {
    let counter = new Counter();

    counter.count = 10;

    await service.reset(counter);

    expect(counter.count).toEqual(0);

    expect(counterRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(counterRepositoryService.save).toHaveBeenCalledWith(counter);

    expect(countEventRepositoryService.save).toHaveBeenCalledTimes(1);
    let countEvent = countEventRepositoryServiceSaveSpy.calls.argsFor(0)[0];
    expect(countEvent.type).toEqual('reset');
    expect(countEvent.counterId).toEqual(counter.id);
    expect(countEvent.delta).toEqual(0);
  });
});
