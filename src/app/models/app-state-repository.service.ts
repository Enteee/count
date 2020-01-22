import { Injectable } from '@angular/core';

import { ModelRepositoryService } from './model-repository.service';
import { AppState } from './app-state';

@Injectable({
  providedIn: 'root'
})
export class AppStateRepositoryService extends ModelRepositoryService<AppState> {

  private appState: AppState;

  public async init(MCtor: new (...args: any[]) => AppState) {
    await super.init(MCtor);

    // no matter how many app states were saved, only keep one.
    this.appState = this.all[0] || new AppState();
    await super.deleteAll();
    await this.save(this.appState);
  }

  public async save(m: AppState) {
    this.appState = m;
    await super.save(m);
  }

  get state(): AppState {
    return this.appState;
  }

  public resolve() {
    return this.state;
  }
}
