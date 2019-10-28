import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { PositionService } from './position.service';

describe('PositionService', () => {

  let appState: AppState;
  let appStateRepositoryService: AppStateRepositoryService;

  let geolocation: Geolocation;

  let service: PositionService;

  beforeEach(() => {
    appState = new AppState();

    appStateRepositoryService = new AppStateRepositoryService(
      {} as any,
    );
    spyOnProperty(
      appStateRepositoryService,
      'state',
    ).and.returnValue(appState);

    geolocation = {
      getCurrentPosition: () => {},
    } as any;

    service = new PositionService(
      appStateRepositoryService,
      geolocation,
    );

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get position if app state allows', async () => {
    const position = {} as any;

    appState.recordPosition = true;

    const geolocationGetCurrentPositionSpy = spyOn(
      geolocation,
      'getCurrentPosition'
    ).and.returnValue(
      Promise.resolve(position)
    );

    const position1 = await service.getPosition();
    expect(position1).toEqual(position);
    expect(geolocationGetCurrentPositionSpy).toHaveBeenCalledTimes(1);
  });

  it('can not get position if app denies', async () => {
    const position = {} as any;

    appState.recordPosition = false;

    const geolocationGetCurrentPositionSpy = spyOn(
      geolocation,
      'getCurrentPosition'
    ).and.returnValue(
      Promise.resolve(position)
    );

    const position1 = await service.getPosition();
    expect(position1).toEqual(null);
    expect(geolocationGetCurrentPositionSpy).toHaveBeenCalledTimes(0);
  });
});
