import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

import { AppState, UpdateChannel } from '../models/app-state';
import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  let appState: AppState;
  let appStateRepositoryService: AppStateRepositoryService;
  let deploy: Deploy;
  let service: AppStateService;

  beforeEach(() => {
    appState = new AppState();

    appStateRepositoryService = new AppStateRepositoryService(
      {} as any
    );
    spyOnProperty(
      appStateRepositoryService,
      'state'
    ).and.returnValue(appState);

    deploy = {
      configure: () => {},
      sync: () => {},
    } as any;

    service = new AppStateService(
      appStateRepositoryService,
      deploy,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should disable not implemented', async () => {
    appState.disableNotImplemented = false;

    spyOn(
      appStateRepositoryService,
      'save'
    );

    await service.setDisableNotImplemented(true);
    expect(appState.disableNotImplemented).toEqual(true);

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);
  });

  it('should set update channel', async () => {
    spyOn(
      appStateRepositoryService,
      'save'
    );

    spyOn(
      deploy,
      'configure'
    );

    appState.updateChannel = UpdateChannel.Production;

    await service.setUpdateChannel(
      UpdateChannel.Master
    );
    expect(appState.updateChannel).toEqual(UpdateChannel.Master);

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);

    expect(deploy.configure).toHaveBeenCalledTimes(1);
    expect(deploy.configure).toHaveBeenCalledWith({
      updateMethod: 'background',
      channel: UpdateChannel.Master,
    });
  });

  it('should disable updates', async () => {
    spyOn(
      appStateRepositoryService,
      'save'
    );

    spyOn(
      deploy,
      'configure'
    );

    appState.updateChannel = UpdateChannel.Production;

    await service.setUpdateChannel(
      UpdateChannel.Disabled
    );
    expect(appState.updateChannel).toEqual(UpdateChannel.Disabled);

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);

    expect(deploy.configure).toHaveBeenCalledTimes(1);
    expect(deploy.configure).toHaveBeenCalledWith({
      updateMethod: 'none',
      channel: UpdateChannel.Disabled,
    });
  });

  it('should update', async () => {
    spyOn(
      appStateRepositoryService,
      'save'
    );

    spyOn(
      deploy,
      'configure'
    );
    spyOn(
      deploy,
      'sync',
    );

    appState.updateChannel = UpdateChannel.Master;
    await service.update('auto');

    // does refresh and set update channel?
    expect(deploy.configure).toHaveBeenCalledTimes(1);
    expect(deploy.configure).toHaveBeenCalledWith({
      updateMethod: 'background',
      channel: UpdateChannel.Master,
    });

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);

    expect(deploy.sync).toHaveBeenCalledTimes(1);
    expect(deploy.sync).toHaveBeenCalledWith({
      updateMethod: 'auto',
    });

  });
});
