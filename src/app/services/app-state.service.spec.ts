import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  let appStateRepositoryService: AppStateRepositoryService;
  let service: AppStateService;

  beforeEach(() => {
    appStateRepositoryService = new AppStateRepositoryService(
      {} as any
    );
    service = new AppStateService(
      appStateRepositoryService
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get appState', () => {
    const appState = new AppState()

    let appStateRepositoryServiceStateSpy = spyOnProperty(
      appStateRepositoryService,
      'state',
    ).and.returnValue(appState);

    expect(service.appState).toEqual(appState);
    expect(appStateRepositoryServiceStateSpy).toHaveBeenCalledTimes(1);
  });

  it('can disable not implemented', () => {
    const appState = new AppState()
    appState.disableNotImplemented = false;

    spyOnProperty(
      appStateRepositoryService,
      'state'
    ).and.returnValue(appState);

    spyOn(
      appStateRepositoryService,
      'save'
    );

    service.disableNotImplemented();

    expect(appState.disableNotImplemented).toEqual(true);

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);
  });
});
