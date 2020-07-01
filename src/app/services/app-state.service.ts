import { Injectable } from '@angular/core';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

import { PositionService } from './position.service';

import { UpdateChannel } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor(
    private appStateRepositoryService: AppStateRepositoryService,
    private positionService: PositionService,
    private deploy: Deploy,
  ) { }

  get appState() {
    return this.appStateRepositoryService.state;
  }

  async setSwipeCounting(v: boolean) {
    const appState = this.appStateRepositoryService.state;
    appState.swipeCounting = v;
    await this.appStateRepositoryService.save(appState);
  }

  async setVibrate(v: boolean) {
    const appState = this.appStateRepositoryService.state;
    appState.vibrate = v;
    await this.appStateRepositoryService.save(appState);
  }

  async setRecordPosition(v: boolean) {
    const appState = this.appStateRepositoryService.state;
    appState.recordPosition = v;
    // get position once in order to trigger user notification:
    try {
      await this.positionService.getPosition();
    } catch (e) {
      appState.recordPosition = false;
      await this.appStateRepositoryService.save(appState);
      return Promise.reject(e);
    }
    await this.appStateRepositoryService.save(appState);
  }

  async setDisableNotImplemented(v: boolean) {
    const appState = this.appStateRepositoryService.state;
    appState.disableNotImplemented = v;
    await this.appStateRepositoryService.save(appState);
  }

  async setUpdateChannel(v: UpdateChannel) {
    const appState = this.appStateRepositoryService.state;
    appState.updateChannel = v;
    await this.appStateRepositoryService.save(appState);

    await this.deploy.configure({
      updateMethod: (appState.updateChannel === UpdateChannel.Disabled) ? 'none' : 'background',
      channel: v,
    });
  }

  async update(updateMethod: 'background' | 'auto' = 'background') {
    const appState = this.appStateRepositoryService.state;

    await this.setUpdateChannel(appState.updateChannel);

    // Don't update: If set to disabled update channel
    if (appState.updateChannel !== UpdateChannel.Disabled) {
      await this.deploy.sync({
        updateMethod
      });
    }

  }

  async setDevelopmentMode(v: boolean) {
    const appState = this.appStateRepositoryService.state;
    appState.developmentMode = v;
    await this.appStateRepositoryService.save(appState);
  }

}
