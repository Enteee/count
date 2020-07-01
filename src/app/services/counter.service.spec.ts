import { Vibration } from '@ionic-native/vibration/ngx';

import { Counter } from '../models/counter';
import { CounterRepositoryService } from '../models/counter-repository.service';

import { CountEvent, Position } from '../models/count-event';
import { CountEventRepositoryService } from '../models/count-event-repository.service';
import { PositionService } from './position.service';
import { AppState } from '../models/app-state';
import { AppStateService } from './app-state.service';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let counterRepositoryService: CounterRepositoryService;
  let counterRepositoryServiceSaveSpy;

  let countEventRepositoryService: CountEventRepositoryService;
  let countEventRepositoryServiceSaveSpy;

  let position: Position;
  let positionService: PositionService;
  let positionServiceGetPositionSpy;

  let appState: AppState;
  let appStateService: AppStateService;

  let vibration: Vibration;

  let counter: Counter;
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

    position = new Position();
    positionService = new PositionService(
      {} as any,
      {} as any,
    );
    positionServiceGetPositionSpy = spyOn(
      positionService,
      'getPosition'
    ).and.returnValue(
      Promise.resolve(position)
    );

    appState = new AppState();
    appStateService = new AppStateService(
      {} as any,
      {} as any,
      {} as any,
    );
    spyOnProperty(
      appStateService,
      'appState',
    ).and.returnValue(appState);

    vibration = {
      vibrate: () => {},
    } as any;
    spyOn(
      vibration,
      'vibrate',
    );

    counter = new Counter();

    service = new CounterService(
      counterRepositoryService,
      countEventRepositoryService,
      positionService,
      appStateService,
      vibration,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can add counter', async () => {
    const newCounter = await service.addCounter();

    expect(counterRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(counterRepositoryService.save).toHaveBeenCalledWith(newCounter);
  });

  it('should count', async () => {
    const delta = 1;

    await service.count(counter, delta);

    expect(counter.count).toEqual(1);

    expect(positionServiceGetPositionSpy).toHaveBeenCalledTimes(1);

    expect(counterRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(counterRepositoryService.save).toHaveBeenCalledWith(counter);

    expect(countEventRepositoryService.save).toHaveBeenCalledTimes(1);
    const countEvent = countEventRepositoryServiceSaveSpy.calls.argsFor(0)[0];

    expect(countEvent.type).toEqual('change');
    expect(countEvent.counterId).toEqual(counter.id);
    expect(countEvent.delta).toEqual(delta);
    expect(countEvent.position).toEqual(position);
  });

  it('should wrap around on positive limit', async () => {
    const delta = 1;

    counter.count = 10;
    counter.positiveLimitActive = true;
    counter.positiveLimit = 10;

    await service.count(counter, delta);

    expect(counter.count).toEqual(1);
  });

  it('should wrap around on negative limit', async () => {
    const delta = -1;

    counter.count = -10;
    counter.negativeLimitActive = true;
    counter.negativeLimit = -10;

    await service.count(counter, delta);

    expect(counter.count).toEqual(-1);
  });

  it('should vibrate on positive count', async () => {
    appState.vibrate = true;
    counter.vibrate = true;

    await service.count(counter, 1);

    expect(vibration.vibrate).toHaveBeenCalledTimes(1);
    expect(vibration.vibrate).toHaveBeenCalledWith(
      CounterService.VIBRATION_PATTERN_POSITIVE
    );
  });

  it('should vibrate on negative count', async () => {
    appState.vibrate = true;
    counter.vibrate = true;

    await service.count(counter, -1);

    expect(vibration.vibrate).toHaveBeenCalledTimes(1);
    expect(vibration.vibrate).toHaveBeenCalledWith(
      CounterService.VIBRATION_PATTERN_NEGATIVE
    );
  });

  it('should not vibrate if counter disabled vibration', async () => {
    appState.vibrate = true;
    counter.vibrate = false;

    await service.count(counter, 1);

    expect(vibration.vibrate).toHaveBeenCalledTimes(0);
  });

  it('should not vibrate if appState disabled vibration', async () => {
    appState.vibrate = false;
    counter.vibrate = true;

    await service.count(counter, 1);

    expect(vibration.vibrate).toHaveBeenCalledTimes(0);
  });

  it('should set disable position recording on exception', async () => {
    counter.count = 0;

    positionServiceGetPositionSpy.and.throwError('nope');

    const appStateServiceSetRecordPositionSpy = spyOn(
      appStateService,
      'setRecordPosition',
    );

    await service.count(counter, 1);

    expect(appStateService.setRecordPosition).toHaveBeenCalledTimes(1);
    expect(appStateService.setRecordPosition).toHaveBeenCalledWith(false);
    expect(counter.count).toEqual(1);
  });

  it('should reset', async () => {
    counter.count = 10;

    await service.reset(counter);

    expect(counter.count).toEqual(0);

    expect(counterRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(counterRepositoryService.save).toHaveBeenCalledWith(counter);

    expect(countEventRepositoryService.save).toHaveBeenCalledTimes(1);
    const countEvent = countEventRepositoryServiceSaveSpy.calls.argsFor(0)[0];
    expect(countEvent.type).toEqual('reset');
    expect(countEvent.counterId).toEqual(counter.id);
    expect(countEvent.delta).toEqual(0);
  });
});
