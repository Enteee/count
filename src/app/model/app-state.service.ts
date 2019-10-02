import { Injectable } from '@angular/core';

import { ModelService } from './model.service';
import { AppState } from './app-state';

@Injectable({
  providedIn: 'root'
})
export class AppStateService extends ModelService<AppState> {

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
