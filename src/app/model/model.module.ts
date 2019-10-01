import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateService } from './app-state.service';
import { AppState } from './app-state';

import { CounterService } from './counter.service';
import { Counter } from './counter';

import { InstanceService } from './instance.service';
import { Instance } from './instance';

export function initializeModelServices(
  appStateService: AppStateService,
  counterService: CounterService,
  instanceService: InstanceService
) {
  return async () => {
    Promise.all([
      appStateService.init(AppState),
      counterService.init(Counter),
      instanceService.init(Instance),
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
        InstanceService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeModelServices,
          deps: [
            AppStateService,
            CounterService,
            InstanceService,
          ],
          multi: true,
        },
      ],
    };
  }
}
