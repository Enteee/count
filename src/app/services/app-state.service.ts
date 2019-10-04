import { Injectable } from '@angular/core';

import { AppState } from '../model/app-state';
import { AppStateRepositoryService } from  '../model/app-state-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor(
    private appStateRepositoryService: AppStateRepositoryService,
  ) { }

  set disableNotImplemented(value: boolean) {
    let appState = this.appStateRepositoryService.state;
    appState.disableNotImplemented = value;
    this.appStateRepositoryService.save(appState);
  }

}
