import { Injectable } from '@angular/core';

import { AppState } from '../model/app-state';
import { AppStateRepositoryService } from '../model/app-state-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor(
    private appStateRepositoryService: AppStateRepositoryService,
  ) { }

  async disableNotImplemented() {
    const appState = this.appStateRepositoryService.state;
    appState.disableNotImplemented = true;
    await this.appStateRepositoryService.save(appState);
  }

}
