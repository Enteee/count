import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateService } from './app-state.service';
import { AppState } from './app-state';

import { CounterService } from './counter.service';
import { Counter } from './counter';

import { CountEventService } from './count-event.service';
import { CountEvent } from './count-event';

export function initializeModelServices(
  appStateService: AppStateService,
  counterService: CounterService,
  countEventService: CountEventService
) {
  return async () => {
    Promise.all([
      appStateService.init(AppState),
      counterService.init(Counter),
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
        AppStateService,
        CounterService,
        CountEventService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeModelServices,
          deps: [
            AppStateService,
            CounterService,
            CountEventService,
          ],
          multi: true,
        },
      ],
    };
  }
}
