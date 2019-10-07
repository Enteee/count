import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateRepositoryService } from './app-state-repository.service';
import { AppState } from './app-state';

import { CounterRepositoryService } from './counter-repository.service';
import { Counter } from './counter';

import { CountEventRepositoryService } from './count-event-repository.service';
import { CountEvent } from './count-event';

export function initializeModelServices(
  appStateRepositoryService: AppStateRepositoryService,
  counterRepositoryService: CounterRepositoryService,
  countEventService: CountEventRepositoryService
) {
  return async () => {
    await Promise.all([
      appStateRepositoryService.init(AppState),
      counterRepositoryService.init(Counter),
      countEventService.init(CountEvent),
    ]);
  };
}


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
})
export class ModelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModelModule,
      providers: [
        AppStateRepositoryService,
        CounterRepositoryService,
        CountEventRepositoryService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeModelServices,
          deps: [
            AppStateRepositoryService,
            CounterRepositoryService,
            CountEventRepositoryService,
          ],
          multi: true,
        },
      ],
    };
  }
}
