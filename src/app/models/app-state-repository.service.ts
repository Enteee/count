import { Injectable } from '@angular/core';

import { ModelRepositoryService } from './model-repository.service';
import { AppState } from './app-state';

@Injectable({
  providedIn: 'root'
})
export class AppStateRepositoryService extends ModelRepositoryService<AppState> {

  public async init(MCtor: new (...args: any[]) => AppState) {
    await super.init(MCtor);

    // no matter how many app states were saved, only keep one.
    await this.save(
      this.all[0] || new AppState()
    );
  }

  public async save(m: AppState) {
    await this.deleteAll(); // app state is unique, delete all others before saving
    super.save(m);
  }

  get state(): AppState {
    return this.all[0];
  }

  public resolve() {
    return this.state;
  }
}
