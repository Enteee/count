import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

import { AppState, UpdateChannel } from '../models/app-state';
import { PositionService } from './position.service';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  let appState: AppState;
  let appStateRepositoryService: AppStateRepositoryService;
  let appStateRepositoryServiceStateSpy;
  let positionService: PositionService;
  let deploy: Deploy;
  let service: AppStateService;

  beforeEach(() => {
    appState = new AppState();

    appStateRepositoryService = new AppStateRepositoryService(
      {} as any
    );
    appStateRepositoryServiceStateSpy = spyOnProperty(
      appStateRepositoryService,
      'state'
    ).and.returnValue(appState);

    positionService = new PositionService(
      {} as any,
      {} as any,
    );

    deploy = {
      configure: () => {},
      sync: () => {},
    } as any;

    service = new AppStateService(
      appStateRepositoryService,
      positionService,
      deploy,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get appState', () => {
    expect(service.appState).toEqual(appState);
    expect(appStateRepositoryServiceStateSpy).toHaveBeenCalledTimes(1);
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

  it('should enable swipeCounting', async () => {
    appState.swipeCounting = false;

    spyOn(
      appStateRepositoryService,
      'save'
    );

    await service.setSwipeCounting(true);
    expect(appState.swipeCounting).toEqual(true);

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);
  });

  it('should enable vibrate', async () => {
    appState.vibrate = false;

    spyOn(
      appStateRepositoryService,
      'save'
    );

    await service.setVibrate(true);
    expect(appState.vibrate).toEqual(true);

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

  it('should disable record position', async () => {
    spyOn(
      positionService,
      'getPosition',
    );
    spyOn(
      appStateRepositoryService,
      'save',
    );

    appState.recordPosition = true;

    await service.setRecordPosition(false);

    expect(positionService.getPosition).toHaveBeenCalledTimes(1);

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);

    expect(appState.recordPosition).toEqual(false);
  });

  it('should not enable record position on getPosition error', async () => {
    spyOn(
      positionService,
      'getPosition',
    ).and.throwError('nope');
    spyOn(
      appStateRepositoryService,
      'save',
    );

    appState.recordPosition = false;

    await expectAsync(service.setRecordPosition(true)).toBeRejectedWith(new Error('nope'));

    expect(positionService.getPosition).toHaveBeenCalledTimes(1);

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);

    expect(appState.recordPosition).toEqual(false);
  });

  it('should enable development mode', async () => {
    appState.developmentMode = false;

    spyOn(
      appStateRepositoryService,
      'save'
    );

    await service.setDevelopmentMode(true);
    expect(appState.developmentMode).toEqual(true);

    expect(appStateRepositoryService.save).toHaveBeenCalledTimes(1);
    expect(appStateRepositoryService.save).toHaveBeenCalledWith(appState);
  });
});
