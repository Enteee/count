import { Injectable } from '@angular/core';

import { AppState } from '../models/app-state';
import { AppStateRepositoryService } from '../models/app-state-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor(
    private appStateRepositoryService: AppStateRepositoryService,
  ) { }

  get appState() {
    return this.appStateRepositoryService.state;
  }

  async disableNotImplemented() {
    const appState = this.appStateRepositoryService.state;
    appState.disableNotImplemented = true;
    await this.appStateRepositoryService.save(appState);
  }

}
