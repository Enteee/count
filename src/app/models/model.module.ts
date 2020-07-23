import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateRepositoryService } from './app-state-repository.service';
import { AppState } from './app-state';

import { AnalyticsItemRepositoryService } from './analytics-item-repository.service';
import { AnalyticsItem } from './analytics-item';

import { CounterRepositoryService } from './counter-repository.service';
import { Counter } from './counter';

import { CountEventRepositoryService } from './count-event-repository.service';
import { CountEvent } from './count-event';

export function initializeModelServices(
  appStateRepositoryService: AppStateRepositoryService,
  analyticsItemRepositoryService: AnalyticsItemRepositoryService,
  counterRepositoryService: CounterRepositoryService,
  countEventRepositoryService: CountEventRepositoryService
) {
  return async () => {
    await Promise.all([
      appStateRepositoryService.init(AppState, 'AppState'),
      analyticsItemRepositoryService.init(AnalyticsItem, 'AnalyticsItem'),
      counterRepositoryService.init(Counter, 'Counter'),
      countEventRepositoryService.init(CountEvent, 'CounteEvent'),
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
  static forRoot(): ModuleWithProviders<ModelModule> {
    return {
      ngModule: ModelModule,
      providers: [
        AppStateRepositoryService,
        AnalyticsItemRepositoryService,
        CounterRepositoryService,
        CountEventRepositoryService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeModelServices,
          deps: [
            AppStateRepositoryService,
            AnalyticsItemRepositoryService,
            CounterRepositoryService,
            CountEventRepositoryService,
          ],
          multi: true,
        },
      ],
    };
  }
}
