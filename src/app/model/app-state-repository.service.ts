import { Injectable } from '@angular/core';

import { ModelRepositoryService } from './model-repository.service';
import { AppState } from './app-state';

@Injectable({
  providedIn: 'root'
})
export class AppStateRepositoryService extends ModelRepositoryService<AppState> {

  /**
   * Get the app state, or create one if it does not exist
   */
  get state(): AppState {
    let state = this.all[0];
    if (!state) {
      state = new AppState();
    }
    return state;
  }

}
