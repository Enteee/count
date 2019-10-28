import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppState } from '../models/app-state';
import { AppStateService } from './app-state.service';

import { PositionService } from './position.service';

describe('PositionService', () => {

  let appState: AppState;
  let appStateService: AppStateService;

  let geolocation: Geolocation;

  let service: PositionService;

  beforeEach(() => {
    appState = new AppState();

    appStateService = new AppStateService(
      {} as any,
      {} as any,
    );
    spyOnProperty(
      appStateService,
      'appState'
    ).and.returnValue(appState);

    geolocation = {
      getCurrentPosition: () => {},
    } as any;

    service = new PositionService(
      appStateService,
      geolocation,
    );

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get position', async () => {
    const position = {} as any;

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
});
