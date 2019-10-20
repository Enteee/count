import { Injectable } from '@angular/core';
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';


import { UpdateChannel } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor(
    private appStateRepositoryService: AppStateRepositoryService,
    private deploy: Deploy,
  ) { }

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

}
