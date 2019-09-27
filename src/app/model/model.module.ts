import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterService } from './counter.service';
import { Counter } from './counter';


export function initializeModelServices(
  counterService: CounterService
) {
  return async () => {
    await counterService.init(Counter);
  }
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
        {
          provide: APP_INITIALIZER,
          useFactory: initializeModelServices,
          deps: [
            CounterService
          ],
          multi: true,
        },
      ],
    };
  }
}
