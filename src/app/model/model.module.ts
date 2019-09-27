import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterService } from './counter.service';
import { Counter } from './counter';

import { InstanceService } from './instance.service';
import { Instance } from './instance';

export function initializeModelServices(
  counterService: CounterService,
  instanceService: InstanceService
) {
  return async () => {
    Promise.all([
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
        CounterService,
        InstanceService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeModelServices,
          deps: [
            CounterService,
            InstanceService,
          ],
          multi: true,
        },
      ],
    };
  }
}
